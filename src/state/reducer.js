import { LOAD_PROJECTS, LOAD_TIME_ENTRIES } from "./actionTypes";

const initialState = {
  timeEntries: [],
  projects: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TIME_ENTRIES: {
      return {
        timeEntries: [...action.payload.content]
      };
    }
    default:
      return state;
  }
};

export default reducer;
