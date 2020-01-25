import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../Pagination';

describe('Pagination buttons component', () => {
  let mockLoadPage;

  beforeEach(() => {
    mockLoadPage = jest.fn();
  });

  it('should render pagination buttons', () => {
    const wrapper = shallow(
      <Pagination
        totalPages={2}
        activePage={1}
        maxPages={5}
        loadPage={mockLoadPage}
      />
    );

    const paginationButtonsContainer = wrapper.find(
      'nav.pagination ul.pagination-list'
    );
    const paginationButtons = paginationButtonsContainer.children();

    expect(paginationButtonsContainer.hasClass('pagination-list')).toBe(true);
    expect(paginationButtons).toHaveLength(4);

    assertSimpleLink(paginationButtons.at(0), '<');
    assertPageButton(paginationButtons.at(1), 1, true);
    assertPageButton(paginationButtons.at(2), 2);
    assertSimpleLink(paginationButtons.at(3), '>');
  });

  it('should disable prev page button if in first page', () => {
    const wrapper = shallow(
      <Pagination
        totalPages={2}
        activePage={1}
        maxPages={5}
        loadPage={mockLoadPage}
      />
    );

    expect(
      wrapper
        .find('nav.pagination ul.pagination-list')
        .children()
        .at(0)
        .props()
    ).toHaveProperty('disabled');
  });

  it('should disable next page button if in last page', () => {
    const wrapper = shallow(
      <Pagination
        totalPages={5}
        activePage={5}
        maxPages={3}
        loadPage={mockLoadPage}
      />
    );

    expect(
      wrapper
        .find('nav.pagination ul.pagination-list')
        .children()
        .at(5)
        .props()
    ).toHaveProperty('disabled');
  });

  it('should load next page, when next button is clicked', () => {
    const wrapper = shallow(
      <Pagination
        totalPages={3}
        activePage={1}
        maxPages={3}
        loadPage={mockLoadPage}
      />
    );
    const paginationButtons = wrapper
      .find('nav.pagination ul.pagination-list')
      .children();
    paginationButtons.at(4).simulate('click');

    expect(mockLoadPage).toBeCalledWith(2);
  });

  it('should load previous page, when previous button is clicked', () => {
    const wrapper = shallow(
      <Pagination
        totalPages={3}
        activePage={2}
        maxPages={3}
        loadPage={mockLoadPage}
      />
    );
    const paginationButtons = wrapper
      .find('nav.pagination ul.pagination-list')
      .children();
    paginationButtons.at(0).simulate('click');

    expect(mockLoadPage).toBeCalledWith(1);
  });

  it('should not call loadPage if on first page and previous page button is clicked', () => {
    const wrapper = shallow(
      <Pagination
        totalPages={3}
        activePage={3}
        maxPages={3}
        loadPage={mockLoadPage}
      />
    );
    const paginationButtons = wrapper
      .find('nav.pagination ul.pagination-list')
      .children();
    paginationButtons.at(4).simulate('click');

    expect(mockLoadPage.mock.calls.length).toBe(0);
  });

  it('should not call loadPage if on last page and next page button is clicked', () => {
    const wrapper = shallow(
      <Pagination
        totalPages={3}
        activePage={1}
        maxPages={3}
        loadPage={mockLoadPage}
      />
    );
    const paginationButtons = wrapper
      .find('nav.pagination ul.pagination-list')
      .children();
    paginationButtons.at(0).simulate('click');

    expect(mockLoadPage.mock.calls.length).toBe(0);
  });

  const assertSimpleLink = (link, expectedText) => {
    expect(link.text()).toBe(expectedText);
    expect(link.hasClass('pagination-link')).toBe(true);
  };

  const assertPageButton = (button, expectedText, isActive) => {
    expect(button.props()).toHaveProperty('pageNumber', expectedText);
    expect(button.props()).toHaveProperty('loadPage', mockLoadPage);
    if (isActive) {
      expect(button.props()).toHaveProperty('isActive', isActive);
    }
  };
});
