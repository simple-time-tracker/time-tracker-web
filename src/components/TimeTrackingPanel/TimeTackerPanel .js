import React, { Component } from "react";
import ProjectSelector from "./ProjectSelector";
import PropTypes from "prop-types";

class TimeTrackerPanel extends Component {
  constructor(props) {
    super(props);

    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleToggleTracking = this.handleToggleTracking.bind(this);
    this.handleKeyInput = this.handleKeyInput.bind(this);
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

  handleKeyInput(event) {
    if (event.key === "Enter") {
      this.handleToggleTracking(event);
    }
  }

  componentDidMount() {
    this.props.loadProjects();
    this.props.getCurrentTimeEntry();
  }

  getTrackingButtonClass() {
    return this.props.isTracking ? "is-danger" : "is-primary";
  }

  getTrackingButtonMessage() {
    return this.props.isTracking ? "Stop tracking" : "Start tracking";
  }

  isThereNoExistingProjects() {
    return this.props.currentProject === "no-id";
  }

  isDescriptionInputDisabled() {
    return this.props.isTracking || this.isThereNoExistingProjects();
  }

  isTrackingButtonDisabled() {
    return this.isThereNoExistingProjects() || !this.props.description;
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-one-fifths is-full-mobile">
          <ProjectSelector
            projects={this.props.projects}
            handleProjectUpdate={this.handleProjectChange}
            currentProject={this.props.currentProject}
            isTracking={this.props.isTracking}
          />
        </div>

        <div className="column is-three-fifths is-full-mobile ">
          <input
            className="input is-normal"
            type="text"
            value={this.props.description}
            onChange={this.handleDescriptionChange}
            onKeyDown={this.handleKeyInput}
            disabled={this.isDescriptionInputDisabled()}
            placeholder="
            What are you working on?"
          />
        </div>

        <div className="column is-one-fifth is-full-mobile">
          <button
            className={`button is-fullwidth ${this.getTrackingButtonClass()}`}
            disabled={this.isTrackingButtonDisabled()}
            onClick={this.handleToggleTracking}
          >
            {this.getTrackingButtonMessage()}
          </button>
        </div>
      </div>
    );
  }
}

ProjectSelector.propTypes = {
  projects: PropTypes.array
};

export default TimeTrackerPanel;
