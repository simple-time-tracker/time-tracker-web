import { differenceInSeconds } from 'date-fns';
import {
  LOAD_CURRENT_TIME_ENTRY,
  START_TRACKING,
  STOP_TRACKING,
  CHANGE_DESCRIPTION,
  CHANGE_PROJECT,
  INCREMENT_TIMER,
} from './timeTrackerActionTypes';

const initialState = {
  currentProject: undefined,
  taskDescription: '',
  isTracking: false,
  startDate: null,
  secondsElapsed: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_TIME_ENTRY: {
      if (action.payload) {
        const { project, description, startDate: startDateString } = action.payload;
        const startDate = new Date(startDateString);
        return {
          ...state,
          isTracking: true,
          currentProject: project.id,
          taskDescription: description,
          startDate,
          secondsElapsed: differenceInSeconds(new Date(), startDate),
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
        startDate: new Date(),
      };
    }

    case STOP_TRACKING: {
      return {
        ...state,
        isTracking: false,
        taskDescription: '',
        startDate: null,
        secondsElapsed: 0,
      };
    }

    case INCREMENT_TIMER: {
      return {
        ...state,
        secondsElapsed: differenceInSeconds(new Date(), state.startDate),
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
