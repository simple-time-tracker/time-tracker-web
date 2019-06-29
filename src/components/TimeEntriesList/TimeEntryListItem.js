import React from "react";
import PropTypes from "prop-types";
import { formatDate, getDuration } from "../../utils/time";
import { differenceInSeconds } from "date-fns";

const TimeEntryListItem = props => (
  <tr>
    <td>{props.id}</td>
    <td>{props.activity}</td>
    <td>{props.project}</td>
    <td>{formatDate(props.startDate)}</td>
    <td>{props.endDate && formatDate(props.endDate)}</td>
    <td>
      {props.endDate &&
        getDuration(
          differenceInSeconds(
            new Date(props.endDate),
            new Date(props.startDate)
          )
        )}
    </td>
  </tr>
);

TimeEntryListItem.propTypes = {
  id: PropTypes.number,
  activity: PropTypes.string,
  project: PropTypes.string
};
export default TimeEntryListItem;
