import React from "react";
import { getDuration } from "../../utils/time";

const TimeEntryListItem = props => (
  <tr>
    <td>{props.id}</td>
    <td>{props.activity}</td>
    <td>{props.project}</td>
    <td>{props.startDate}</td>
    <td>{props.endDate}</td>
    <td>
      {getDuration(
        new Date(props.endDate).getSeconds() -
          new Date(props.startDate).getSeconds()
      )}
    </td>
  </tr>
);

export default TimeEntryListItem;
