import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import TimeEntriesListContainer from '../../containers/TimeEntriesListContainer';

const ProjectPage = ({
  name,
  isArchived,
  dateCreated,
  timeSpentInMillis,
  loadTimeEntries,
  loadProject,
}) => {
  const { id } = useParams();
  useEffect(() => {
    loadProject(id);
  });

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

ProjectPage.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  dateCreated: PropTypes.string,
  isArchived: PropTypes.bool.isRequired,
  timeSpentInMillis: PropTypes.number.isRequired,
  loadTimeEntries: PropTypes.func.isRequired,
  loadProject: PropTypes.func.isRequired,
};

export default ProjectPage;
