import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { exportAllDeclaration } from "@babel/types";

test("renders App without crashing", () => {
  render(<App />);
});
