import { LOAD_PROJECTS, LOAD_TIME_ENTRIES } from "./actionTypes";

const initialState = {
  timeEntries: [],
  projects: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS: {
      return { ...state, projects: [...action.payload] };
    }
    case LOAD_TIME_ENTRIES: {
      return { ...state, timeEntries: [...action.payload.content] };
    }
    default:
      return state;
  }
};

export default reducer;
