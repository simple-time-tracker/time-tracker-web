import React from "react";
import PropTypes from "prop-types";

const ProjectSelector = props => (
  <div className="select is-fullwidth">
    <select>
      {props.projects.map(project => {
        return <option key={project.id}>{project.name}</option>;
      })}
    </select>
  </div>
);

ProjectSelector.propTypes = {
  projects: PropTypes.array
};

export default ProjectSelector;
