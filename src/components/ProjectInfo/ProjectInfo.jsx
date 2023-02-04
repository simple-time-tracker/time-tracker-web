import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import { formatLongDate } from '../../utils/time/time';

const ProjectInfo = ({ id, name, isArchived, dateCreated, durationInMillis }) => (
  <div className="container">
    <h1 className="title is-2">
      #{id} - {name}
    </h1>

    <p>
      <b>Archived</b>: {isArchived ? 'true' : 'false'}
    </p>
    <p>
      <b>Date of creation</b> {dateCreated && formatLongDate(dateCreated)}
    </p>
    <p>
      <b>Time spent on project{': '}</b>
      {durationInMillis &&
        formatDistanceStrict(new Date(0), new Date(durationInMillis))}
    </p>
  </div>
);

ProjectInfo.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  dateCreated: PropTypes.string,
  durationInMillis: PropTypes.number.isRequired,
  isArchived: PropTypes.bool.isRequired,
};
export default ProjectInfo;
