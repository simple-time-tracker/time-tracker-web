import React from 'react';
import PropTypes from 'prop-types';
import { formatLongDate } from '../../utils/time/time';

const ProjectListItem = ({ id, name, dateCreated }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{formatLongDate(new Date(dateCreated))}</td>
  </tr>
);

ProjectListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
};
export default ProjectListItem;
