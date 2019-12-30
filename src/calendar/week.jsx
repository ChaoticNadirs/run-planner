import React from "react";
import styled from "styled-components";
import { arrayOf, object, number, shape } from "prop-types";
import dayjs from "dayjs";
import Day from "./day";

const StyledWeek = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  ${props => props.theme.breakpoints.xl} {
    flex-direction: row;
  }
`;

const WeekHeader = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  width: 8rem;
  font-weight: bold;
`;

const Week = ({ startDate, runs, speedDay, tempoDay, longDay, weekNumber }) => {
  const days = [];

  const [speed, tempo, long] = runs;

  for (let i = 0; i < 7; i += 1) {
    const day = {
      date: dayjs(startDate)
        .add(i, "day")
        .format("ddd D MMM")
    };
    switch (i) {
      case speedDay:
        day.run = speed;
        break;
      case tempoDay:
        day.run = tempo;
        break;
      case longDay:
        day.run = long;
        break;

      default:
        break;
    }

    days.push(day);
  }

  return (
    <>
      <WeekHeader>Week {weekNumber}</WeekHeader>
      <StyledWeek>
        {days.map(day => (
          <Day key={day.date} date={day.date} run={day.run} />
        ))}
      </StyledWeek>
    </>
  );
};

Week.propTypes = {
  startDate: shape({}).isRequired,
  runs: arrayOf(object).isRequired,
  speedDay: number,
  tempoDay: number,
  longDay: number,
  weekNumber: number.isRequired
};

Week.defaultProps = {
  speedDay: 1,
  tempoDay: 3,
  longDay: 6
};
export default Week;
