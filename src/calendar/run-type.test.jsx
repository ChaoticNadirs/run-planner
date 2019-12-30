import React from "react";
import RunType from "./run-type";
import renderWithTheme from "../react-testing";

test("should render the correct background color for a tempo run", () => {
  const { getByText } = renderWithTheme(<RunType type="Tempo" />);
  const element = getByText(/Tempo/i);
  expect(element).toHaveStyle("background-color: #89BE4C");
});

test("should render the correct background color for a speed run", () => {
  const { getByText } = renderWithTheme(<RunType type="Speed" />);
  const element = getByText(/Speed/i);
  expect(element).toHaveStyle("background-color: #F5C33B");
});

test("should render the correct background color for a long run", () => {
  const { getByText } = renderWithTheme(<RunType type="Long" />);
  const element = getByText(/Long/i);
  expect(element).toHaveStyle("background-color: #7B64C0");
});
