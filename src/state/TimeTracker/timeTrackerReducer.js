import {
  LOAD_CURRENT_TIME_ENTRY,
  START_TRACKING,
  STOP_TRACKING,
  CHANGE_DESCRIPTION
} from "./timeTrackerActionTypes";
import { CHANGE_PROJECT } from "./timeTrackerActionTypes";

const initialState = {
  currentProject: undefined,
  taskDescription: "",
  isTracking: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_TIME_ENTRY: {
      if (action.payload) {
        return {
          ...state,
          isTracking: true,
          currentProject: action.payload.project.id,
          taskDescription: action.payload.description
        };
      }
      return {
        ...state,
        isTracking: false
      };
    }

    case START_TRACKING: {
      return {
        ...state,
        isTracking: true
      };
    }
    case STOP_TRACKING: {
      return {
        ...state,
        isTracking: false,
        taskDescription: ""
      };
    }

    case CHANGE_PROJECT: {
      return {
        ...state,
        currentProject: parseInt(action.payload, 10)
      };
    }

    case CHANGE_DESCRIPTION: {
      return {
        ...state,
        taskDescription: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
