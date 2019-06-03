import React from "react";
import { formatDate, getDuration } from "../../utils/time";

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
          new Date(props.endDate).getSeconds() -
            new Date(props.startDate).getSeconds()
        )}
    </td>
  </tr>
);

export default TimeEntryListItem;
