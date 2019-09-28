import React from "react";
import PropTypes from "prop-types";

const ProjectSelector = props => {
  const {
    projects,
    currentProject,
    isTracking,
    handleProjectUpdate,
    openCreateProjectModal
  } = props;
  return (
    <div className="columns is-mobile">
      <div className="column is-1-widescreen is-2-tablet is-1-mobile add-project-button-container">
        <button className="button is-primary" onClick={openCreateProjectModal} disabled={isTracking}>
          <span className="icon">
            <i className="fa fa-plus" />
          </span>
        </button>
      </div>
      <div className="column is-11-widescreen is-10-tablet is-11-mobile">
        <div className="select is-fullwidth">
          <select
            onChange={handleProjectUpdate}
            value={currentProject}
            disabled={isTracking || currentProject === undefined}
          >
            {projects.map(project => {
              return (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

ProjectSelector.propTypes = {
  projects: PropTypes.array,
  isTracking: PropTypes.bool,
  handleProjectUpdate: PropTypes.func
};

export default ProjectSelector;
