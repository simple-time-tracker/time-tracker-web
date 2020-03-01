import { LOAD_PROJECTS } from './projectSelectorActionTypes';
import { getProjects, createNewProject } from './projectApi';
import { setAddProjectModalError } from '../NewProjectModal/newProjectModalActions';
import { DUPLICATE_PROJECT_NAME_ERROR } from '../errors';
import { changeProject } from '../TimeTracker/timeTrackerActions';

export const loadProjects = () => (dispatch, getState) =>
  getProjects().then((response) => {
    if (response.data.length > 0) {
      dispatch({
        type: LOAD_PROJECTS,
        payload: response.data,
      });

      const { tracker } = getState();
      if (!tracker.currentProject) {
        dispatch(changeProject(response.data[0].id));
      }
    } else {
      dispatch({
        type: LOAD_PROJECTS,
        payload: [{ id: undefined, key: 'empty', name: 'No projects' }],
      });
    }
  });

export const createProject = (name) => (dispatch, getState) => {
  createNewProject(name)
    .then((response) => {
      loadProjects()(dispatch, getState).then(() => {
        dispatch(changeProject(response.data.id));
      });
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
