import { connect } from "react-redux";
import { loadProjects } from "../../state/actions";
import TimeTrackerPanel from "./TimeTackerPanel ";

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

const mapDispatchToProps = { loadProjects };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTrackerPanel);
