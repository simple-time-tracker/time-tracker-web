import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import styles from 'bulma';
import { Provider } from 'react-redux';
import TimeTrackerApp from './TimeTrackerApp';
import store from './state/store';

const AppRoot = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <TimeTrackerApp />
  </Provider>,
  AppRoot
);
