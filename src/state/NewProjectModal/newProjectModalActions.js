import {
  SET_ADD_PROJECT_MODAL_ERROR,
  CLEAR_ADD_PROJECT_MODAL_ERROR,
  OPEN_CREATE_PROJECT_MODAL,
  CLOSE_CREATE_PROJECT_MODAL,
} from './newProjectModalActionTypes';

export const setAddProjectModalError = (errorCode) => ({
  type: SET_ADD_PROJECT_MODAL_ERROR,
  payload: errorCode,
});

export const clearAddProjectModalError = () => ({
  type: CLEAR_ADD_PROJECT_MODAL_ERROR,
});

export const openCreateProjectModal = () => ({
  type: OPEN_CREATE_PROJECT_MODAL,
});

export const closeCreateProjectModal = () => ({
  type: CLOSE_CREATE_PROJECT_MODAL,
});
