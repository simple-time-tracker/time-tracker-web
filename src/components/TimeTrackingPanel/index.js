import { connect } from "react-redux";
import {
  changeProject,
  changeDescription,
  loadProjects,
  getCurrentTimeEntry,
  startTrackingTime,
  stopTrackingTime,
  openCreateProjectModal,
  closeCreateProjectModal,
  createProject
} from "../../state/actions";
import TimeTrackerPanel from "./TimeTackerPanel ";

const mapStateToProps = state => {
  return {
    projects: state.projects,
    currentProject: state.tracker.currentProject,
    description: state.tracker.taskDescription,
    isTracking: state.tracker.isTracking,
    isCreateProjectModalIsOpen: state.createProject.isModalOpen
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
  createProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTrackerPanel);
