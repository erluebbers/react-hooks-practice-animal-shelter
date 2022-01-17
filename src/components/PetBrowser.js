import React from "react";
import Pet from "./Pet";

function PetBrowser( {pets, onAdoptPet} ) {
  const displayPets = pets.map(pet => {
    return <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet}/>
  })


  return <div className="ui cards">{displayPets}</div>;
}

export default PetBrowser;
