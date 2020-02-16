import projectListApi from './projectListApi';
import { LOAD_PROJECTS, CHANGE_FILTER } from './projectListActionTypes';

export const loadProjects = (page, status) => (dispatch) =>
  projectListApi.getProjectsWithSummaries(page, status).then((response) => {
    dispatch({
      type: LOAD_PROJECTS,
      payload: response.data,
    });
  });

export const changeFilter = (newStatusFilter) => ({
  type: CHANGE_FILTER,
  payload: newStatusFilter,
});
