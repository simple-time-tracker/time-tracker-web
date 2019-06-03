import { connect } from "react-redux";
import {
  changeProject,
  changeDescription,
  loadProjects,
  getCurrentTimeEntry,
  startTrackingTime,
  stopTrackingTime
} from "../../state/actions";
import TimeTrackerPanel from "./TimeTackerPanel ";

const mapStateToProps = state => {
  return {
    projects: state.projects,
    currentProject: state.tracker.currentProject,
    description: state.tracker.taskDescription,
    isTracking: state.tracker.isTracking
  };
};

const mapDispatchToProps = {
  changeProject,
  changeDescription,
  loadProjects,
  getCurrentTimeEntry,
  startTrackingTime,
  stopTrackingTime
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTrackerPanel);
