import React from "react";
import Player from "./Player.js";

function PlayerList ({players}) {
   return (
      <div data-testid="player-list" className="player-list">
         {players.map((player, index) => <Player key={index} {...player} />)}
      </div>
   );
}

export default PlayerList;