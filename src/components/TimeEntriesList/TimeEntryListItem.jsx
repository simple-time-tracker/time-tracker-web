import React from 'react';
import PropTypes from 'prop-types';
import { differenceInSeconds } from 'date-fns';

import { formatShortDate, formatDuration } from '../../utils/time/time';
// eslint-disable-next-line no-unused-vars
import style from './TimeEntryListItem.scss';

const TimeEntryListItem = ({
  id,
  activity,
  project,
  startDate,
  endDate,
  openDeleteModal,
}) => (
  <tr>
    <td>{id}</td>
    <td>{activity}</td>
    <td>{project}</td>
    <td className="is-hidden-mobile">{formatShortDate(startDate)}</td>
    <td className="is-hidden-mobile">{endDate && formatShortDate(endDate)}</td>
    <td>
      {endDate &&
        formatDuration(differenceInSeconds(new Date(endDate), new Date(startDate)))}
    </td>
    <td>
      <span
        className="icon delete-icon"
        data-tooltip="Delete entry"
        onClick={() => openDeleteModal({ id })}
      >
        <i className="fa fa-trash" />
      </span>
    </td>
  </tr>
);

TimeEntryListItem.propTypes = {
  id: PropTypes.number,
  activity: PropTypes.string,
  project: PropTypes.string,
  openDeleteModal: PropTypes.func,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};
export default TimeEntryListItem;
