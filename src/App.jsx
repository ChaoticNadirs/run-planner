import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./global-style";
import plan from "./plan-data";
import Calendar from "./calendar/calendar";
import Container from "./container/container";
import Preferences from "./preferences/preferences";
import { PreferencesProvider } from "./preferences/preferences-context";
import Header from "./header/header";

const Intro = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Intro>
            This site calculates a marathon training plan based on a 10km time.
            The site plugs your 10km pace into the{" "}
            <a
              href="https://www.runnersworld.com/uk/health/a762493/the-first-three-day-a-week-marathon-schedule/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FIRST 3 day a week
            </a>{" "}
            training plan and generates an estimated pace for each of the
            training runs.
          </Intro>
          <PreferencesProvider>
            <Preferences />
            <Calendar plan={plan} raceDate="2020-04-05" />
          </PreferencesProvider>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
