import { connect } from 'react-redux';
import {
  loadTimeEntries,
  deleteEntry,
} from '../../state/TimeEntriesList/timeEntriesActions';
import TimeEntriesListContainer from './TimeEntriesListContainer';

const mapStateToProps = (state) => ({
  entries: state.timeEntriesList.items,
  currentPage: state.timeEntriesList.currentPage,
  totalPages: state.timeEntriesList.totalPages,
});

const mapDispatchToProps = { loadTimeEntries, deleteEntry };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesListContainer);
