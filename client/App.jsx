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
    this.updateItem = this.updateItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    axios.get('/groceries')
        .then((results) => {
          this.setState({
            gList: results.data
          })
        })
  }

  addItem() {
    axios.post('/groceries', { item: this.state.GroceryItem })
      .then(() => {
        axios.get('/groceries')
        .then((results) => {
          this.setState({
            gList: results.data
          })
        })
      });
  }

  updateItem(event) {
    event.preventDefault();
    this.setState({
      GroceryItem: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input placeholder="Add Item" onChange={this.updateItem} />
        <button onClick={this.addItem} >Submit</button>
        <ul>
          <GroceryItem stuff={this.state.gList} />
        </ul>
      </div>
    );
  }
}
