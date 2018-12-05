import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "havanese"
      })
    ]);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
// alternative to import render from 'react-dom';
// render(<App />, document.getElementById("root"));
