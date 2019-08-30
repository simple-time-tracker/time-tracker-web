import React from "react";
import PropTypes from "prop-types";

class AddProjectModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { projectName: "" };
  }

  handleNameChange = ({ target }) => {
    this.setState({
      projectName: target.value
    });
  };

  closeAndClearModal = () => {
    const { closeModalAction } = this.props;
    this.setState({
      ...this.state,
      projectName: ""
    });
    closeModalAction();
  };

  render = () => {
    const { isActive, createAction, closeModalAction } = this.props;
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
                <input
                  className="input"
                  type="text"
                  placeholder="Project name"
                  value={this.state.projectName}
                  onChange={this.handleNameChange}
                />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={() => {
                createAction(this.state.projectName);
                this.closeAndClearModal();
              }}
            >
              Create project
            </button>
            <button className="button" onClick={this.closeAndClearModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  };
}

AddProjectModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  createProjectAction: PropTypes.func.isRequired,
  closeModalAction: PropTypes.func.isRequired
};

export default AddProjectModal;
