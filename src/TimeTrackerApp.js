import React, { Component } from "react";
import ReactDOM from "react-dom";
import TimeEntriesListContainer from "./containers/TimeEntriesListContainer";
import ProjectSelector from "./containers/TimeTrackingPanel";

const TimeTrackerApp = () => (
  <div>
    <h1 className="title">Time tracker app</h1>
    <ProjectSelector />
    <TimeEntriesListContainer />
  </div>
);

export default TimeTrackerApp;
