import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProjectListItem from './ProjectListItem';

class ProjectList extends PureComponent {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  };

  render = () => {
    const { projects } = this.props;
    return (
      <div id="projects-table">
        <table className="table is-fullwidth is-striped is-narrow">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Creation date</th>
            </tr>
          </thead>
          <tbody>{mapEntries(projects)}</tbody>
        </table>
      </div>
    );
  };
}

const mapEntries = (projects) =>
  projects.map((entry) => (
    <ProjectListItem
      key={entry.id}
      id={entry.id}
      name={entry.name}
      dateCreated={entry.dateCreated}
    />
  ));

export default ProjectList;
