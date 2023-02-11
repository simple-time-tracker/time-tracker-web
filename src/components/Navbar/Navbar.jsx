import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isHamburgerActive: false,
    };
  }

  onHamburgerClick = () => {
    this.setState({ isHamburgerActive: !this.state.isHamburgerActive });
  };

  getHamburgerActiveCss = () => (this.state.isHamburgerActive ? 'is-active' : '');

  render = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className={`navbar-burger burger ${this.getHamburgerActiveCss()}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="main-navbar"
          onClick={this.onHamburgerClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="main-navbar"
        className={`navbar-menu ${this.getHamburgerActiveCss()}`}
      >
        <div className="navbar-start">
          <Link to="/" data-testid="home-link" className="navbar-item">
            Time tracker
          </Link>

          <Link to="/projects" data-testid="projects-link" className="navbar-item">
            Projects
          </Link>
        </div>
        <div className="navbar-end">
          <Link to="/logout" data-testid="logout-link" className="navbar-item">
            Sign out
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
