import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ArchiveRestoreButton from '../ArchiveRestoreButton';

describe('Top navigation bar', () => {
  it('should render archive button, when not archived', () => {
    render(
      <ArchiveRestoreButton
        isArchived={false}
        archiveAction={vi.fn()}
        restoreAction={vi.fn()}
      />
    );
    const actionButton = screen.getByTestId('archive-button');
    const icon = screen.getByTestId('archive-icon');

    expect(actionButton).toHaveAttribute('data-tooltip', 'Archive project');
    expect(actionButton).toHaveClass('archive-icon');
    expect(icon).toHaveClass('fa-archive');
  });

  it('should render restore button, when not archived', () => {
    render(
      <ArchiveRestoreButton
        isArchived={true}
        archiveAction={vi.fn()}
        restoreAction={vi.fn()}
      />
    );
    const actionButton = screen.getByTestId('archive-undo-button');
    const icon = screen.getByTestId('archive-undo-icon');

    expect(actionButton).toHaveAttribute('data-tooltip', 'Restore archived project');
    expect(actionButton).toHaveClass('undo-icon');
    expect(icon).toHaveClass('fa-undo');
  });

  it('should invoke archive action, on archive button click', () => {
    const archiveAction = vi.fn();
    const restoreAction = vi.fn();
    render(
      <ArchiveRestoreButton
        isArchived={false}
        archiveAction={archiveAction}
        restoreAction={restoreAction}
      />
    );
    const actionButton = screen.getByTestId('archive-button');
    actionButton.click();

    expect(archiveAction.mock.calls.length).toBe(1);
  });

  it('should invoke restore action, on archive button click', () => {
    const archiveAction = vi.fn();
    const restoreAction = vi.fn();
    render(
      <ArchiveRestoreButton
        isArchived={true}
        archiveAction={archiveAction}
        restoreAction={restoreAction}
      />
    );
    const actionButton = screen.getByTestId('archive-undo-button');
    actionButton.click();

    expect(restoreAction.mock.calls.length).toBe(1);
  });
});
