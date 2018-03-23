import React from "react";

export default class ShoppingList extends React.Component {
  state = {
    groceryList: ["eggs", "milk"]
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.groceryList.map((ele, index) => {
            return <li key={index}>{ele}</li>;
          })}
        </ul>
      </div>
    );
  }
}
