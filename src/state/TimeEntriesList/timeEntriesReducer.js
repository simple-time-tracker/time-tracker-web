import { LOAD_TIME_ENTRIES } from './timeEntriesActionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TIME_ENTRIES: {
      return [...action.payload.content];
    }

    default:
      return state;
  }
};

export default reducer;
