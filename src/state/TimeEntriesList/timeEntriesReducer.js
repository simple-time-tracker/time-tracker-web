import {
  LOAD_TIME_ENTRIES,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
} from './timeEntriesActionTypes';

const initialState = {
  items: [],
  totalPages: 1,
  currentPage: 0,
  deleteModal: { isOpen: false, itemToDelete: { id: undefined } },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TIME_ENTRIES: {
      return {
        ...state,
        currentPage: action.payload.number + 1,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
        items: action.payload.content,
      };
    }

    case OPEN_DELETE_MODAL: {
      return {
        ...state,
        deleteModal: {
          isOpen: true,
          itemToDelete: action.payload,
        },
      };
    }

    case CLOSE_DELETE_MODAL:
      return {
        ...state,
        deleteModal: {
          isOpen: false,
          itemToDelete: { id: undefined },
        },
      };

    default:
      return state;
  }
};

export default reducer;
