import { connect } from "react-redux";
import {
  changeDescription,
  getCurrentTimeEntry,
  startTrackingTime,
  stopTrackingTime
} from "../../state/TimeTracker/timeTrackerActions";
import {
  openCreateProjectModal,
  closeCreateProjectModal,
  clearAddProjectModalError
} from "../../state/NewProjectModal/newProjectModalActions";

import {
  createProject,
  loadProjects
} from "../../state/ProjectsSelector/projectSelectorActions";
import { changeProject } from "../../state/TimeTracker/timeTrackerActions";
import TimeTrackerPanel from "./TimeTackerPanel ";

const mapStateToProps = state => {
  return {
    projects: state.projects,
    currentProject: state.tracker.currentProject,
    description: state.tracker.taskDescription,
    isTracking: state.tracker.isTracking,
    isCreateProjectModalIsOpen: state.createProject.isModalOpen,
    projectModalError: state.createProject.error
  };
};

const mapDispatchToProps = {
  changeProject,
  changeDescription,
  loadProjects,
  getCurrentTimeEntry,
  startTrackingTime,
  stopTrackingTime,
  openCreateProjectModal,
  closeCreateProjectModal,
  createProject,
  clearAddProjectModalError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTrackerPanel);
