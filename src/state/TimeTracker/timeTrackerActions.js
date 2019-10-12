import {
  CHANGE_DESCRIPTION,
  LOAD_CURRENT_TIME_ENTRY,
  START_TRACKING,
  STOP_TRACKING,
  CHANGE_PROJECT,
} from './timeTrackerActionTypes';
import { getActiveTimeEntry, startTracking, stopTracking } from './timeTrackerApi';
import { loadTimeEntries } from '../TimeEntriesList/timeEntriesActions';

import {
  closeCreateProjectModal,
  clearAddProjectModalError,
} from '../NewProjectModal/newProjectModalActions';

export const startTrackingTime = () => {
  return (dispatch, getState) => {
    const state = getState().tracker;
    startTracking(state.currentProject, state.taskDescription).then(() => {
      dispatch({
        type: START_TRACKING,
      });
      loadTimeEntries()(dispatch);
    });
  };
};

export const stopTrackingTime = () => {
  return (dispatch) => {
    stopTracking().then(() => {
      dispatch({
        type: STOP_TRACKING,
      });
      loadTimeEntries()(dispatch);
    });
  };
};

export const getCurrentTimeEntry = () => {
  return (dispatch) => {
    getActiveTimeEntry().then((response) => {
      dispatch({
        type: LOAD_CURRENT_TIME_ENTRY,
        payload: response.data,
      });
    });
  };
};

export const changeDescription = (description) => {
  return {
    type: CHANGE_DESCRIPTION,
    payload: description,
  };
};

export const changeProject = (projectId) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PROJECT,
      payload: projectId,
    });

    dispatch(closeCreateProjectModal());
    dispatch(clearAddProjectModalError());
  };
};
