import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeEntriesList from '../../components/TimeEntriesList/TimeEntriesList';

class TimeEntriesListContainer extends Component {
  static propTypes = {
    entries: PropTypes.array,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    deleteEntry: PropTypes.func.isRequired,
    loadTimeEntries: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    this.props.loadTimeEntries(1);
  };

  render = () => (
    <TimeEntriesList
      timeEntries={this.props.entries}
      totalPages={this.props.totalPages}
      currentPage={this.props.currentPage}
      loadTimeEntries={this.props.loadTimeEntries}
      deleteEntry={this.props.deleteEntry}
    />
  );
}

export default TimeEntriesListContainer;
