import React, { useContext } from "react";
import styled from "styled-components";
import { arrayOf, object } from "prop-types";
import dayjs from "dayjs";
import Week from "./week";
import { PreferencesContext } from "../preferences/preferences-context";

const StyledCalendar = styled.div`
  margin-top: 1rem;
`;

const Calendar = ({ plan }) => {
  const { state } = useContext(PreferencesContext);

  const preferencesComplete =
    state &&
    (state.day || state.month || state.year || state.minutes || state.seconds);

  if (!preferencesComplete) {
    return <div data-testid="no-calendar" />;
  }

  const end = new Date(state.year, state.month - 1, state.day);
  const firstDate = dayjs(end)
    .subtract(plan.length, "week")
    .add(1, "day");

  return (
    <StyledCalendar data-testid="calendar">
      {plan.map((w, i) => (
        <Week
          key={w.week}
          startDate={firstDate.add(i, "week")}
          runs={w.runs}
          weekNumber={w.week}
        />
      ))}
    </StyledCalendar>
  );
};

Calendar.propTypes = {
  plan: arrayOf(object).isRequired
};

export default Calendar;
