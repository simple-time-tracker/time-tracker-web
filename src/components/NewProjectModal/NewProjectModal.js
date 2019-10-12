import React from "react";
import PropTypes from "prop-types";
import {
  DUPLICATE_PROJECT_NAME_ERROR,
  UNKNOWN_ERROR
} from "../../state/errors";

class AddProjectModal extends React.PureComponent {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    createProjectAction: PropTypes.func.isRequired,
    closeModalAction: PropTypes.func.isRequired,
    projectModalError: PropTypes.string,
    clearError: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { projectName: "" };
  }

  componentDidUpdate = () => {
    const isClosed = !this.props.isActive;
    if (isClosed) {
      this.setState({
        projectName: ""
      });
    }
  };

  handleNameChange = ({ target }) => {
    this.setState({
      projectName: target.value
    });
  };

  handleKeyInput = event => {
    if (event.key === "Enter" && !this.isSaveButtonDisabled()) {
      this.createProject();
    }
  };

  closeAndClearModal = () => {
    const { closeModalAction, clearError } = this.props;
    this.setState({
      ...this.state,
      projectName: ""
    });
    closeModalAction();
    clearError();
  };

  createProject = () => {
    const { createProjectAction } = this.props;
    createProjectAction(this.state.projectName);
  };

  isSaveButtonDisabled = () => {
    return !this.state.projectName.length > 0;
  };

  resolveErrorText = errorCode => {
    switch (errorCode) {
      case DUPLICATE_PROJECT_NAME_ERROR.code:
        return DUPLICATE_PROJECT_NAME_ERROR.message;
      default:
        return UNKNOWN_ERROR.message;
    }
  };

  render = () => {
    const { isActive, projectModalError, clearError } = this.props;
    return (
      <div className={`modal ${isActive && "is-active"}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create new project</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.closeAndClearModal}
            />
          </header>
          <section className="modal-card-body">
            {projectModalError && (
              <div className="notification is-danger">
                <button className="delete" onClick={clearError}></button>
                {projectModalError && this.resolveErrorText(projectModalError)}
              </div>
            )}
            <div className="field">
              <label className="label">Project name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Project name"
                  value={this.state.projectName}
                  onChange={this.handleNameChange}
                  onKeyDown={this.handleKeyInput}
                />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={this.createProject}
              disabled={this.isSaveButtonDisabled()}
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

export default AddProjectModal;
