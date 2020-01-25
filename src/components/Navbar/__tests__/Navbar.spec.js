import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';

describe('Top navigation bar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  describe('Link rendering', () => {
    it('should render link to tracking page', () => {
      const timeTrackerLink = wrapper
        .find('#main-navbar .navbar-start .navbar-item')
        .first();

      assertLinkTextAndUrl(timeTrackerLink, 'Time tracker', '/');
    });

    it('should render link to projects page', () => {
      const projectsLink = wrapper
        .find('#main-navbar .navbar-start .navbar-item')
        .at(1);
      assertLinkTextAndUrl(projectsLink, 'Projects', '/projects');
    });

    it('should render logout button', () => {
      const logoutButton = wrapper.find('.navbar-end .navbar-item');
      assertLinkTextAndUrl(logoutButton, 'Sign out', '/logout');
    });
  });

  describe('Hamburger menu', () => {
    it('should load navbar with hamburger menu disabled', () => {
      expect(wrapper.find('.navbar-burger').hasClass('is-active')).toBe(false);
    });

    it('should activate hamburger menu on click', () => {
      const hamburgerMenu = wrapper.find('.navbar-burger');
      hamburgerMenu.simulate('click');
      expect(wrapper.find('.navbar-burger').hasClass('is-active')).toBe(true);
    });

    it('should disable hamburger menu after second click', () => {
      const hamburgerMenu = wrapper.find('.navbar-burger');
      hamburgerMenu.simulate('click');
      hamburgerMenu.simulate('click');
      expect(wrapper.find('.navbar-burger').hasClass('is-active')).toBe(false);
    });
  });
});

const assertLinkTextAndUrl = (node, expectedText, expectedUrl) => {
  expect(node.text()).toBe(expectedText);
  expect(node.props()).toHaveProperty('to', expectedUrl);
};
