import React, { Component } from "react";
import "./App.css";

import Welcome from "../Welcome/Welcome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      showWelcome: false
    };
  }
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ showWelcome: true });
  };

  // componentDidUpdate() {
  //   console.log(this.state);
  // }
  render() {
    return (
      <div className="App">
        <div className="formDiv">
          <form className={"basicForm"} onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button className="formButton" type="submit" value="Submit">
              Submit
            </button>
          </form>{" "}
        </div>
        {this.state.showWelcome ? (
          <div>
            <Welcome name={this.state.name} />
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default App;
