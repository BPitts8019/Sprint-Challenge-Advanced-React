import React from "react"
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlayerList from "../components/PlayerList";

test("PlayerList component is rendered will all player cards", () => {
   const list = [
      { name: "Alex Morgan", country: "United States", searches: 100 },
      { name: "Megan Rapinoe", country: "United States", searches: 99 },
      { name: "Marta", country: "Brazil", searches: 18 },
   ];
   const playerList = rtl.render(<PlayerList players={list}/>);
   const numCards = playerList.queryAllByTestId("player-card").length;
   expect(numCards).toBe(list.length);
});