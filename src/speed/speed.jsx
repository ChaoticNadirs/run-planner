import React from "react";
import { number, bool } from "prop-types";
import styled from "styled-components";
import { milesToKm } from "../metric-converter";

const StyledSpeed = styled.div`
  margin-bottom: 0.25rem;
`;

const Speed = ({
  distance,
  basicMilePace,
  slowModifier,
  fastModifier,
  metric
}) => {
  const unit = metric ? "km/h" : "mph";
  let min = (distance / (distance * (basicMilePace + slowModifier))) * 60 * 60;
  let max = (distance / (distance * (basicMilePace + fastModifier))) * 60 * 60;

  if (metric) {
    min = milesToKm(min);
    max = milesToKm(max);
  }

  return (
    <StyledSpeed>
      {min.toFixed(1)}-{max.toFixed(1)}
      {unit}
    </StyledSpeed>
  );
};

Speed.propTypes = {
  distance: number.isRequired,
  basicMilePace: number.isRequired,
  slowModifier: number.isRequired,
  fastModifier: number.isRequired,
  metric: bool.isRequired
};

export default Speed;
