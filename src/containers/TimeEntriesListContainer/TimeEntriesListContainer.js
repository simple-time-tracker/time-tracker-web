import React, { Component } from 'react';
import TimeEntriesList from '../../components/TimeEntriesList/TimeEntriesList';
import PropTypes from 'prop-types';

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
