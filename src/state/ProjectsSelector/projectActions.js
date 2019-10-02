import { CHANGE_PROJECT, LOAD_PROJECTS } from "./projectActionTypes";
import { getProjects, createNewProject } from "./projectApi";
import {
  setAddProjectModalError,
  closeCreateProjectModal,
  clearAddProjectModalError
} from "../NewProjectModal/newProjectModalActions";
import { DUPLICATE_PROJECT_NAME_ERROR } from "../errors";

export const loadProjects = () => {
  return dispatch => {
    return getProjects().then(response => {
      return dispatch({
        type: LOAD_PROJECTS,
        payload:
          response.data.length > 0
            ? response.data
            : [{ id: undefined, name: "No projects" }]
      });
    });
  };
};

export const createProject = name => {
  return dispatch => {
    createNewProject(name)
      .then(response => {
        loadProjects()(dispatch).then(() =>
          dispatch(changeProject(response.data.id))
        );
      })
      .catch(error => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.status === 409
        ) {
          dispatch(setAddProjectModalError(DUPLICATE_PROJECT_NAME_ERROR.code));
          return;
        }
        dispatch(setAddProjectModalError("OTHER"));
      });
  };
};

export const changeProject = projectId => {
  return dispatch => {
    dispatch({
      type: CHANGE_PROJECT,
      payload: projectId
    });
    closeCreateProjectModal();
    clearAddProjectModalError();
  };
};
