import axios from 'axios';

const API_URL = '/api';
const TIME_ENTRIES_PATH = 'entries';

export const getTimeEntries = (page, pageSize) =>
  axios.get(`${API_URL}/${TIME_ENTRIES_PATH}`, {
    params: { page, pageSize },
  });

export const deleteTimeEntry = (id) =>
  axios.delete(`${API_URL}/${TIME_ENTRIES_PATH}/${id}`);
