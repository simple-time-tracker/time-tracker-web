import { LOAD_PROJECTS } from './projectSelectorActionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS: {
      return [...action.payload];
    }
    default:
      return state;
  }
};

export default reducer;
