import React from "react";
import Distance from "./distance";
import renderWithTheme from "../react-testing";

test("should show the distance in km when using metric", () => {
  const { getByText } = renderWithTheme(<Distance distance={10} metric />);
  const element = getByText("16.1km");
  expect(element).toBeInTheDocument();
});

test("should show the distance in miles when not using metric", () => {
  const { getByText } = renderWithTheme(
    <Distance distance={10} metric={false} />
  );
  const element = getByText("10m");
  expect(element).toBeInTheDocument();
});
