import React, { Component } from "react";
import "./App.css";

import ShoppingList from "../ShoppingList/ShoppingList";

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
      : this.setState({ error: "", name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.error === "" && this.state.name !== "") {
      this.setState({ showWelcome: true });
    } else if (this.state.name === "" && this.state.error === "") {
      this.setState({ error: "Whoops, you didn't give a name" });
    }
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
          {/* If error display the error message! */}
          {this.state.error ? (
            <div className="errorDiv">
              <p>{this.state.error}</p>
            </div>
          ) : (
            undefined
          )}
        </div>
        {/* If valid name display welcome! */}
        {this.state.showWelcome ? (
          <div>
            <Welcome name={this.state.name} />
            <ShoppingList updateHomeState={this.updateHomeState} />
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default App;
