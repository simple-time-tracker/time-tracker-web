import React from "react";
import { formatDate } from "../../utils/time";
import { getDuration } from "../../utils/time";

const TimeEntryListItem = props => (
  <tr>
    <td>{props.id}</td>
    <td>{props.activity}</td>
    <td>{props.project}</td>
    <td>{formatDate(props.startDate)}</td>
    <td>{formatDate(props.endDate)}</td>
    <td>
      {getDuration(
        new Date(props.endDate).getSeconds() -
          new Date(props.startDate).getSeconds()
      )}
    </td>
  </tr>
);

export default TimeEntryListItem;
