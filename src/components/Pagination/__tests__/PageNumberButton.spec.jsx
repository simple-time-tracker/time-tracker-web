import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageNumberButton from '../PageNumberButton';

describe('Pagination page number button', () => {
  let mockLoadPage;

  beforeEach(() => {
    mockLoadPage = vi.fn();
  });

  it('should render element with 1 page number', () => {
    render(<PageNumberButton pageNumber={1} loadPage={mockLoadPage} />);

    const pageNumberButton = screen.getByRole('listitem').children[0];

    assertPageNumberButtonFields(pageNumberButton, '1');
  });

  it('should render element with 9999 page number', () => {
    render(<PageNumberButton pageNumber={9999} loadPage={mockLoadPage} />);
    const pageNumberButton = screen.getByRole('listitem').children[0];

    assertPageNumberButtonFields(pageNumberButton, '9999');
  });

  it('should have active class when active prop is true', () => {
    render(
      <PageNumberButton pageNumber={1} loadPage={mockLoadPage} isActive={true} />
    );

    const pageNumberButton = screen.getByRole('listitem').children[0];
    expect(pageNumberButton).toHaveClass('is-current');
  });

  it('should invoke loadPage method, on click', () => {
    render(<PageNumberButton pageNumber={5} loadPage={mockLoadPage} />);

    screen.getByRole('listitem').children[0].click();
    expect(mockLoadPage).toHaveBeenCalledWith(5);
  });

  it('should not invoke loadPage, if page is active', () => {
    render(
      <PageNumberButton pageNumber={1} loadPage={mockLoadPage} isActive={true} />
    );
    screen.getByRole('listitem').children[0].click();
    expect(mockLoadPage.mock.calls.length).toBe(0);
  });
});

const assertPageNumberButtonFields = (pageNumberButton, number) => {
  expect(pageNumberButton).toHaveTextContent(number);
  expect(pageNumberButton).toHaveClass('pagination-link');
  expect(pageNumberButton).not.toHaveClass('is-current');
  expect(pageNumberButton).toHaveAttribute('aria-label', `Go to page ${number}`);
};
