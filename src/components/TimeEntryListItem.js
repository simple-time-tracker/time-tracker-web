import React from "react";

const TimeEntryListItem = props => (
  <tr>
    <td>{props.id}</td>
    <td>{props.activity}</td>
    <td>{props.project}</td>
    <td>{props.startDate}</td>
    <td>{props.endDate}</td>
    <td>{props.timeSpent}</td>
  </tr>
);

export default TimeEntryListItem;
