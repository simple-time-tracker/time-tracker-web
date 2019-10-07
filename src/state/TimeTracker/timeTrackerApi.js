import axios from "axios";

const API_URL = "/api";
const TIME_ENTRIES_PATH = "entries";

export const getActiveTimeEntry = () =>
  axios.get(`${API_URL}/${TIME_ENTRIES_PATH}/current`);

export const startTracking = (id, description) => {
  return axios.post(`${API_URL}/${TIME_ENTRIES_PATH}/start/${id}`, {
    taskDescription: description
  });
};

export const stopTracking = () =>
  axios.post(`${API_URL}/${TIME_ENTRIES_PATH}/stop`);
