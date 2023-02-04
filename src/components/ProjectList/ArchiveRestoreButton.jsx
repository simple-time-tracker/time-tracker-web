import React from 'react';
import PropTypes from 'prop-types';

const ArchiveRestoreButton = (props) => {
  const { isArchived, archiveAction, restoreAction } = props;
  return isArchived
    ? renderRestoreButton(restoreAction)
    : renderArchiveButton(archiveAction);
};

const renderArchiveButton = (archiveAction) => (
  <span
    className="icon archive-icon"
    data-tooltip="Archive project"
    onClick={archiveAction}
  >
    <i className="fa fa-archive" />
  </span>
);

const renderRestoreButton = (restoreAction) => (
  <span
    className="icon undo-icon"
    data-tooltip="Restore archived project"
    onClick={restoreAction}
  >
    <i className="fa fa-undo" />
  </span>
);

ArchiveRestoreButton.propTypes = {
  isArchived: PropTypes.bool.isRequired,
  archiveAction: PropTypes.func.isRequired,
  restoreAction: PropTypes.func.isRequired,
};

export default ArchiveRestoreButton;
