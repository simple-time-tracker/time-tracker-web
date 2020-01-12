import { combineReducers } from 'redux';
import projectSelector from './ProjectsSelector/projectSelectorReducer';
import projectList from './ProjectList/projectListReducer';
import timeEntries from './TimeEntriesList/timeEntriesReducer';
import tracker from './TimeTracker/timeTrackerReducer';
import createProject from './NewProjectModal/newProjectModalReducer';

const reducer = combineReducers({
  timeEntries,
  tracker,
  projectSelector,
  projectList,
  createProject,
});
export default reducer;
