import { getProjectsWithSummaries } from '../ProjectsSelector/projectApi';
import { LOAD_PROJECTS } from './projectListActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const loadProjects = () => (dispatch) =>
  getProjectsWithSummaries().then((response) => {
    dispatch({
      type: LOAD_PROJECTS,
      payload: response.data,
    });
  });
