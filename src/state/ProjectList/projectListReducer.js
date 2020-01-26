import { LOAD_PROJECTS } from './projectListActionTypes';

const initialState = { projects: [], totalPages: 1, currentPage: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS: {
      return {
        ...state,
        projects: [...action.payload.content],
        currentPage: action.payload.number + 1,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
      };
    }
    default:
      return state;
  }
};

export default reducer;
