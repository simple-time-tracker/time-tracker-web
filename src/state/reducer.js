import { combineReducers } from 'redux';
import projectSelector from './ProjectsSelector/projectSelectorReducer';
import timeEntries from './TimeEntriesList/timeEntriesReducer';
import tracker from './TimeTracker/timeTrackerReducer';
import createProject from './NewProjectModal/newProjectModalReducer';

const reducer = combineReducers({
  timeEntries,
  tracker,
  projectSelector,
  createProject,
});
export default reducer;
