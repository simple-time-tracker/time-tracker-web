import axios from 'axios';
import { DEFAULT_PAGE_SIZE } from '../../constants/pagination';
import ProjectStatus from './ProjectStatus';

const API_URL = '/api';
const PROJECTS_PATH = 'projects';

export default {
  getProjectsWithSummaries: (page, status) =>
    axios.get(`${API_URL}/${PROJECTS_PATH}/summaries`, {
      params: {
        page: page - 1,
        pageSize: DEFAULT_PAGE_SIZE,
        isArchived: status === ProjectStatus.ARCHIVED,
      },
    }),
};
