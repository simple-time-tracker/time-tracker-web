import { connect } from 'react-redux';
import { loadTimeEntries } from '../../state/TimeEntriesList/timeEntriesActions';
import TimeTrackerPage from './TimeTrackerPage';

const mapDispatchToProps = {
  loadTimeEntries,
};

export default connect(null, mapDispatchToProps)(TimeTrackerPage);
