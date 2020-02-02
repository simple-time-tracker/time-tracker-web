import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeEntriesList from '../../components/TimeEntriesList/TimeEntriesList';
import ConfirmModal from '../../components/Modal/ConfirmModal';

class TimeEntriesListContainer extends Component {
  static propTypes = {
    entries: PropTypes.array,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    deleteEntry: PropTypes.func.isRequired,
    loadTimeEntries: PropTypes.func.isRequired,
    isDeleteModalOpen: PropTypes.bool.isRequired,
    itemToDelete: PropTypes.object,
    openDeleteModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    this.props.loadTimeEntries(1);
  };

  render = () => (
    <div>
      <TimeEntriesList
        timeEntries={this.props.entries}
        totalPages={this.props.totalPages}
        currentPage={this.props.currentPage}
        loadTimeEntries={this.props.loadTimeEntries}
        openDeleteModal={this.props.openDeleteModal}
      />
      <ConfirmModal
        isOpen={this.props.isDeleteModalOpen}
        closeModal={() => this.props.closeModal()}
        confirmAction={() => this.props.deleteEntry(this.props.itemToDelete.id)}
        message={'Are you sure you want to delete?'}
        title={`Delete #${this.props.itemToDelete.id} time entry?`}
      />
    </div>
  );
}

export default TimeEntriesListContainer;
