import {
  CHANGE_PROJECT,
  LOAD_PROJECTS,
  LOAD_TIME_ENTRIES,
  LOAD_CURRENT_TIME_ENTRY,
  START_TRACKING,
  STOP_TRACKING,
  CHANGE_DESCRIPTION,
  OPEN_CREATE_PROJECT_MODAL,
  CLOSE_CREATE_PROJECT_MODAL
} from "./actionTypes";

const initialState = {
  timeEntries: [],
  projects: [],
  tracker: {
    currentProject: "",
    taskDescription: "",
    isTracking: false
  },
  createProject: {
    isModalOpen: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROJECT: {
      return {
        ...state,
        tracker: { ...state.tracker, currentProject: action.payload }
      };
    }
    case CHANGE_DESCRIPTION: {
      return {
        ...state,
        tracker: { ...state.tracker, taskDescription: action.payload }
      };
    }
    case LOAD_PROJECTS: {
      return {
        ...state,
        projects: action.payload,
        tracker: {
          ...state.tracker,
          currentProject: action.payload[0].id
        }
      };
    }
    case LOAD_CURRENT_TIME_ENTRY: {
      if (action.payload) {
        return {
          ...state,
          tracker: {
            ...state.tracker,
            isTracking: true,
            currentProject: action.payload.project.id,
            taskDescription: action.payload.description
          }
        };
      }
      return {
        ...state,
        tracker: {
          ...state.tracker,
          isTracking: false
        }
      };
    }
    case LOAD_TIME_ENTRIES: {
      return { ...state, timeEntries: [...action.payload.content] };
    }
    case START_TRACKING: {
      return {
        ...state,
        tracker: {
          ...state.tracker,
          isTracking: true
        }
      };
    }
    case STOP_TRACKING: {
      return {
        ...state,
        tracker: {
          ...state.tracker,
          isTracking: false,
          taskDescription: ""
        }
      };
    }
    case OPEN_CREATE_PROJECT_MODAL: {
      return {
        ...state,
        createProject: {
          ...state.tracker,
          isModalOpen: true
        }
      };
    }

    case CLOSE_CREATE_PROJECT_MODAL: {
      return {
        ...state,
        createProject: {
          ...state.tracker,
          isModalOpen: false
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
