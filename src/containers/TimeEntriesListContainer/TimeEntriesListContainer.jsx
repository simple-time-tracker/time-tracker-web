import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeEntriesList from '../../components/TimeEntriesList/TimeEntriesList';
import ConfirmModal from '../../components/Modal/ConfirmModal';

class TimeEntriesListContainer extends Component {
  static propTypes = {
    projects: PropTypes.array,
    entries: PropTypes.array,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    deleteEntry: PropTypes.func.isRequired,
    loadTimeEntries: PropTypes.func.isRequired,
    isDeleteModalOpen: PropTypes.bool.isRequired,
    itemToDelete: PropTypes.object,
    openDeleteModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    clearItems: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    this.props.clearItems();
    this.props.loadTimeEntries(1);
  };

  componentDidUpdate = (prevProps) => {
    const { loadTimeEntries, currentPage } = this.props;
    if (!(prevProps.loadTimeEntries === loadTimeEntries)) {
      this.props.clearItems();
      this.props.loadTimeEntries(currentPage);
    }
  };

  render = () => {
    const {
      entries,
      projects,
      currentPage,
      totalPages,
      isDeleteModalOpen,
      loadTimeEntries,
      openDeleteModal,
      closeModal,
      deleteEntry,
    } = this.props;
    return (
      <div>
        <TimeEntriesList
          timeEntries={mapProjectNameToEntries(entries, projects)}
          totalPages={totalPages}
          currentPage={currentPage}
          loadTimeEntries={loadTimeEntries}
          openDeleteModal={openDeleteModal}
        />
        <ConfirmModal
          isOpen={isDeleteModalOpen}
          closeModal={() => closeModal()}
          confirmAction={() =>
            deleteEntry(this.props.itemToDelete.id, loadTimeEntries)
          }
          message={'Are you sure you want to delete?'}
          title={`Delete #${this.props.itemToDelete.id} time entry?`}
        />
      </div>
    );
  };
}

// Refactor using selectors #135
const mapProjectNameToEntries = (entries, projects) => {
  return entries.map((entry) => ({
    ...entry,
    projectName: projects?.find((project) => (project.id = entry.projectId)).name,
  }));
};

export default TimeEntriesListContainer;
