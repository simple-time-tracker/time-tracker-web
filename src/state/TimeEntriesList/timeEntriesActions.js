import {
  LOAD_TIME_ENTRIES,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
} from './timeEntriesActionTypes';
import { getTimeEntries, deleteTimeEntry } from './timeEntriesApi';
import { DEFAULT_PAGE_SIZE } from '../../constants/pagination';
import PagingUtils from '../../utils/paging/paging';

export const deleteEntry = (id) => (dispatch, getState) => {
  deleteTimeEntry(id).then(() => {
    const { timeEntriesList } = getState();
    const { items, currentPage } = timeEntriesList;
    dispatch({ type: CLOSE_DELETE_MODAL });
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

export const openDeleteModal = (item) => ({
  type: OPEN_DELETE_MODAL,
  payload: item,
});

export const closeModal = () => ({ type: CLOSE_DELETE_MODAL });
