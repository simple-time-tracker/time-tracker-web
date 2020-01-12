import { PROJECT_SELECTOR_LOAD_PROJECTS } from './projectSelectorActionTypes';
import { getProjects, createNewProject } from './projectApi';
import { setAddProjectModalError } from '../NewProjectModal/newProjectModalActions';
import { DUPLICATE_PROJECT_NAME_ERROR } from '../errors';
import { changeProject } from '../TimeTracker/timeTrackerActions';

export const loadProjects = () => (dispatch) =>
  getProjects().then((response) => {
    if (response.data.length > 0) {
      dispatch({
        type: PROJECT_SELECTOR_LOAD_PROJECTS,
        payload: response.data,
      });
      dispatch(changeProject(response.data[0].id));
    } else {
      dispatch({
        type: PROJECT_SELECTOR_LOAD_PROJECTS,
        payload: [{ id: undefined, key: 'empty', name: 'No projects' }],
      });
    }
  });

export const createProject = (name) => (dispatch) => {
  createNewProject(name)
    .then((response) => {
      loadProjects()(dispatch).then(() => dispatch(changeProject(response.data.id)));
    })
    .catch((error) => {
      if (
        error.response &&
        error.response.data &&
        error.response.data.status === 409
      ) {
        dispatch(setAddProjectModalError(DUPLICATE_PROJECT_NAME_ERROR.code));
        return;
      }
      dispatch(setAddProjectModalError('OTHER'));
    });
};
