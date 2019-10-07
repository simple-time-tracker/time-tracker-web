import axios from "axios";

const API_URL = "/api";
const PROJECTS_PATH = "projects";

export const createNewProject = projectName =>
  axios.post(`${API_URL}/${PROJECTS_PATH}`, { name: projectName });

export const getProjects = () =>
  axios.get(`${API_URL}/${PROJECTS_PATH}/active`);
