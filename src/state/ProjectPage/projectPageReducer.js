import { LOAD_PROJECT } from './projectPageActionTypes';

const initialState = {
  id: undefined,
  name: '',
  isArchived: false,
  timeSpentInMillis: 0,
  dateCreated: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECT: {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        isArchived: action.payload.archived,
        dateCreated: action.payload.dateCreated,
        timeSpentInMillis: action.payload.timeSpentInMilliseconds,
      };
    }
    default:
      return state;
  }
};

export default reducer;
