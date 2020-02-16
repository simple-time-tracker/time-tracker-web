import { LOAD_PROJECTS, CHANGE_FILTER } from './projectListActionTypes';
import ProjectStatus from './ProjectStatus';

const initialState = {
  projects: [],
  totalPages: 1,
  currentPage: 0,
  statusFilter: ProjectStatus.ACTIVE,
};

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
    case CHANGE_FILTER: {
      return { ...state, statusFilter: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
