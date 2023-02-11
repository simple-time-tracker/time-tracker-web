import React from 'react';
import PropTypes from 'prop-types';

const ConfirmModal = ({ isOpen, title, message, closeModal, confirmAction }) => (
  <div className={`modal ${resolveIsActiveClass(isOpen)}`} data-testid="modal">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button
          className="delete"
          data-testid="modal-close-button"
          aria-label="close"
          onClick={closeModal}
        ></button>
      </header>
      <section className="modal-card-body">{message}</section>
      <footer className="modal-card-foot">
        <button
          className="button"
          data-testid="modal-cancel-button"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          className="button is-danger"
          data-testid="modal-confirm-button"
          onClick={confirmAction}
        >
          Confirm
        </button>
      </footer>
    </div>
  </div>
);

const resolveIsActiveClass = (isOpen) => (isOpen ? 'is-active' : '');

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  confirmAction: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ConfirmModal;
