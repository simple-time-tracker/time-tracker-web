import React, { Component } from "react";
import TimeEntryListItem from "../../components/TimeEntriesListItem/TimeEntryListItem";
import PropTypes from "prop-types";

class TimeEntriesList extends Component {
  componentDidMount = () => {
    this.props.loadTimeEntries();
  };

  render = () => {
    const entries = this.props.entries.map(entry => (
      <TimeEntryListItem
        id={entry.id}
        key={entry.id}
        activity={entry.description}
        project={entry.project.name}
        startDate={entry.startDate}
        endDate={entry.endDate}
        deleteHandler={this.props.deleteEntry}
      />
    ));
    return (
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
          <tbody>{entries}</tbody>
        </table>
      </div>
    );
  };
}

TimeEntriesList.propTypes = {
  entries: PropTypes.array,
  deleteEntry: PropTypes.func
};

export default TimeEntriesList;
