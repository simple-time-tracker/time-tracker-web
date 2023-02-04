import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectList from '../../components/ProjectList/ProjectList';
import ProjectStatus from '../../state/ProjectList/ProjectStatus';

class ProjectListContainer extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    statusFilter: PropTypes.string.isRequired,
    loadProjects: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired,
    archiveProject: PropTypes.func.isRequired,
    restoreProject: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    const { loadProjects, statusFilter } = this.props;
    loadProjects(1, statusFilter);
  };

  componentDidUpdate = (prevProps) => {
    const { loadProjects, statusFilter } = this.props;
    if (prevProps.statusFilter !== statusFilter) {
      loadProjects(1, statusFilter);
    }
  };

  getActiveTabClasses = () => {
    const { statusFilter } = this.props;
    return statusFilter === ProjectStatus.ACTIVE ? 'is-active' : '';
  };

  getArchivedTabClasses = () => {
    const { statusFilter } = this.props;
    return statusFilter === ProjectStatus.ARCHIVED ? 'is-active' : '';
  };

  changeFilterToArchived = () => {
    const { changeFilter } = this.props;
    changeFilter(ProjectStatus.ARCHIVED);
  };

  changeFilterToActive = () => {
    const { changeFilter } = this.props;
    changeFilter(ProjectStatus.ACTIVE);
  };

  render = () => {
    const {
      projects,
      currentPage,
      totalPages,
      loadProjects,
      archiveProject,
      restoreProject,
    } = this.props;
    return (
      <div className="projects-container">
        <div className="tabs">
          <ul>
            <li
              className={this.getActiveTabClasses()}
              onClick={this.changeFilterToActive}
            >
              <a>Active</a>
            </li>
            <li
              className={this.getArchivedTabClasses()}
              onClick={this.changeFilterToArchived}
            >
              <a>Archived</a>
            </li>
          </ul>
        </div>
        <ProjectList
          projects={projects}
          currentPage={currentPage}
          totalPages={totalPages}
          loadProjects={loadProjects}
          archiveAction={archiveProject}
          restoreAction={restoreProject}
        />
      </div>
    );
  };
}

export default ProjectListContainer;
