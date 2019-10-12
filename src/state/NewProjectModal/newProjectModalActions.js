import {
  SET_ADD_PROJECT_MODAL_ERROR,
  CLEAR_ADD_PROJECT_MODAL_ERROR,
  OPEN_CREATE_PROJECT_MODAL,
  CLOSE_CREATE_PROJECT_MODAL,
} from './newProjectModalActionTypes';

export const setAddProjectModalError = (errorCode) => {
  return {
    type: SET_ADD_PROJECT_MODAL_ERROR,
    payload: errorCode,
  };
};

export const clearAddProjectModalError = () => {
  return {
    type: CLEAR_ADD_PROJECT_MODAL_ERROR,
  };
};

export const openCreateProjectModal = () => {
  return {
    type: OPEN_CREATE_PROJECT_MODAL,
  };
};

export const closeCreateProjectModal = () => {
  return {
    type: CLOSE_CREATE_PROJECT_MODAL,
  };
};
