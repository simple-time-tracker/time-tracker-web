import projectListApi from './projectListApi';
import { LOAD_PROJECTS, CHANGE_FILTER } from './projectListActionTypes';
import {
  successNotification,
  errorNotification,
} from '../../utils/notifications/toastUtils';

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
    .then(() => {
      const { projects } = projectList;
      loadProjects(1, projectList.statusFilter)(dispatch);
      successNotification(
        `Project "${getProjectName(projects, projectId)}" was archived successfully`
      );
    })
    .catch(() => errorNotification('Error occurred while archiving project'));
};

export const restoreProject = (projectId) => (dispatch, getState) => {
  const { projectList } = getState();
  return projectListApi.restoreProject(projectId).then(() => {
    const { projects } = projectList;
    loadProjects(1, projectList.statusFilter)(dispatch);
    successNotification(
      `Project "${getProjectName(projects, projectId)}" was restored from archive`
    );
  });
};

const getProjectName = (projects, projectId) =>
  projects.find((project) => project.id === projectId).name;
