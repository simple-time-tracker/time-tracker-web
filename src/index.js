import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import styles from 'bulma';
// eslint-disable-next-line no-unused-vars
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line no-unused-vars
import stylesTooltip from 'bulma-tooltip';
import '@babel/polyfill';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify/esm/react-toastify';
import { AuthProvider } from 'react-oidc-context';
import TimeTrackerApp from './TimeTrackerApp';
import store from './state/store';
import { IDENTITY_CONFIG } from './utils/auth/authConstants';

const oidcConfig = {
  authority: IDENTITY_CONFIG.authority,
  client_id: IDENTITY_CONFIG.client_id,
  redirect_uri: IDENTITY_CONFIG.redirect_uri,
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
