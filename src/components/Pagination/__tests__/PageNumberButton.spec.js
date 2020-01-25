import React from 'react';
import { shallow } from 'enzyme';
import PageNumberButton from '../PageNumberButton';

describe('Pagination page number button', () => {
  let mockLoadPage;

  beforeEach(() => {
    mockLoadPage = jest.fn();
  });

  it('should render element with 1 page number', () => {
    const wrapper = shallow(
      <PageNumberButton pageNumber={1} loadPage={mockLoadPage} />
    );
    const pageNumberButton = wrapper.find('li a');

    assertPageNumberButtonFields(pageNumberButton, '1');
  });

  it('should render element with 9999 page number', () => {
    const wrapper = shallow(
      <PageNumberButton pageNumber={9999} loadPage={mockLoadPage} />
    );
    const pageNumberButton = wrapper.find('li a');

    assertPageNumberButtonFields(pageNumberButton, '9999');
  });

  it('should have active class when active prop is true', () => {
    const wrapper = shallow(
      <PageNumberButton pageNumber={1} loadPage={mockLoadPage} isActive={true} />
    );

    expect(wrapper.find('li a').hasClass('is-current')).toBe(true);
  });

  it('should invoke loadPage method, on click', () => {
    const wrapper = shallow(
      <PageNumberButton pageNumber={5} loadPage={mockLoadPage} />
    );

    wrapper.find('li a').simulate('click');
    expect(mockLoadPage).toHaveBeenCalledWith(5);
  });

  it('should not invoke loadPage, if page is active', () => {
    const wrapper = shallow(
      <PageNumberButton pageNumber={1} loadPage={mockLoadPage} isActive={true} />
    );
    wrapper.find('li a').simulate('click');
    expect(mockLoadPage.mock.calls.length).toBe(0);
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
