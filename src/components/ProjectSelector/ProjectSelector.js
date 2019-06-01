import React, { Component } from "react";

class ProjectSelector extends Component {
  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    const projects = this.props.projects.map(project => {
      return <option key={project.id}>{project.name}</option>;
    });

    return (
      <div className="select">
        <select>{projects}</select>
      </div>
    );
  }
}

export default ProjectSelector;
