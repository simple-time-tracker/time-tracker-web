import React from 'react';
import { shallow } from 'enzyme';
import ArchiveRestoreButton from '../ArchiveRestoreButton';

describe('Top navigation bar', () => {
  it('should render archive button, when not archived', () => {
    const wrapper = shallow(
      <ArchiveRestoreButton
        isArchived={false}
        archiveAction={jest.fn()}
        restoreAction={jest.fn()}
      />
    );
    const actionButton = wrapper.find('span').first();
    const icon = actionButton.find('i').first();

    expect(actionButton.props()).toHaveProperty('data-tooltip', 'Archive project');
    expect(actionButton.hasClass('archive-icon')).toBe(true);
    expect(icon.hasClass('fa-archive')).toBe(true);
  });

  it('should render restore button, when not archived', () => {
    const wrapper = shallow(
      <ArchiveRestoreButton
        isArchived={true}
        archiveAction={jest.fn()}
        restoreAction={jest.fn()}
      />
    );
    const actionButton = wrapper.find('span').first();
    const icon = actionButton.find('i').first();

    expect(actionButton.props()).toHaveProperty(
      'data-tooltip',
      'Restore archived project'
    );
    expect(actionButton.hasClass('undo-icon')).toBe(true);
    expect(icon.hasClass('fa-undo')).toBe(true);
  });

  it('should invoke archive action, on archive button click', () => {
    const archiveAction = jest.fn();
    const restoreAction = jest.fn();
    const wrapper = shallow(
      <ArchiveRestoreButton
        isArchived={false}
        archiveAction={archiveAction}
        restoreAction={restoreAction}
      />
    );
    const actionButton = wrapper.find('span').first();
    actionButton.simulate('click');

    expect(archiveAction.mock.calls.length).toBe(1);
  });

  it('should invoke archive action, on archive button click', () => {
    const archiveAction = jest.fn();
    const restoreAction = jest.fn();
    const wrapper = shallow(
      <ArchiveRestoreButton
        isArchived={true}
        archiveAction={archiveAction}
        restoreAction={restoreAction}
      />
    );
    const actionButton = wrapper.find('span').first();
    actionButton.simulate('click');

    expect(restoreAction.mock.calls.length).toBe(1);
  });
});
