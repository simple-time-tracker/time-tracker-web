import axios from 'axios';
import { DEFAULT_PAGE_SIZE } from '../../constants/pagination';

const API_URL = '/api';
const PROJECTS_PATH = 'projects';

export default {
  getProjectsWithSummaries: (page) =>
    axios.get(`${API_URL}/${PROJECTS_PATH}/summaries`, {
      params: {
        page: page - 1,
        pageSize: DEFAULT_PAGE_SIZE,
      },
    }),
};
