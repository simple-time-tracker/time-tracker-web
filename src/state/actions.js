import { LOAD_PROJECTS, LOAD_TIME_ENTRIES } from "./actionTypes";
import { getProjects, getTimeEntries } from "../utils/api";

export const loadProjects = () => {
  return dispatch => {
    getProjects().then(response => {
      dispatch({
        type: LOAD_PROJECTS,
        payload: response.data
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
