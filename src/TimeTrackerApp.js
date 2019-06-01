import React, { Component } from "react";
import ReactDOM from "react-dom";
import TimeEntriesList from "./components/TimeEntriesList";

class TimeTrackerApp extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Time tracker app</h1>
        <TimeEntriesList />
      </div>
    );
  }
}

export default TimeTrackerApp;
