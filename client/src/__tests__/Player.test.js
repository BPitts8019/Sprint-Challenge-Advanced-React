import React from "react"
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Player from "../components/Player.js";
afterEach(rtl.cleanup);

test("Player component is rendered with all data", () => {
   const data = { name: "Carli Lloyd", country: "United States", searches: 9 };
   const player = rtl.render(<Player {...data} />);

   player.getByText(data.name);
   player.getByText(`Location: ${data.country}`);
   player.getByText(`Searches: ${data.searches}`);
});