import React, { Component } from "react";
import App from "./App/App";
class Entry extends Component {
  render() {
    const error = console.error;
    console.error = function(warning, ...args) {
      if (/(Invalid prop|Failed prop type)/.test(warning)) {
        throw new Error(warning);
      }
      error.apply(console, [warning, ...args]);
    };
    return (
      <div className="App">
        <App />
      </div>
    );
  }
}

export default Entry;
