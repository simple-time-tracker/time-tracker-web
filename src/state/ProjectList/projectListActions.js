import projectListApi from './projectListApi';
import { LOAD_PROJECTS } from './projectListActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const loadProjects = (page) => (dispatch) =>
  projectListApi.getProjectsWithSummaries(page).then((response) => {
    dispatch({
      type: LOAD_PROJECTS,
      payload: response.data,
    });
  });
