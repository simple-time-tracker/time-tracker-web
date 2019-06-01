import { connect } from "react-redux";
import { loadProjects } from "../../state/actions";
import ProjectSelector from "./ProjectSelector";

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

const mapDispatchToProps = { loadProjects };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSelector);
