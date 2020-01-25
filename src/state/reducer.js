import { combineReducers } from 'redux';
import projectSelector from './ProjectsSelector/projectSelectorReducer';
import projectList from './ProjectList/projectListReducer';
import timeEntriesList from './TimeEntriesList/timeEntriesReducer';
import tracker from './TimeTracker/timeTrackerReducer';
import createProject from './NewProjectModal/newProjectModalReducer';

const reducer = combineReducers({
  timeEntriesList,
  tracker,
  projectSelector,
  projectList,
  createProject,
});
export default reducer;
