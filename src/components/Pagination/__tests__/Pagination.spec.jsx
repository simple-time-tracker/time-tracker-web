import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination buttons component', () => {
  let mockLoadPage;

  beforeEach(() => {
    mockLoadPage = vi.fn();
  });

  it('should render pagination buttons', () => {
    render(
      <Pagination
        totalPages={2}
        activePage={1}
        maxPages={5}
        loadPage={mockLoadPage}
      />
    );

    const paginationButtons = screen.getAllByRole('listitem');

    expect(paginationButtons).toHaveLength(4);

    assertSimpleLink(paginationButtons.at(0), '<');
    assertPageButton(paginationButtons.at(1), 1, true);
    assertPageButton(paginationButtons.at(2), 2);
    assertSimpleLink(paginationButtons.at(3), '>');
  });

  it('should render pagination buttons, when single page', () => {
    render(
      <Pagination
        totalPages={1}
        activePage={1}
        maxPages={5}
        loadPage={mockLoadPage}
      />
    );

    expect(screen.getByRole('navigation')).toBeTruthy();
  });

  it('should render pagination buttons, on 1st of 9 pages, when maxPages = 5', () => {
    render(
      <Pagination
        totalPages={9}
        activePage={1}
        maxPages={5}
        loadPage={mockLoadPage}
      />
    );

    const paginationButtons = screen.getAllByRole('listitem');

    expect(paginationButtons).toHaveLength(8);

    assertSimpleLink(paginationButtons.at(0), '<', true);
    assertPageButton(paginationButtons.at(1), 1, true);
    assertPageButton(paginationButtons.at(2), 2);
    assertPageButton(paginationButtons.at(3), 3);
    assertPageButton(paginationButtons.at(4), 4);
    expect(paginationButtons.at(5)).toHaveTextContent('…');
    assertPageButton(paginationButtons.at(6), 9);
    assertSimpleLink(paginationButtons.at(7), '>');
  });

  it('should render two ellipses, on 4st of 9 pages, when maxPages = 5', () => {
    render(
      <Pagination
        totalPages={9}
        activePage={4}
        maxPages={5}
        loadPage={mockLoadPage}
      />
    );

    const paginationButtons = screen.getAllByRole('listitem');

    expect(paginationButtons).toHaveLength(9);

    assertSimpleLink(paginationButtons.at(0), '<');
    assertPageButton(paginationButtons.at(1), 1);
    expect(paginationButtons.at(2)).toHaveTextContent('…');
    assertPageButton(paginationButtons.at(3), 3);
    assertPageButton(paginationButtons.at(4), 4);
    assertPageButton(paginationButtons.at(5), 5);
    expect(paginationButtons.at(6)).toHaveTextContent('…');
    assertPageButton(paginationButtons.at(7), 9);
    assertSimpleLink(paginationButtons.at(8), '>');
  });

  it('should render correct buttons, on 6st of 9 pages, when maxPages = 5', () => {
    render(
      <Pagination
        totalPages={9}
        activePage={6}
        maxPages={5}
        loadPage={mockLoadPage}
      />
    );

    const paginationButtons = screen.getAllByRole('listitem');

    expect(paginationButtons).toHaveLength(8);

    assertSimpleLink(paginationButtons.at(0), '<');
    assertPageButton(paginationButtons.at(1), 1);
    expect(paginationButtons.at(2)).toHaveTextContent('…');
    assertPageButton(paginationButtons.at(3), 6);
    assertPageButton(paginationButtons.at(4), 7);
    assertPageButton(paginationButtons.at(5), 8);
    assertPageButton(paginationButtons.at(6), 9);
    assertSimpleLink(paginationButtons.at(7), '>');
  });

  it('should disable prev page button if in first page', () => {
    render(
      <Pagination
        totalPages={2}
        activePage={1}
        maxPages={5}
        loadPage={mockLoadPage}
      />
    );

    const paginationButtons = screen.getAllByRole('listitem');

    expect(paginationButtons.at(0)).toHaveAttribute('disabled');
  });

  it('should disable next page button if in last page', () => {
    render(
      <Pagination
        totalPages={5}
        activePage={5}
        maxPages={3}
        loadPage={mockLoadPage}
      />
    );

    const paginationButtons = screen.getAllByRole('listitem');

    expect(paginationButtons.at(5)).toHaveAttribute('disabled');
  });

  it('should load next page, when next button is clicked', () => {
    render(
      <Pagination
        totalPages={3}
        activePage={1}
        maxPages={3}
        loadPage={mockLoadPage}
      />
    );
    const paginationButtons = screen.getAllByRole('listitem');
    paginationButtons.at(4).click();

    expect(mockLoadPage).toBeCalledWith(2);
  });

  it('should load previous page, when previous button is clicked', () => {
    render(
      <Pagination
        totalPages={3}
        activePage={2}
        maxPages={3}
        loadPage={mockLoadPage}
      />
    );
    const paginationButtons = screen.getAllByRole('listitem');
    paginationButtons.at(0).click();

    expect(mockLoadPage).toBeCalledWith(1);
  });

  it('should not call loadPage if on first page and previous page button is clicked', () => {
    render(
      <Pagination
        totalPages={3}
        activePage={3}
        maxPages={3}
        loadPage={mockLoadPage}
      />
    );
    const paginationButtons = screen.getAllByRole('listitem');
    paginationButtons.at(4).click();

    expect(mockLoadPage.mock.calls.length).toBe(0);
  });

  it('should not call loadPage if on last page and next page button is clicked', () => {
    const wrapper = render(
      <Pagination
        totalPages={3}
        activePage={1}
        maxPages={3}
        loadPage={mockLoadPage}
      />
    );
    const paginationButtons = screen.getAllByRole('listitem');
    paginationButtons.at(0).click();

    expect(mockLoadPage.mock.calls.length).toBe(0);
  });

  const assertSimpleLink = (listItem, expectedText, disabled) => {
    const link = listItem.children[0] ? listItem.children[0] : listItem;
    expect(link).toHaveTextContent(expectedText);
    expect(link).toHaveClass('pagination-link');
    if (disabled) {
      expect(link).toHaveAttribute('disabled');
    }
  };

  const assertPageButton = (listItem, expectedText, isActive) => {
    const button = listItem.children[0];
    expect(button).toHaveTextContent(expectedText);
    expect(button).toHaveAttribute('aria-label', `Go to page ${expectedText}`);
    if (isActive) {
      expect(button).toHaveClass('is-current');
    }
  };
});
