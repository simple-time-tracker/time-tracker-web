import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TimeTrackerPage from './page/TimeTrackerPage';
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './page/NotFoundPage';
import PrivateRoute from './components/Auth/PrivateRoute';
import LoginCallbackPage from './page/Auth/LoginCallbackPage';
import LogoutPage from './page/Auth/LogoutPage';
import LogoutCallbackPage from './page/Auth/LogoutCallbackPage';
import SilentRenewPage from './page/Auth/SilentRenewCallbackPage';
import LoginRedirectPage from './page/Auth/LoginRedirectPage';

const TimeTrackerApp = () => (
  <Router>
    <Navbar />
    <section className="section main-section">
      <Switch>
        <Route exact={true} path="/login" component={LoginRedirectPage} />
        <Route exact={true} path="/login-oidc" component={LoginCallbackPage} />
        <Route exact={true} path="/logout" component={LogoutPage} />
        <Route exact={true} path="/logout-callback" component={LogoutCallbackPage} />
        <Route exact={true} path="/silent-renew" component={SilentRenewPage} />
        <PrivateRoute exact path="/" component={TimeTrackerPage} />
        <Route path="/projects" />
        <Route to="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </section>
  </Router>
);

export default TimeTrackerApp;
