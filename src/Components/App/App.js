import React, { Component } from "react";
import "./App.css";

import Welcome from "../Welcome/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
