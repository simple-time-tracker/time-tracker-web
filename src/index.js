import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import styles from 'bulma';
// eslint-disable-next-line no-unused-vars
import stylesTooltip from 'bulma-tooltip';
import '@babel/polyfill';
import { Provider } from 'react-redux';
import TimeTrackerApp from './TimeTrackerApp';
import store from './state/store';
import { AuthProvider } from './utils/auth/authProvider';

const AppRoot = document.getElementById('app');

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <TimeTrackerApp />
    </Provider>
  </AuthProvider>,
  AppRoot
);
