import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectSelector from '../ProjectSelector/ProjectSelector';
import AddProjectModal from '../../components/NewProjectModal/NewProjectModal';
import Timer from '../../components/Timer/Timer';

class TimeTrackerPanel extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    currentProject: PropTypes.number,
    description: PropTypes.string,
    isTracking: PropTypes.bool.isRequired,
    startDate: PropTypes.instanceOf(Date),
    changeProject: PropTypes.func.isRequired,
    changeDescription: PropTypes.func.isRequired,
    startTrackingTime: PropTypes.func.isRequired,
    stopTrackingTime: PropTypes.func.isRequired,
    loadProjects: PropTypes.func.isRequired,
    getCurrentTimeEntry: PropTypes.func.isRequired,
    openCreateProjectModal: PropTypes.func.isRequired,
    closeCreateProjectModal: PropTypes.func.isRequired,
    isCreateProjectModalIsOpen: PropTypes.bool.isRequired,
    clearAddProjectModalError: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    projectModalError: PropTypes.object,
  };

  handleProjectChange = (event) => {
    const { changeProject } = this.props;
    changeProject(event.target.value);
  };

  handleDescriptionChange = (event) => {
    const { changeDescription } = this.props;
    changeDescription(event.target.value);
  };

  handleToggleTracking = () => {
    const { isTracking, startTrackingTime, stopTrackingTime } = this.props;
    if (!isTracking) {
      startTrackingTime();
    } else {
      stopTrackingTime();
    }
  };

  handleKeyInput = (event) => {
    if (event.key === 'Enter') {
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
    return isTracking ? 'is-danger' : 'is-primary';
  };

  getTrackingButtonMessage = () => {
    const { isTracking } = this.props;
    return isTracking ? 'Stop tracking' : 'Start tracking';
  };

  isThereNoExistingProjects = () => {
    const { currentProject } = this.props;
    return currentProject === undefined;
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
      startDate,
      description,
      isCreateProjectModalIsOpen,
      clearAddProjectModalError,
      createProject,
      projectModalError,
    } = this.props;
    return (
      <div className="columns">
        <div className="column is-3-tablet is-full-mobile">
          <ProjectSelector
            projects={projects}
            handleProjectUpdate={this.handleProjectChange}
            currentProject={currentProject}
            isTracking={isTracking}
            openCreateProjectModal={this.openCreateProjectModal}
          />
        </div>

        <div className="column is-5-tablet is-full-mobile">
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
        <div className="column is-2-tablet is-full-mobile">
          <Timer isTracking={isTracking} startDate={startDate} />
        </div>

        <div className="column is-2-tablet is-full-mobile">
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
          createProjectAction={createProject}
          closeModalAction={this.closeCreateProjectModal}
          projectModalError={projectModalError}
          clearError={clearAddProjectModalError}
        />
      </div>
    );
  };
}

export default TimeTrackerPanel;
