import React from "react";
import GroceryItem from "./GroceryItem.jsx";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gList: [],
      GroceryItem: "",
    };
  }

  componentDidMount() {}

  addItem() {}

  updateItem(event) {
    console.log(event.target.value);
    event.preventDefault();
    this.setState({
      listItem: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input placeholder="Add Item" />
        <button>Submit</button>
        <ul>
          <GroceryItem />
        </ul>
      </div>
    );
  }
}
