import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";
// test
class App extends React.Component {
  render() {
    // return React.createElement("div", {}, [
    //   React.createElement("h1", {}, "Adopt me!"),
    //   React.createElement(Pet, {
    //     name: "Luna",
    //     animal: "Dog",
    //     breed: "havanese"
    //   })
    // ]);

    return (
      <div>
        <h1>Adopt me!</h1>
        <Pet name="luna" animal="dog" breed="havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
// alternative to import render from 'react-dom';
// render(<App />, document.getElementById("root"));
