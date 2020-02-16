import { connect } from 'react-redux';
import {
  deleteEntry,
  openDeleteModal,
  closeModal,
  clearItems,
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
  deleteEntry,
  openDeleteModal,
  closeModal,
  clearItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesListContainer);
