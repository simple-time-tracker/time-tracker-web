import React, { Component } from "react";
import ProjectSelector from "./ProjectSelector";
import PropTypes from "prop-types";

class TimeTrackerPanel extends Component {
  handleProjectChange = event => {
    this.props.changeProject(event.target.value);
  };

  handleDescriptionChange = event => {
    this.props.changeDescription(event.target.value);
  };

  handleToggleTracking = event => {
    if (!this.props.isTracking) {
      this.props.startTrackingTime();
    } else {
      this.props.stopTrackingTime();
    }
  };

  handleKeyInput = event => {
    if (event.key === "Enter") {
      this.handleToggleTracking(event);
    }
  };

  componentDidMount = () => {
    this.props.loadProjects();
    this.props.getCurrentTimeEntry();
  };

  getTrackingButtonClass = () => {
    return this.props.isTracking ? "is-danger" : "is-primary";
  };

  getTrackingButtonMessage = () => {
    return this.props.isTracking ? "Stop tracking" : "Start tracking";
  };

  isThereNoExistingProjects = () => {
    return this.props.currentProject === "no-id";
  };

  isDescriptionInputDisabled = () => {
    return this.props.isTracking || this.isThereNoExistingProjects();
  };

  isTrackingButtonDisabled = () => {
    return this.isThereNoExistingProjects() || !this.props.description;
  };

  render = () => {
    return (
      <div className="columns">
        <div className="column is-two-fifths-tablet is-full-mobile">
          <div className="columns is-mobile">
            <div className="column is-1-widescreen is-2-tablet is-1-mobile add-project-button-container">
              <a className="button is-primary">
                <span className="icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
            </div>
            <div className="column is-11-widescreen is-10-tablet is-11-mobile">
              <ProjectSelector
                projects={this.props.projects}
                handleProjectUpdate={this.handleProjectChange}
                currentProject={this.props.currentProject}
                isTracking={this.props.isTracking}
              />
            </div>
          </div>
        </div>

        <div className="column is-two-fifths-tablet is-full-mobile">
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
  };
}

ProjectSelector.propTypes = {
  projects: PropTypes.array
};

export default TimeTrackerPanel;
