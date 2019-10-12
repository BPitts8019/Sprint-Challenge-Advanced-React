import React from "react";

function Player({ name, country, searches }) {
   return (
      <div data-testid="player-card" className="card">
         <h3 className="name">{name}</h3>
         <p>{`Location: ${country}`}</p>
         <p>{`Searches: ${searches}`}</p>
      </div>
   );
}

export default Player;