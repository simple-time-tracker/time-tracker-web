import React from "react";
import PropTypes from "prop-types";

const ProjectSelector = props => {
  const { projects, currentProject, isTracking, handleProjectUpdate } = props;
  return (
    <div className="select is-fullwidth">
      <select
        onChange={handleProjectUpdate}
        value={currentProject}
        disabled={isTracking || currentProject === "no-id"}
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
  );
};

ProjectSelector.propTypes = {
  projects: PropTypes.array,
  isTracking: PropTypes.bool,
  handleProjectUpdate: PropTypes.func
};

export default ProjectSelector;
