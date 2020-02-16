import axios from 'axios';

const API_URL = '/api';
const PROJECTS_PATH = 'projects';

export default {
  getProject: (projectId) => axios.get(`${API_URL}/${PROJECTS_PATH}/${projectId}`),
  getTimeEntries: (projectId, page, pageSize) =>
    axios.get(`${API_URL}/${PROJECTS_PATH}/${projectId}/entries`, {
      params: { page, pageSize },
    }),
};
