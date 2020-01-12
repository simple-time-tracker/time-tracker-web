import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectList from '../../components/ProjectList/ProjectList';

class ProjectListContainer extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  };

  render = () => {
    const { projects } = this.props;
    return <ProjectList projects={projects} />;
  };
}

export default ProjectListContainer;
