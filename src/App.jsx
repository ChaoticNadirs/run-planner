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
            The{" "}
            <a
              href="https://www.runnersworld.com/uk/health/a762493/the-first-three-day-a-week-marathon-schedule/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FIRST 3 day a week
            </a>{" "}
            training plan requires some calculations to figure out your training
            run paces. Enter your 10km time and marathon date and a personalized
            training calendar based on that plan will be generated. You can save
            your preferences to your browser.
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
