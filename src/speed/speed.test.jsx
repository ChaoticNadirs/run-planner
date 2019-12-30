import React from "react";
import Speed from "./speed";
import renderWithTheme from "../react-testing";

test("should show the speed in km/h when using metric", () => {
  const { getByText } = renderWithTheme(
    <Speed
      distance={0.248548}
      basicMilePace={410}
      slowModifier={-55}
      fastModifier={-60}
      metric
    />
  );
  const element = getByText("16.3-16.6km/h");
  expect(element).toBeInTheDocument();
});

test("should show the speed in mph when not using metric", () => {
  const { getByText } = renderWithTheme(
    <Speed
      distance={0.248548}
      basicMilePace={410}
      slowModifier={-55}
      fastModifier={-60}
      metric={false}
    />
  );
  const element = getByText("10.1-10.3mph");
  expect(element).toBeInTheDocument();
});
