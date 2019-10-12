import React from "react";
import PropTypes from "prop-types";
import TimeEntryListItem from "./TimeEntryListItem";

const TimeEntriesList = ({ timeEntries, deleteEntry }) => (
  <div className="container">
    <table className="table is-fullwidth is-striped is-narrow">
      <thead>
        <tr>
          <th>Id</th>
          <th>Activity</th>
          <th>Project</th>
          <th className="is-hidden-mobile">Start date</th>
          <th className="is-hidden-mobile">End date</th>
          <th>Time spent</th>
          <th>
            <span className="icon">
              <i className="fa fa-trash" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>{mapEntries(timeEntries, deleteEntry)}</tbody>
    </table>
  </div>
);

const mapEntries = (entries, deleteHandler) => {
  return entries.map(entry => (
    <TimeEntryListItem
      id={entry.id}
      key={entry.id}
      activity={entry.description}
      project={entry.project.name}
      startDate={entry.startDate}
      endDate={entry.endDate}
      deleteHandler={deleteHandler}
    />
  ));
};

TimeEntriesList.propTypes = {
  timeEntries: PropTypes.array,
  deleteHandler: PropTypes.func,
  deleteEntry: PropTypes.func
};
export default TimeEntriesList;
