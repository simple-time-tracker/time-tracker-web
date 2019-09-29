import { connect } from "react-redux";
import ProjectSelector from "./ProjectSelector";

const mapStateToProps = state => {
  return {
    projects: state.projects,
    currentProject: state.tracker.currentProject
  };
};

const mapDispatchToProps = { loadTimeEntries, deleteEntry };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSelector);
