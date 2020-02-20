import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import styles from 'bulma';
// eslint-disable-next-line no-unused-vars
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line no-unused-vars
import stylesTooltip from 'bulma-tooltip';
import '@babel/polyfill';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify/esm/react-toastify';
import TimeTrackerApp from './TimeTrackerApp';
import store from './state/store';
import { AuthProvider } from './utils/auth/authProvider';

const AppRoot = document.getElementById('app');

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <ToastContainer autoClose={3000} draggable={false} position={'top-center'} />
      <TimeTrackerApp />
    </Provider>
  </AuthProvider>,
  AppRoot
);
