import {
  CHANGE_PROJECT,
  LOAD_PROJECTS,
  LOAD_TIME_ENTRIES,
  LOAD_CURRENT_TIME_ENTRY,
  START_TRACKING,
  STOP_TRACKING,
  CHANGE_DESCRIPTION,
  OPEN_CREATE_PROJECT_MODAL,
  CLOSE_CREATE_PROJECT_MODAL,
  SET_ADD_PROJECT_MODAL_ERROR,
  CLEAR_ADD_PROJECT_MODAL_ERROR
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
    isModalOpen: false,
    error: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROJECT: {
      return {
        ...state,
        tracker: { ...state.tracker, currentProject: action.payload },
        createProject: {
          ...state.createProject,
          isModalOpen: false,
          error: null
        }
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
          currentProject: state.tracker.currentProject === undefined ? action.payload[0].id : state.tracker.currentProject
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
          ...state.createProject,
          isModalOpen: true
        }
      };
    }

    case CLOSE_CREATE_PROJECT_MODAL: {
      return {
        ...state,
        createProject: {
          ...state.createProject,
          isModalOpen: false
        }
      };
    }

    case SET_ADD_PROJECT_MODAL_ERROR: {
      return {
        ...state,
        createProject: {
          ...state.createProject,
          error: action.payload
        }
      };
    }

    case CLEAR_ADD_PROJECT_MODAL_ERROR: {
      return {
        ...state,
        createProject: {
          ...state.createProject,
          error: null
        }
      };
    }

    default:
      return state;
  }
};

export default reducer;
