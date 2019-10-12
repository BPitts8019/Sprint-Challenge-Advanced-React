import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App.js";
afterEach(rtl.cleanup);

test("renders without crashing", () => {
   const app = rtl.render(<App />);
   expect(app).toBeDefined();
});


