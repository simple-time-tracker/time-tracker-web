import React from 'react';
import TimeTrackerPanel from '../containers/TimeTrackerPanel';
import TimeEntriesListContainer from '../containers/TimeEntriesListContainer';

const TimeTrackerPage = () => (
  <div>
    <h1 className="title">Time tracker app</h1>
    <TimeTrackerPanel />
    <TimeEntriesListContainer />
  </div>
);

export default TimeTrackerPage;
