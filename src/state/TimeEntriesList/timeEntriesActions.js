import { LOAD_TIME_ENTRIES } from './timeEntriesActionTypes';
import { getTimeEntries, deleteTimeEntry } from './timeEntriesApi';
import { DEFAULT_PAGE_SIZE } from '../../constants/pagination';
import PagingUtils from '../../utils/paging/paging';

export const deleteEntry = (id) => (dispatch, getState) => {
  deleteTimeEntry(id).then(() => {
    const { timeEntriesList } = getState();
    const { items, currentPage } = timeEntriesList;
    loadTimeEntries(PagingUtils.resolvePageNumber(items, currentPage))(dispatch);
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
