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

export const archiveProject = (projectId) => (dispatch, getState) => {
  const { projectList } = getState();
  return projectListApi
    .archiveProject(projectId)
    .then(() => loadProjects(1, projectList.statusFilter)(dispatch));
};

export const restoreProject = (projectId) => (dispatch, getState) => {
  const { projectList } = getState();
  return projectListApi
    .restoreProject(projectId)
    .then(() => loadProjects(1, projectList.statusFilter)(dispatch));
};
