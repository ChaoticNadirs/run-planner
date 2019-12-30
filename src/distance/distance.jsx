import React from "react";
import { number, bool } from "prop-types";
import styled from "styled-components";
import { milesToKm } from "../metric-converter";

const StyledDistance = styled.div`
  margin-bottom: 0.25rem;
  font-weight: bold;

  ${props => props.theme.breakpoints.xl} {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    font-weight: normal;
  }
`;

const Distance = ({ distance, reps, metric }) => {
  let d;
  let unit;

  if (metric) {
    d = milesToKm(distance).toFixed(1);
    unit = "km";
  } else {
    d = distance < 0.98 ? distance.toFixed(2) : Math.round(distance);
    unit = "m";
  }

  return (
    <StyledDistance>
      {reps > 1 && <span>{reps}x</span>}
      {d}
      {unit}
    </StyledDistance>
  );
};

Distance.propTypes = {
  distance: number.isRequired,
  reps: number,
  metric: bool.isRequired
};

Distance.defaultProps = {
  reps: 1
};

export default Distance;
