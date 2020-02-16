import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import TimeEntriesListContainer from '../../containers/TimeEntriesListContainer';

class ProjectPage extends Component {
  componentDidMount = () => {
    const { loadProject, match } = this.props;
    const { id } = match.params;
    loadProject(id);
  };

  render = () => {
    const {
      id,
      name,
      isArchived,
      dateCreated,
      timeSpentInMillis,
      loadTimeEntries,
    } = this.props;
    return (
      <div id="project-page" className="container">
        <ProjectInfo
          id={id}
          name={name}
          dateCreated={dateCreated}
          isArchived={isArchived}
          durationInMillis={timeSpentInMillis}
        />
        <div className="container">
          <h2 className="title is-3">Tracked time:</h2>
          {id && (
            <TimeEntriesListContainer
              loadTimeEntries={(page) => loadTimeEntries(id, page)}
            />
          )}
        </div>
      </div>
    );
  };
}

ProjectPage.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  dateCreated: PropTypes.string,
  isArchived: PropTypes.bool.isRequired,
  timeSpentInMillis: PropTypes.number.isRequired,
  loadTimeEntries: PropTypes.func.isRequired,
  loadProject: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default ProjectPage;
