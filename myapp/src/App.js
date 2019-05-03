import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Romesh", age: 25, belt: "black", id: 1 },
      { name: "Sunil", age: 35, belt: "brown", id: 2 },
      { name: "Nimal", age: 55, belt: "green", id: 3 }
    ]
  };

  //creating a function to add new ninja to state
  addNinja = newNinja => {
    //console.log(newNinja);
    newNinja.id = Math.random();
    let ninjas = [...this.state.ninjas, newNinja];
    this.setState({ ninjas: ninjas });
  };

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Hello World !</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}
export default App;
