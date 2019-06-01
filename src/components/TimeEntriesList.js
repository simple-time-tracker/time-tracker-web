import React, { Component } from "react";
import TimeEntryListItem from "./TimeEntryListItem";

class TimeEntriesList extends Component {
  state = {
    entries: [
      {
        id: 1,
        activity: "Programming",
        project: "Budget-app",
        startDate: new Date().toString(),
        endDate: null,
        timeSpent: "1 H"
      },
      {
        id: 2,
        activity: "Weight lifting",
        project: "Fitness",
        startDate: new Date().toString(),
        endDate: null,
        timeSpent: "1 H"
      }
    ]
  };

  render() {
    const entries = this.state.entries.map(entry => (
      <TimeEntryListItem
        id={entry.id}
        activity={entry.activity}
        project={entry.project}
        startDate={entry.startDate}
        endDate={entry.endDate}
        timeSpent={entry.timeSpent}
      />
    ));
    return (
      <div>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Activity</th>
              <th>Project</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Time spent</th>
            </tr>
          </thead>
          <tbody>{entries}</tbody>
        </table>
      </div>
    );
  }
}

export default TimeEntriesList;
