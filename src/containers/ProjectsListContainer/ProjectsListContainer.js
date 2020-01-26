import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectList from '../../components/ProjectList/ProjectList';

class ProjectListContainer extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    loadProjects: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    const { loadProjects } = this.props;
    loadProjects(1);
  };

  render = () => {
    const { projects, currentPage, totalPages, loadProjects } = this.props;
    return (
      <ProjectList
        projects={projects}
        currentPage={currentPage}
        totalPages={totalPages}
        loadProjects={loadProjects}
      />
    );
  };
}

export default ProjectListContainer;
