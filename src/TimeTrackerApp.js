import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TimeTrackerPage from './page/TimeTrackerPage';
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './page/NotFoundPage';

const TimeTrackerApp = () => (
  <Router>
    <Navbar />
    <section className="section main-section">
      <Switch>
        <Route exact path="/">
          <TimeTrackerPage />
        </Route>
        <Route path="/projects">
          <h1 className="title">Projects</h1>
        </Route>
        <Route to="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </section>
  </Router>
);

export default TimeTrackerApp;
