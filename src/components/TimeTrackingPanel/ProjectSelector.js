import React from "react";
import PropTypes from "prop-types";

const ProjectSelector = props => (
  <div className="select is-fullwidth">
    <select
      onChange={props.handleProjectUpdate}
      value={props.currentProject}
      disabled={props.isTracking || props.currentProject === "no-id"}
    >
      {props.projects.map(project => {
        return (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        );
      })}
    </select>
  </div>
);

ProjectSelector.propTypes = {
  projects: PropTypes.array,
  isTracking: PropTypes.bool,
  handleProjectUpdate: PropTypes.func
};

export default ProjectSelector;
