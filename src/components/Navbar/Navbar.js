import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="main-navbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="main-navbar" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          Time tracker
        </Link>

        <Link to="/projects" className="navbar-item">
          Projects
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
