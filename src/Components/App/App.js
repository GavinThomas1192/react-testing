import React, { Component } from "react";
import "./App.css";

import Welcome from "../Welcome/Welcome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      showWelcome: false,
      error: ""
    };
  }
  handleChange = e => {
    !/^[a-zA-Z]+$/.test(e.target.value)
      ? this.setState({ error: "Whoops, letters only please" })
      : this.setState({ error: "" });
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    !this.state.error ? this.setState({ showWelcome: true }) : undefined;
  };

  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <div className="formDiv">
          <form className={"basicForm"} onSubmit={this.handleSubmit}>
            <label className={this.state.error ? "inputError" : "input"}>
              Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button className="formButton" type="submit" value="Submit">
              Submit
            </button>
          </form>{" "}
          <div>
            {this.state.error ? (
              <p>Whoops your name can only have letters!</p>
            ) : (
              undefined
            )}
          </div>
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
