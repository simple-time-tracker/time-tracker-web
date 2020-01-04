import React from 'react';
import PropTypes from 'prop-types';
import { differenceInSeconds } from 'date-fns';

import { formatDate, getDuration } from '../../utils/time';
// eslint-disable-next-line no-unused-vars
import style from './TimeEntryListItem.scss';

const TimeEntryListItem = ({
  id,
  activity,
  project,
  startDate,
  endDate,
  deleteHandler,
}) => (
  <tr>
    <td>{id}</td>
    <td>{activity}</td>
    <td>{project}</td>
    <td className="is-hidden-mobile">{formatDate(startDate)}</td>
    <td className="is-hidden-mobile">{endDate && formatDate(endDate)}</td>
    <td>
      {endDate &&
        getDuration(differenceInSeconds(new Date(endDate), new Date(startDate)))}
    </td>
    <td>
      <span className="icon" onClick={() => deleteHandler(id)}>
        <i className="fa fa-trash" />
      </span>
    </td>
  </tr>
);

TimeEntryListItem.propTypes = {
  id: PropTypes.number,
  activity: PropTypes.string,
  project: PropTypes.string,
  deleteHandler: PropTypes.func,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};
export default TimeEntryListItem;
