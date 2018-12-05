import React from "react";
import ReactDOM from "react-dom";
// alternative to import render from 'react-dom';
// import { render } from "react-dom";

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed)
    ])
  ]);
};

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
