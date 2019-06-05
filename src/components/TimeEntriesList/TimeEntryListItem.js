import React from "react";
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

export default TimeEntryListItem;
