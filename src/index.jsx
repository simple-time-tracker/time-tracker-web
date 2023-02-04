import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import styles from 'bulma';
// eslint-disable-next-line no-unused-vars
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line no-unused-vars
import stylesTooltip from 'bulma-tooltip';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify/esm/react-toastify';
import { AuthProvider } from 'react-oidc-context';
import TimeTrackerApp from './TimeTrackerApp';
import store from './state/store';

const {
  VITE_TIME_TRACKER_AUTH_URL,
  VITE_TIME_TRACKER_AUTH_CLIENT_ID,
  VITE_TIME_TRACKER_AUTH_REDIRECT_URL,
} = import.meta.env;

const oidcConfig = {
  authority: VITE_TIME_TRACKER_AUTH_URL,
  client_id: VITE_TIME_TRACKER_AUTH_CLIENT_ID,
  redirect_uri: VITE_TIME_TRACKER_AUTH_REDIRECT_URL,
};

const AppRoot = document.getElementById('app');

ReactDOM.createRoot(AppRoot).render(
  <AuthProvider {...oidcConfig}>
    <Provider store={store}>
      <ToastContainer autoClose={3000} draggable={false} position={'top-center'} />
      <TimeTrackerApp />
    </Provider>
  </AuthProvider>
);
