import { connect } from 'react-redux';
import ProjectListContainer from './ProjectsListContainer';

const mapStateToProps = () => ({
  projects: [
    { id: 1, name: 'Time tracker app', dateCreated: '2020-01-12T13:51:54.141854Z' },
    { id: 2, name: 'Budget app', dateCreated: '2020-01-12T13:15:41.68617Z' },
  ],
});

export default connect(mapStateToProps, null)(ProjectListContainer);
