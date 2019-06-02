import React, { Component } from "react";
import ProjectSelector from "./ProjectSelector";
import PropTypes from "prop-types";

class TimeTrackerPanel extends Component {
  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-one-fifths is-full-mobile">
          <ProjectSelector projects={this.props.projects} />
        </div>

        <div className="column is-three-fifths is-full-mobile ">
          <input
            className="input is-normal"
            type="text"
            placeholder="
            What are you working on?"
          />
        </div>

        <div className="column is-one-fifth is-full-mobile">
          <a className="button is-danger is-fullwidth">Start tracking</a>
        </div>
      </div>
    );
  }
}

ProjectSelector.propTypes = {
  projects: PropTypes.array
};

export default TimeTrackerPanel;
