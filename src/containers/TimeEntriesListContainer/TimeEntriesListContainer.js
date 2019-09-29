import React, { Component } from "react";
import TimeEntriesList from "../../components/TimeEntriesList/TimeEntriesList";
import PropTypes from "prop-types";

class TimeEntriesListContainer extends Component {
  componentDidMount = () => {
    this.props.loadTimeEntries();
  };

  render = () => (
    <TimeEntriesList
      timeEntries={this.props.entries}
      deleteEntry={this.props.deleteEntry}
    />
  );
}

TimeEntriesListContainer.propTypes = {
  entries: PropTypes.array,
  deleteEntry: PropTypes.func
};

export default TimeEntriesListContainer;
