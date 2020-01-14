import {
  OPEN_CREATE_PROJECT_MODAL,
  CLOSE_CREATE_PROJECT_MODAL,
  SET_CREATE_PROJECT_MODAL_ERROR,
  CLEAR_ADD_PROJECT_MODAL_ERROR,
} from './newProjectModalActionTypes';

const initialState = {
  isModalOpen: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CREATE_PROJECT_MODAL: {
      return {
        ...state,
        isModalOpen: true,
      };
    }

    case CLOSE_CREATE_PROJECT_MODAL: {
      return {
        ...state,
        isModalOpen: false,
      };
    }

    case SET_CREATE_PROJECT_MODAL_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case CLEAR_ADD_PROJECT_MODAL_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};

export default reducer;
