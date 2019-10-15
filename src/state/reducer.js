import { combineReducers } from 'redux';
import projects from './ProjectsSelector/projectSelectorReducer';
import timeEntries from './TimeEntriesList/timeEntriesReducer';
import tracker from './TimeTracker/timeTrackerReducer';
import createProject from './NewProjectModal/newProjectModalReducer';

const reducer = combineReducers({
  timeEntries,
  tracker,
  projects,
  createProject,
});
export default reducer;
