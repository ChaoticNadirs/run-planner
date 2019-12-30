import React, { useContext } from "react";
import styled from "styled-components";
import { shape, string } from "prop-types";
import DayHeader from "./day-header";
import Distance from "../distance/distance";
import Pace from "../pace/pace";
import Speed from "../speed/speed";
import RunType from "./run-type";
import { PreferencesContext } from "../preferences/preferences-context";
import { tenKmPaceToMilePace } from "../metric-converter";

const StyledDay = styled.div`
  margin: 0;

  border: 1px solid ${props => props.theme.colors.backgroundLight};

  ${props => props.theme.breakpoints.xl} {
    width: 10.0625rem;
  }
`;

const Run = styled.div`
  padding: 0.5rem 0.5rem 0.25rem 0.5rem;

  ${props => props.theme.breakpoints.xl} {
    padding: 0.5rem 1rem 0.25rem 1rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${props => props.theme.breakpoints.xl} {
    display: block;
  }
`;

const Day = ({ date, run }) => {
  const { state } = useContext(PreferencesContext);
  const basicMilePace = tenKmPaceToMilePace(state.minutes, state.seconds);

  return (
    <StyledDay>
      <DayHeader date={date} />
      {run && (
        <Run>
          <RunType type={run.type} />
          <Details>
            <Distance
              distance={run.distance}
              reps={run.reps}
              metric={state.units === "km"}
            />
            <Pace
              basicMilePace={basicMilePace}
              slowModifier={run.paceModifierSecondsSlow}
              fastModifier={run.paceModifierSecondsFast}
              metric={state.units === "km"}
            />
            <Speed
              distance={run.distance}
              basicMilePace={basicMilePace}
              slowModifier={run.paceModifierSecondsSlow}
              fastModifier={run.paceModifierSecondsFast}
              metric={state.units === "km"}
            />
          </Details>
        </Run>
      )}
    </StyledDay>
  );
};

Day.propTypes = {
  date: string.isRequired,
  run: shape({ type: string.isRequired })
};

Day.defaultProps = {
  run: null
};

export default Day;
