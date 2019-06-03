import React, { Component } from "react";
import ProjectSelector from "./ProjectSelector";
import PropTypes from "prop-types";

class TimeTrackerPanel extends Component {
  constructor(props) {
    super(props);

    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleToggleTracking = this.handleToggleTracking.bind(this);
  }

  handleProjectChange(event) {
    this.props.changeProject(event.target.value);
  }

  handleDescriptionChange(event) {
    this.props.changeDescription(event.target.value);
  }

  handleToggleTracking(event) {
    if (!this.props.isTracking) {
      this.props.startTrackingTime();
    } else {
      this.props.stopTrackingTime();
    }
  }

  componentDidMount() {
    this.props.loadProjects();
    this.props.getCurrentTimeEntry();
  }

  getTrackingButtonClass() {
    return this.props.isTracking ? "is-danger" : "is-primary";
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-one-fifths is-full-mobile">
          <ProjectSelector
            projects={this.props.projects}
            handleProjectUpdate={this.handleProjectChange}
            currentProject={this.props.currentProject}
          />
        </div>

        <div className="column is-three-fifths is-full-mobile ">
          <input
            className="input is-normal"
            type="text"
            value={this.props.description}
            onChange={this.handleDescriptionChange}
            placeholder="
            What are you working on?"
          />
        </div>

        <div className="column is-one-fifth is-full-mobile">
          <a
            className={`button is-fullwidth ${this.getTrackingButtonClass()}`}
            onClick={this.handleToggleTracking}
          >
            {this.props.isTracking ? "Stop tracking" : "Start tracking"}
          </a>
        </div>
      </div>
    );
  }
}

ProjectSelector.propTypes = {
  projects: PropTypes.array
};

export default TimeTrackerPanel;
