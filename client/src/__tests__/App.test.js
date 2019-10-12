import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App.js";
afterEach(rtl.cleanup);

test("renders without crashing", () => {
   const app = rtl.render(<App />);
   expect(app).toBeDefined();
});

test("renders loading spinner while fetching data", () => {
   let list = [];

   let app = rtl.render(<App list={list} />);
   app.getByTestId("loading");

   // setTimeout(() => {
   //    list = [
   //       { name: "Tobin Heath", country: "United States", searches: 7 },
   //       { name: "Wendie Renard", country: "France", searches: 7 },
   //       { name: "Kosovare Asllani", country: "Sweden", searches: 6 },
   //       { name: "Lieke Martens", country: "Netherlands", searches: 6 },
   //       { name: "Amandine Henry", country: "France", searches: 5 },
   //       { name: "Ali Krieger", country: "United States", searches: 5 },
   //       { name: "Mallory Pugh", country: "United States", searches: 4 },
   //       { name: "Samantha Kerr", country: "Australia", searches: 4 }
   //    ];

   //    app = rtl.render(<App list={list} />);
   //    app.queryByTestId("loading").not.toBeDefined();
   // }, 1500);
});
