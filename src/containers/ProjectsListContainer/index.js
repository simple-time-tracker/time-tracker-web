import { connect } from 'react-redux';
import ProjectListContainer from './ProjectsListContainer';
import { loadProjects } from '../../state/ProjectList/projectListActions';

const mapStateToProps = (state) => ({
  projects: state.projectList.projects,
});

const mapDispatchToProps = { loadProjects };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer);
