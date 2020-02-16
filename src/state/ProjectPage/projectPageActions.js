import projectPageApi from './projectPageApi';
import { LOAD_PROJECT } from './projectPageActionTypes';
import { LOAD_TIME_ENTRIES } from '../TimeEntriesList/timeEntriesActionTypes';
import { DEFAULT_PAGE_SIZE } from '../../constants/pagination';

export const loadProject = (projectId) => (dispatch) =>
  projectPageApi.getProject(projectId).then((response) => {
    dispatch({
      type: LOAD_PROJECT,
      payload: response.data,
    });
  });

export const loadTimeEntries = (projectId, page) => (dispatch) =>
  projectPageApi
    .getTimeEntries(projectId, page - 1, DEFAULT_PAGE_SIZE)
    .then((response) => {
      dispatch({
        type: LOAD_TIME_ENTRIES,
        payload: response.data,
      });
    });
