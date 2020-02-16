import { connect } from 'react-redux';
import {
  loadProject,
  loadTimeEntries,
} from '../../state/ProjectPage/projectPageActions';
import ProjectPage from './ProjectPage';

const mapStateToProps = (state) => ({
  id: state.projectPage.id,
  name: state.projectPage.name,
  dateCreated: state.projectPage.dateCreated,
  isArchived: state.projectPage.isArchived,
  timeSpentInMillis: state.projectPage.timeSpentInMillis,
});

const mapDispatchToProps = {
  loadProject,
  loadTimeEntries,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
