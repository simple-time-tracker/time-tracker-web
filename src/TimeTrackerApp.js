import React, { Component } from "react";
import ReactDOM from "react-dom";
import TimeEntriesListContainer from "./containers/TimeEntriesListContainer";
import TimeTrackerPanel from "./containers/TimeTrackerPanel";

const TimeTrackerApp = () => (
  <div>
    <h1 className="title">Time tracker app</h1>
    <TimeTrackerPanel />
    <TimeEntriesListContainer />
  </div>
);

export default TimeTrackerApp;
