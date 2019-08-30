import React from "react";
import PropTypes from "prop-types";

const AddProjectModal = props => {
  const { isActive, closeModalAction } = props;
  return (
    <div className={`modal ${isActive && "is-active"}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create new project</p>
          <button
            className="delete"
            aria-label="close"
            onClick={closeModalAction}
          ></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Project name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Project name" />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Create project</button>
          <button className="button" onClick={closeModalAction}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

AddProjectModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  closeModalAction: PropTypes.func.isRequired
};

export default AddProjectModal;
