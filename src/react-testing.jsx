import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const renderWithTheme = children =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export default renderWithTheme;
