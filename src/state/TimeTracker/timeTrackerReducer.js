import {
  LOAD_CURRENT_TIME_ENTRY,
  START_TRACKING,
  STOP_TRACKING,
  CHANGE_DESCRIPTION,
  CHANGE_PROJECT,
} from './timeTrackerActionTypes';

const initialState = {
  currentProject: undefined,
  taskDescription: '',
  isTracking: false,
  startDate: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_TIME_ENTRY: {
      if (action.payload) {
        const { project, description, startDate } = action.payload;
        return {
          ...state,
          isTracking: true,
          currentProject: project.id,
          taskDescription: description,
          startDate: new Date(startDate),
        };
      }
      return {
        ...state,
        isTracking: false,
        startDate: null,
      };
    }

    case START_TRACKING: {
      return {
        ...state,
        isTracking: true,
      };
    }
    case STOP_TRACKING: {
      return {
        ...state,
        isTracking: false,
        taskDescription: '',
        startDate: null,
      };
    }

    case CHANGE_PROJECT: {
      return {
        ...state,
        currentProject: parseInt(action.payload, 10),
      };
    }

    case CHANGE_DESCRIPTION: {
      return {
        ...state,
        taskDescription: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
