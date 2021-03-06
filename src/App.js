import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  // componentDidMount get called once
  // after render()
  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "San Francisco, CA" })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        // same as pets: pets

        this.setState({ pets });
      });
  }
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
        <div>
          {this.state.pets.map(pet => {
            let breed;

            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(", ");
            } else {
              breed = pet.breeds.breed;
            }
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={breed}
                media={pet.media}
                location={`${pet.contact.city}, ${pet.contact.state}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
// alternative to import render from 'react-dom';
// render(<App />, document.getElementById("root"));
