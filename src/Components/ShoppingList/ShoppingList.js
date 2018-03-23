import React from "react";

export default class ShoppingList extends React.Component {
  state = {
    groceryList: ["eggs"]
  };

  render() {
    return (
      <div>
        <h3>You always need eggs... Is there anything else you need to add?</h3>
        {this.state.groceryList.length > 0 ? (
          <ul>
            {this.state.groceryList.map((ele, index) => {
              return <li key={index}>{ele}</li>;
            })}
          </ul>
        ) : (
          <p>Whoops, your grocery list is empty!</p>
        )}
      </div>
    );
  }
}
