import React from 'react';
import PropTypes from 'prop-types';

const ProjectSelector = (props) => {
  const {
    projects,
    currentProject,
    isTracking,
    handleProjectUpdate,
    openCreateProjectModal,
  } = props;
  return (
    <div className="field has-addons">
      <div className="control">
        <button
          className="button is-primary"
          onClick={openCreateProjectModal}
          disabled={isTracking}
        >
          <span className="icon">
            <i className="fa fa-plus" />
          </span>
        </button>
      </div>
      <div className="select is-fullwidth">
        <select
          onChange={handleProjectUpdate}
          value={currentProject}
          disabled={isTracking || currentProject === undefined}
        >
          {projects.map((project) => (
            <option key={project.id ? project.id : 'empty'} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

ProjectSelector.propTypes = {
  currentProject: PropTypes.number,
  projects: PropTypes.array,
  isTracking: PropTypes.bool,
  handleProjectUpdate: PropTypes.func,
  openCreateProjectModal: PropTypes.func,
};

export default ProjectSelector;
