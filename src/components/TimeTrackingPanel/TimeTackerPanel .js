import React, { Component } from "react";
import ProjectSelector from "./ProjectSelector";
import PropTypes from "prop-types";
import AddProjectModal from "./AddProjectModal";

class TimeTrackerPanel extends Component {
  handleProjectChange = event => {
    const { changeProject } = this.props;
    changeProject(event.target.value);
  };

  handleDescriptionChange = event => {
    const { changeDescription } = this.props;
    changeDescription(event.target.value);
  };

  handleToggleTracking = event => {
    const { isTracking, startTrackingTime, stopTrackingTime } = this.props;
    if (!isTracking) {
      startTrackingTime();
    } else {
      stopTrackingTime();
    }
  };

  handleKeyInput = event => {
    if (event.key === "Enter") {
      this.handleToggleTracking(event);
    }
  };

  componentDidMount = () => {
    const { loadProjects, getCurrentTimeEntry } = this.props;
    loadProjects();
    getCurrentTimeEntry();
  };

  openCreateProjectModal = () => {
    const { openCreateProjectModal } = this.props;
    openCreateProjectModal();
  };

  closeCreateProjectModal = () => {
    const { closeCreateProjectModal } = this.props;
    closeCreateProjectModal();
  };

  getTrackingButtonClass = () => {
    const { isTracking } = this.props;
    return isTracking ? "is-danger" : "is-primary";
  };

  getTrackingButtonMessage = () => {
    const { isTracking } = this.props;
    return isTracking ? "Stop tracking" : "Start tracking";
  };

  isThereNoExistingProjects = () => {
    const { currentProject } = this.props;
    return currentProject === "no-id";
  };

  isDescriptionInputDisabled = () => {
    const { isTracking } = this.props;
    return isTracking || this.isThereNoExistingProjects();
  };

  isTrackingButtonDisabled = () => {
    const { description } = this.props;
    return this.isThereNoExistingProjects() || !description;
  };

  render = () => {
    const {
      projects,
      currentProject,
      isTracking,
      description,
      isCreateProjectModalIsOpen,
      createProject
    } = this.props;
    return (
      <div className="columns">
        <div className="column is-two-fifths-tablet is-full-mobile">
          <div className="columns is-mobile">
            <div className="column is-1-widescreen is-2-tablet is-1-mobile add-project-button-container">
              <a
                onClick={this.openCreateProjectModal}
                className="button is-primary"
              >
                <span className="icon">
                  <i className="fa fa-plus" />
                </span>
              </a>
            </div>
            <div className="column is-11-widescreen is-10-tablet is-11-mobile">
              <ProjectSelector
                projects={projects}
                handleProjectUpdate={this.handleProjectChange}
                currentProject={currentProject}
                isTracking={isTracking}
              />
            </div>
          </div>
        </div>

        <div className="column is-two-fifths-tablet is-full-mobile">
          <input
            className="input is-normal"
            type="text"
            value={description}
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
        <AddProjectModal
          isActive={isCreateProjectModalIsOpen}
          createAction={createProject}
          closeModalAction={this.closeCreateProjectModal}
        />
      </div>
    );
  };
}

ProjectSelector.propTypes = {
  projects: PropTypes.array.isRequired,
  currentProject: PropTypes.string,
  description: PropTypes.string,
  isTracking: PropTypes.bool.isRequired
};

export default TimeTrackerPanel;
