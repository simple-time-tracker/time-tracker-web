import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeEntriesList from '../../components/TimeEntriesList/TimeEntriesList';

class TimeEntriesListContainer extends Component {
  static propTypes = {
    entries: PropTypes.array,
    deleteEntry: PropTypes.func,
    loadTimeEntries: PropTypes.func,
  };

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

export default TimeEntriesListContainer;
