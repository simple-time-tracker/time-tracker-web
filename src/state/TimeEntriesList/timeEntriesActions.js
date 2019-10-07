import { LOAD_TIME_ENTRIES } from "./timeEntriesActionTypes";
import { getTimeEntries, deleteTimeEntry } from "./timeEntriesApi";

export const deleteEntry = id => {
  return dispatch => {
    deleteTimeEntry(id).then(() => {
      loadTimeEntries()(dispatch);
    });
  };
};

export const loadTimeEntries = () => {
  return dispatch => {
    getTimeEntries().then(response => {
      dispatch({
        type: LOAD_TIME_ENTRIES,
        payload: response.data
      });
    });
  };
};
