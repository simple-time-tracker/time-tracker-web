import {
  CHANGE_DESCRIPTION,
  LOAD_CURRENT_TIME_ENTRY,
  START_TRACKING,
  STOP_TRACKING,
  CHANGE_PROJECT,
  INCREMENT_TIMER,
} from './timeTrackerActionTypes';
import { getActiveTimeEntry, startTracking, stopTracking } from './timeTrackerApi';
import { loadTimeEntries } from '../TimeEntriesList/timeEntriesActions';

import {
  closeCreateProjectModal,
  clearAddProjectModalError,
} from '../NewProjectModal/newProjectModalActions';

export const startTrackingTime = () => (dispatch, getState) => {
  const { timeEntriesList, tracker } = getState();
  startTracking(tracker.currentProject, tracker.taskDescription).then(() => {
    dispatch({
      type: START_TRACKING,
    });
    loadTimeEntries(timeEntriesList.currentPage)(dispatch);
  });
};

export const stopTrackingTime = () => (dispatch, getState) => {
  const { timeEntriesList } = getState();
  stopTracking().then(() => {
    dispatch({
      type: STOP_TRACKING,
    });
    loadTimeEntries(timeEntriesList.currentPage)(dispatch);
  });
};

export const incrementTimer = () => ({
  type: INCREMENT_TIMER,
});

export const getCurrentTimeEntry = () => (dispatch) => {
  getActiveTimeEntry().then((response) => {
    dispatch({
      type: LOAD_CURRENT_TIME_ENTRY,
      payload: response.data,
    });
  });
};

export const changeDescription = (description) => ({
  type: CHANGE_DESCRIPTION,
  payload: description,
});

export const changeProject = (projectId) => (dispatch) => {
  dispatch({
    type: CHANGE_PROJECT,
    payload: projectId,
  });

  dispatch(closeCreateProjectModal());
  dispatch(clearAddProjectModalError());
};
