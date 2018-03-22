import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { noErrorsAllowed } from "../../utils/test-utils";
import sinon from "sinon";

import Welcome from "./Welcome";

describe("WELCOME TESTS WITH valid DATA...", () => {
  noErrorsAllowed();
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Welcome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the name provided", () => {
    const wrapper = shallow(<Welcome name="Gavin" />);
    expect(wrapper.find("h2").text()).toEqual("Welcome Gavin!");
  });

  it('renders "Whoops" when no name is provided', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find("h2").text()).toEqual("Welcome Whoops!");
  });
  it("renders should error when provided with a numbers", () => {
    expect(() => shallow(<Welcome name={8} />).toThrow());
  });
});
describe("WELCOME TESTS WITH bad DATA...", () => {});
