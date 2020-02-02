import React from 'react';
import { shallow } from 'enzyme';
import ConfirmModal from '../ConfirmModal';

describe('Confirm modal', () => {
  let wrapper;

  it('should be not active, when isOpen=false', () => {
    wrapper = shallow(
      <ConfirmModal
        isOpen={false}
        confirmAction={() => {}}
        closeModal={() => {}}
        title="Some title"
        message="Some message"
      />
    );

    const dialog = wrapper.find('.modal');
    expect(dialog.hasClass('is-active')).toBe(false);
  });

  it('should be active, when isOpen=true', () => {
    wrapper = shallow(
      <ConfirmModal
        isOpen={true}
        confirmAction={() => {}}
        closeModal={() => {}}
        title="Some title"
        message="Some message"
      />
    );

    const dialog = wrapper.find('.modal');
    expect(dialog.hasClass('is-active')).toBe(true);
  });

  it('should render title and message', () => {
    wrapper = shallow(
      <ConfirmModal
        isOpen={true}
        confirmAction={() => {}}
        closeModal={() => {}}
        title="Some title"
        message="Some message"
      />
    );

    expect(wrapper.find('header.modal-card-head p.modal-card-title').text()).toBe(
      'Some title'
    );
    expect(wrapper.find('section.modal-card-body').text()).toBe('Some message');
  });

  it('should render cancel, confirm buttons', () => {
    wrapper = shallow(
      <ConfirmModal
        isOpen={true}
        confirmAction={() => {}}
        closeModal={() => {}}
        title="Some title"
        message="Some message"
      />
    );

    const footer = wrapper.find('footer.modal-card-foot');
    expect(footer.children()).toHaveLength(2);

    const cancelButton = footer.children('button').at(0);
    expect(cancelButton.text()).toBe('Cancel');

    const confirmButton = footer.children('button').at(1);
    expect(confirmButton.text()).toBe('Confirm');
  });

  it('should close modal, when X is clicked', () => {
    const closeModalMock = jest.fn();
    wrapper = shallow(
      <ConfirmModal
        isOpen={true}
        confirmAction={() => {}}
        closeModal={closeModalMock}
        title="Some title"
        message="Some message"
      />
    );

    const xButton = wrapper.find('header.modal-card-head .delete');
    xButton.simulate('click');
    expect(closeModalMock.mock.calls.length).toBe(1);
  });

  it('should close modal, when cancel button clicked', () => {
    const closeModalMock = jest.fn();
    wrapper = shallow(
      <ConfirmModal
        isOpen={true}
        confirmAction={() => {}}
        closeModal={closeModalMock}
        title="Some title"
        message="Some message"
      />
    );

    const cancelButton = wrapper
      .find('footer.modal-card-foot')
      .children()
      .at(0);
    cancelButton.simulate('click');
    expect(closeModalMock.mock.calls.length).toBe(1);
  });

  it('should call confirm callback, when confirm button is clicked', () => {
    const confirmMock = jest.fn();
    wrapper = shallow(
      <ConfirmModal
        isOpen={true}
        confirmAction={confirmMock}
        closeModal={() => {}}
        title="Some title"
        message="Some message"
      />
    );

    const confirmButton = wrapper
      .find('footer.modal-card-foot')
      .children()
      .at(1);
    confirmButton.simulate('click');
    expect(confirmMock.mock.calls.length).toBe(1);
  });
});
