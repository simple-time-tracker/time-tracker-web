import { connect } from 'react-redux';
import {
  loadTimeEntries,
  deleteEntry,
  openDeleteModal,
  closeModal,
} from '../../state/TimeEntriesList/timeEntriesActions';
import TimeEntriesListContainer from './TimeEntriesListContainer';

const mapStateToProps = (state) => ({
  entries: state.timeEntriesList.items,
  currentPage: state.timeEntriesList.currentPage,
  totalPages: state.timeEntriesList.totalPages,
  isDeleteModalOpen: state.timeEntriesList.deleteModal.isOpen,
  itemToDelete: state.timeEntriesList.deleteModal.itemToDelete,
});

const mapDispatchToProps = {
  loadTimeEntries,
  deleteEntry,
  openDeleteModal,
  closeModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesListContainer);
