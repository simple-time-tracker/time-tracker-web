import { LOAD_TIME_ENTRIES } from './timeEntriesActionTypes';

const initialState = { items: [], totalPages: 1, currentPage: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TIME_ENTRIES: {
      return {
        ...state,
        currentPage: action.payload.number,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
        pageSize: action.payload.size,
        items: action.payload.content,
      };
    }

    default:
      return state;
  }
};

export default reducer;
