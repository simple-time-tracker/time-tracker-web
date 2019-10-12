import { connect } from 'react-redux';
import ProjectSelector from './ProjectSelector';

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    currentProject: state.tracker.currentProject,
  };
};

export default connect(
  mapStateToProps,
  null
)(ProjectSelector);
