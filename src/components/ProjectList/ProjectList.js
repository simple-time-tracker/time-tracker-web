import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProjectListItem from './ProjectListItem';
import { DEFAULT_MAX_PAGES } from '../../constants/pagination';
import Pagination from '../Pagination/Pagination';

class ProjectList extends PureComponent {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    loadProjects: PropTypes.func.isRequired,
    archiveAction: PropTypes.func.isRequired,
    restoreAction: PropTypes.func.isRequired,
  };

  render = () => {
    const {
      projects,
      totalPages,
      currentPage,
      loadProjects,
      archiveAction,
      restoreAction,
    } = this.props;
    return (
      <div id="projects-table">
        <table className="table is-fullwidth is-striped is-narrow">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Time spent</th>
              <th>Is archived</th>
              <th>Creation date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{mapEntries(projects, archiveAction, restoreAction)}</tbody>
        </table>
        <Pagination
          totalPages={totalPages}
          activePage={currentPage}
          maxPages={DEFAULT_MAX_PAGES}
          loadPage={loadProjects}
        />
      </div>
    );
  };
}

const mapEntries = (projects, archiveAction, restoreAction) =>
  projects.map((entry) => (
    <ProjectListItem
      key={entry.id}
      id={entry.id}
      name={entry.name}
      isArchived={entry.archived}
      timeSpentInMilliseconds={entry.timeSpentInMilliseconds}
      dateCreated={entry.dateCreated}
      archiveAction={archiveAction}
      restoreAction={restoreAction}
    />
  ));

export default ProjectList;
