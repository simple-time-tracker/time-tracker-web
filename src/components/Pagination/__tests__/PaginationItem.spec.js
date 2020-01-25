import React from 'react';
import { shallow } from 'enzyme';
import PaginationItem from '../PaginationItem';

describe('Pagination page number button', () => {
  const mockAction = jest.fn();

  it('should render element with 1 page number', () => {
    const wrapper = shallow(<PaginationItem pageNumber={1} loadPage={mockAction} />);
    const pageNumberButton = wrapper.find('li a');

    assertPageNumberButtonFields(pageNumberButton, '1');
  });

  it('should render element with 9999 page number', () => {
    const wrapper = shallow(
      <PaginationItem pageNumber={9999} loadPage={mockAction} />
    );
    const pageNumberButton = wrapper.find('li a');

    assertPageNumberButtonFields(pageNumberButton, '9999');
  });

  it('should have active class when active prop is true', () => {
    const wrapper = shallow(
      <PaginationItem pageNumber={1} loadPage={mockAction} isActive={true} />
    );

    expect(wrapper.find('li a').hasClass('is-current')).toBe(true);
  });

  it('should invoke loadPage method, on click', () => {
    const wrapper = shallow(
      <PaginationItem pageNumber={5} loadPage={mockAction} isActive={true} />
    );

    wrapper.find('li a').simulate('click');
    expect(mockAction).toHaveBeenCalledWith(5);
  });
});

const assertPageNumberButtonFields = (pageNumberButton, number) => {
  expect(pageNumberButton.text()).toBe(number);
  expect(pageNumberButton.hasClass('pagination-link')).toBe(true);
  expect(pageNumberButton.hasClass('is-current')).toBe(false);
  expect(pageNumberButton.props()).toHaveProperty(
    'aria-label',
    `Go to page ${number}`
  );
};
