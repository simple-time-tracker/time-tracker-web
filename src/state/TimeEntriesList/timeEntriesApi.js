import axios from 'axios';

const API_URL = '/api';
const TIME_ENTRIES_PATH = 'entries';

export const getTimeEntries = () => axios.get(`${API_URL}/${TIME_ENTRIES_PATH}`);

export const deleteTimeEntry = (id) =>
  axios.delete(`${API_URL}/${TIME_ENTRIES_PATH}/${id}`);
