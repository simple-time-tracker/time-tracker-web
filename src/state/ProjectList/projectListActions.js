import { getProjects } from '../ProjectsSelector/projectApi';
import { PROJECT_LIST_LOAD_PROJECTS } from './projectListActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const loadProjects = () => (dispatch) =>
  getProjects().then((response) => {
    dispatch({
      type: PROJECT_LIST_LOAD_PROJECTS,
      payload: response.data,
    });
  });
