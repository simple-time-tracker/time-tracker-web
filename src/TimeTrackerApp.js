import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useAuth } from 'react-oidc-context';
import axios from 'axios';
import TimeTrackerPage from './page/TimeTrackerPage';
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './page/NotFoundPage';
import ProjectListPage from './page/ProjectsListPage';
import ProjectPage from './page/ProjectPage';
import tokenStorageApi from './utils/auth/authTokenApi';
import LoginCallbackPage from './page/Auth/LoginCallbackPage';
import LogoutPage from './page/Auth/LogoutPage';

const TimeTrackerApp = () => {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case 'signinSilent':
      console.log('silent');
      return <div>Signing you in...</div>;
    case 'signoutRedirect':
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error}</div>;
  }

  if (auth.isAuthenticated) {
    tokenStorageApi.setToken(auth.user.id_token);
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${tokenStorageApi.getToken()}`;

      return config;
    });

    return (
      <Router>
        <Navbar />
        <section className="section main-section">
          <Routes>
            <Route path="/" element={<TimeTrackerPage />} />
            <Route path="/login-callback" element={<LoginCallbackPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/projects/:id/" element={<ProjectPage />} />
            <Route path="/projects" element={<ProjectListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </section>
      </Router>
    );
  }

  return <button onClick={auth.signinRedirect}>Log in</button>;
};

export default TimeTrackerApp;
