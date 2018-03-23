import React from "react";

export default class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryList: ["eggs"]
    };
  }

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
