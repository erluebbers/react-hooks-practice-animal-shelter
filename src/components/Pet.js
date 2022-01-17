import React from "react";

function Pet( {pet, onAdoptPet} ) {
  const { age, gender, id, isAdopted, name, type, weight } = pet

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "male" ? "♂" :"♀" } 
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button 
          onClick={onAdoptPet} 
          className={isAdopted ? "ui disabled button" : "ui primary button"}>
            Already adopted
        </button>
        <button 
          onClick={onAdoptPet}
          className={isAdopted ? "ui primary button" : "ui disabled button" }>
            Adopt pet
        </button>
      </div>
    </div>
  );
}

export default Pet;
