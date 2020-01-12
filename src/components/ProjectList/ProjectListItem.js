import React from 'react';
import PropTypes from 'prop-types';

const ProjectListItem = ({ id, name, dateCreated }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{dateCreated}</td>
  </tr>
);

ProjectListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
};
export default ProjectListItem;
