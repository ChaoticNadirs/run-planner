import React from "react";
import { render } from "@testing-library/react";
import Calendar from "./calendar";

test("should not render the calendar when the preferences have not been set", () => {
  const { getByTestId } = render(<Calendar plan={[]} />);
  const element = getByTestId("no-calendar");
  expect(element).toBeInTheDocument();
});
