import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";

import App from "./App";

describe("APP TESTS ...", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders a form...", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".basicForm")).toHaveLength(1);
  });

  it("Renders inputs for name ", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it("Renders button for submit ", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".formButton")).toHaveLength(1);
  });

  it("Does not render <Welcome /> until user inputs their name", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Welcome")).toHaveLength(0);
  });

  it("Does render <Welcome /> after user inputs their name", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Welcome")).toHaveLength(0);

    // const fakeEvent = { preventDefault: () => console.log("preventDefault") };

    wrapper.find("button").simulate("submit");
    expect(wrapper.find("Welcome")).toHaveLength(1);
  });
});
