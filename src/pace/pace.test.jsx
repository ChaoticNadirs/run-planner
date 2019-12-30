import React from "react";
import Pace from "./pace";
import renderWithTheme from "../react-testing";

test("should show the pace in min/km when using metric", () => {
  const { getByText } = renderWithTheme(
    <Pace basicMilePace={410} slowModifier={-55} fastModifier={-60} metric />
  );
  const element = getByText("3:37-3:40/km");
  expect(element).toBeInTheDocument();
});

test("should show the pace in min/miles when not using metric", () => {
  const { getByText } = renderWithTheme(
    <Pace
      basicMilePace={410}
      slowModifier={-55}
      fastModifier={-60}
      metric={false}
    />
  );
  const element = getByText("5:50-5:55/mile");
  expect(element).toBeInTheDocument();
});
