import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatLongDate, formatDurationInWords } from '../../utils/time/time';
// eslint-disable-next-line no-unused-vars
import style from './ProjectListItem.scss';
import ArchiveRestoreButton from './ArchiveRestoreButton';

const ProjectListItem = ({
  id,
  name,
  isArchived,
  timeSpentInMilliseconds,
  dateCreated,
  archiveAction,
  restoreAction,
}) => (
  <tr>
    <td>{id}</td>
    <td>
      <Link to={`/projects/${id}`}>{name}</Link>
    </td>
    <td>{formatDurationInWords(timeSpentInMilliseconds)}</td>
    <td>{formatLongDate(dateCreated)}</td>
    <td>
      <ArchiveRestoreButton
        isArchived={isArchived}
        restoreAction={() => restoreAction(id)}
        archiveAction={() => archiveAction(id)}
      />
    </td>
  </tr>
);

ProjectListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  timeSpentInMilliseconds: PropTypes.number.isRequired,
  archiveAction: PropTypes.func.isRequired,
  restoreAction: PropTypes.func.isRequired,
};
export default ProjectListItem;
