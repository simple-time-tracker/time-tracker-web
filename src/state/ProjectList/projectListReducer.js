import { LOAD_PROJECTS } from './projectListActionTypes';

const initialState = { projects: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS: {
      return { ...state, projects: [...action.payload] };
    }
    default:
      return state;
  }
};

export default reducer;
