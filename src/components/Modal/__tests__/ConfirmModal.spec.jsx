import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ConfirmModal from '../ConfirmModal';

describe('Confirm modal', () => {
  let wrapper;

  it('should be not active, when isOpen=false', () => {
    wrapper = render(
      <ConfirmModal
        isOpen={false}
        confirmAction={() => {}}
        closeModal={() => {}}
        title="Some title"
        message="Some message"
      />
    );

    const dialog = screen.getByTestId('modal');
    expect(dialog).not.toHaveClass('is-active');
  });

  it('should be active, when isOpen=true', () => {
    wrapper = render(
      <ConfirmModal
        isOpen={true}
        confirmAction={() => {}}
        closeModal={() => {}}
        title="Some title"
        message="Some message"
      />
    );

    const dialog = screen.getByTestId('modal');
    expect(dialog).toHaveClass('is-active');
  });

  it('should render title and message', () => {
    wrapper = render(
      <ConfirmModal
        isOpen={true}
        confirmAction={() => {}}
        closeModal={() => {}}
        title="Some title"
        message="Some message"
      />
    );

    screen.role;
    expect(screen.getByText('Some title')).toBeTruthy();
    expect(screen.getByText('Some message')).toBeTruthy();
  });

  it('should render cancel, confirm buttons', () => {
    wrapper = render(
      <ConfirmModal
        isOpen={true}
        confirmAction={() => {}}
        closeModal={() => {}}
        title="Some title"
        message="Some message"
      />
    );

    const cancelButton = screen.getByTestId('modal-cancel-button');
    expect(cancelButton).toHaveTextContent('Cancel');

    const confirmButton = screen.getByTestId('modal-confirm-button');
    expect(confirmButton).toHaveTextContent('Confirm');
  });

  it('should close modal, when X is clicked', () => {
    const closeModalMock = vi.fn();
    wrapper = render(
      <ConfirmModal
        isOpen={true}
        confirmAction={() => {}}
        closeModal={closeModalMock}
        title="Some title"
        message="Some message"
      />
    );

    screen.getByTestId('modal-close-button').click();
  });

  it('should close modal, when cancel button clicked', () => {
    const closeModalMock = vi.fn();
    wrapper = render(
      <ConfirmModal
        isOpen={true}
        confirmAction={() => {}}
        closeModal={closeModalMock}
        title="Some title"
        message="Some message"
      />
    );

    screen.getByTestId('modal-cancel-button').click();
  });

  it('should call confirm callback, when confirm button is clicked', () => {
    const confirmMock = vi.fn();
    wrapper = render(
      <ConfirmModal
        isOpen={true}
        confirmAction={confirmMock}
        closeModal={() => {}}
        title="Some title"
        message="Some message"
      />
    );

    const confirmButton = screen.getByTestId('modal-confirm-button').click();
  });
});
