import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { noErrorsAllowed } from "../../utils/test-utils";
import sinon from "sinon";

import ShoppingList from "./ShoppingList";
describe("SHOPPINGLIST TESTS WITH valid DATA...", () => {
  noErrorsAllowed();
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShoppingList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the groceryList array", () => {
    const wrapper = shallow(<ShoppingList />);
    const groceryListArrayLength = wrapper.state("groceryList").length;

    expect(wrapper.find("ul").children()).toHaveLength(groceryListArrayLength);
    expect(JSON.stringify(wrapper.find("ul").props().children[0])).toEqual(
      JSON.stringify(<li key={0}>eggs</li>)
    );
  });
});
describe("WELCOME TESTS WITH bad DATA...", () => {
  it("Should NOT render any list if the groceryList array is empty", () => {
    const wrapper = shallow(<ShoppingList />);
    wrapper.setState({ groceryList: [] });
    expect(wrapper.find("ul").children()).toHaveLength(0);
    expect(wrapper.find("p").props().children).toBe(
      "Whoops, your grocery list is empty!"
    );
  });
});
