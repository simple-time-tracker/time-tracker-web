import React, { Component } from "react";
import ReactDOM from "react-dom";
import TimeEntriesList from "./containers/TimeEntriesList";
import ProjectSelector from "./containers/TimeTrackingPanel";

const TimeTrackerApp = () => (
  <div>
    <h1 className="title">Time tracker app</h1>
    <ProjectSelector />
    <TimeEntriesList />
  </div>
);

export default TimeTrackerApp;
