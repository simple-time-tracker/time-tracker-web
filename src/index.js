import React from "react";
import ReactDOM from "react-dom";

class TimeTracker extends React.Component {
  render() { return <div>
    Time tracker app
    </div>
  }
}

let AppRoot = document.getElementById("app");

ReactDOM.render(<TimeTracker/>, AppRoot);

