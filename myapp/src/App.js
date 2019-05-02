import React, { Component } from "react";
import Ninjas from "./Ninjas";

function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <p>Hello World !</p>
      <Ninjas name="Roma" age="35" belt="green" />

      <Ninjas name="Kamal" age="45" belt="brown" />

      <Ninjas name="Sunil" age="50" belt="orange" />
    </div>
  );
}

export default App;
