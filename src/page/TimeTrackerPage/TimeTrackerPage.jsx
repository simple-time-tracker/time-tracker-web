import React from 'react';
import PropTypes from 'prop-types';
import TimeTrackerPanel from '../../containers/TimeTrackerPanel';
import TimeEntriesListContainer from '../../containers/TimeEntriesListContainer';

const TimeTrackerPage = ({ loadTimeEntries }) => (
  <div>
    <h1 className="title is-2">Time tracker app</h1>
    <TimeTrackerPanel />
    <TimeEntriesListContainer loadTimeEntries={loadTimeEntries} />
  </div>
);

TimeTrackerPage.propTypes = {
  loadTimeEntries: PropTypes.func.isRequired,
};

export default TimeTrackerPage;
