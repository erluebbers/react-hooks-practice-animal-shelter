import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  function onChangeType(event) {
    setFilters(event.target.value)
  }

  function onFindPetsClick() {
    if (filters === "all") {
      fetch("http://localhost:3001/pets")
        .then(r => r.json())
        .then(data => setPets(data))
    }
    else {
      fetch(`http://localhost:3001/pets?type=${filters}`)
        .then(r => r.json())
        .then(data => setPets(data))
    }
  }

  function onAdoptPet(id) {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ isAdopted: true})
    })
    onFindPetsClick()
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
