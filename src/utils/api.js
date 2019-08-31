import axios from "axios";

const API_URL = "/api";
const PROJECTS_PATH = "projects";
const TIME_ENTRIES_PATH = "entries";

export const getProjects = () =>
  axios.get(`${API_URL}/${PROJECTS_PATH}/active`);

export const getActiveTimeEntry = () =>
  axios.get(`${API_URL}/${TIME_ENTRIES_PATH}/current`);

export const getTimeEntries = () =>
  axios.get(`${API_URL}/${TIME_ENTRIES_PATH}`);

export const startTracking = (id, description) => {
  return axios.post(`${API_URL}/${TIME_ENTRIES_PATH}/start/${id}`, {
    taskDescription: description
  });
};

export const stopTracking = () =>
  axios.post(`${API_URL}/${TIME_ENTRIES_PATH}/stop`);

export const createNewProject = projectName =>
  axios.post(`${API_URL}/${PROJECTS_PATH}`, { name: projectName });
