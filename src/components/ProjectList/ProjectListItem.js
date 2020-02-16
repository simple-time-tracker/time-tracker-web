import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatLongDate, formatDurationInWords } from '../../utils/time/time';
// eslint-disable-next-line no-unused-vars
import style from './ProjectListItem.scss';

const ProjectListItem = ({
  id,
  name,
  isArchived,
  timeSpentInMilliseconds,
  dateCreated,
}) => (
  <tr>
    <td>{id}</td>
    <td>
      <Link to={`/projects/${id}`}>{name}</Link>
    </td>
    <td>{formatDurationInWords(timeSpentInMilliseconds)}</td>
    <td>{isArchived}</td>
    <td>{formatLongDate(dateCreated)}</td>
    <td>
      <span
        className="icon archive-icon"
        data-tooltip="Archive project"
        onClick={() => {}}
      >
        <i className="fa fa-archive" />
      </span>
    </td>
  </tr>
);

ProjectListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  timeSpentInMilliseconds: PropTypes.number.isRequired,
};
export default ProjectListItem;
