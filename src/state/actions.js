import {
  CHANGE_PROJECT,
  CHANGE_DESCRIPTION,
  LOAD_PROJECTS,
  LOAD_TIME_ENTRIES,
  LOAD_CURRENT_TIME_ENTRY,
  START_TRACKING,
  STOP_TRACKING,
  OPEN_CREATE_PROJECT_MODAL,
  CLOSE_CREATE_PROJECT_MODAL
} from "./actionTypes";
import {
  getProjects,
  getTimeEntries,
  getActiveTimeEntry,
  startTracking,
  stopTracking
} from "../utils/api";

export const loadProjects = () => {
  return dispatch => {
    getProjects().then(response => {
      dispatch({
        type: LOAD_PROJECTS,
        payload:
          response.data.length > 0
            ? response.data
            : [{ id: "no-id", name: "No projects" }]
      });
    });
  };
};

export const loadTimeEntries = () => {
  return dispatch => {
    getTimeEntries().then(response => {
      dispatch({
        type: LOAD_TIME_ENTRIES,
        payload: response.data
      });
    });
  };
};

export const startTrackingTime = () => {
  return (dispatch, getState) => {
    const state = getState().tracker;
    startTracking(state.currentProject, state.taskDescription).then(() => {
      dispatch({
        type: START_TRACKING
      });
      loadTimeEntries()(dispatch);
    });
  };
};

export const stopTrackingTime = () => {
  return dispatch => {
    stopTracking().then(() => {
      dispatch({
        type: STOP_TRACKING
      });
      loadTimeEntries()(dispatch);
    });
  };
};

export const getCurrentTimeEntry = () => {
  return dispatch => {
    getActiveTimeEntry().then(response => {
      dispatch({
        type: LOAD_CURRENT_TIME_ENTRY,
        payload: response.data
      });
    });
  };
};

export const changeProject = projectId => {
  return {
    type: CHANGE_PROJECT,
    payload: projectId
  };
};

export const changeDescription = description => {
  return {
    type: CHANGE_DESCRIPTION,
    payload: description
  };
};

export const openCreateProjectModal = () => {
  return {
    type: OPEN_CREATE_PROJECT_MODAL
  };
};

export const closeCreateProjectModal = () => {
  return {
    type: CLOSE_CREATE_PROJECT_MODAL
  };
};
