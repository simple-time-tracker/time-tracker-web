import { LOAD_TIME_ENTRIES } from './timeEntriesActionTypes';
import { getTimeEntries, deleteTimeEntry } from './timeEntriesApi';
import { DEFAULT_PAGE_SIZE } from '../../constants/pagination';

export const deleteEntry = (id) => (dispatch, getState) => {
  deleteTimeEntry(id).then(() => {
    const { timeEntriesList } = getState();
    loadTimeEntries(timeEntriesList.currentPage)(dispatch);
  });
};

export const loadTimeEntries = (page) => (dispatch) => {
  getTimeEntries(page - 1, DEFAULT_PAGE_SIZE).then((response) => {
    dispatch({
      type: LOAD_TIME_ENTRIES,
      payload: response.data,
    });
  });
};
