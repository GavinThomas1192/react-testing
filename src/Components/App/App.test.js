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

  it("Renders both inputs for name and submit ", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("Renders submit input on form ", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".formButton")).toHaveLength(1);
  });

  it("Renders Welcome component when user clicks submit", () => {
    const wrapper = shallow(<Welcome name="Gavin" />);
  });
});
