import { LOAD_TIME_ENTRIES } from './timeEntriesActionTypes';
import { getTimeEntries, deleteTimeEntry } from './timeEntriesApi';

const MAX_PAGE_SIZE = 15;

export const deleteEntry = (id) => (dispatch) => {
  deleteTimeEntry(id).then(() => {
    loadTimeEntries()(dispatch);
  });
};

export const loadTimeEntries = (page) => (dispatch) => {
  getTimeEntries(page, MAX_PAGE_SIZE).then((response) => {
    dispatch({
      type: LOAD_TIME_ENTRIES,
      payload: response.data,
    });
  });
};
