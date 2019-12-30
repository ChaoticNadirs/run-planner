import React from "react";
import styled from "styled-components";
import { number, bool } from "prop-types";
import { milePaceToKmPace } from "../metric-converter";

const StyledPace = styled.div`
  margin-bottom: 0.25rem;
`;

const formatPace = seconds => {
  let pace = new Date(seconds * 1000).toISOString().substr(14, 5);

  if (pace[0] === "0") {
    pace = pace.substr(1, 4);
  }

  return pace;
};

const Pace = ({ basicMilePace, slowModifier, fastModifier, metric }) => {
  let min = basicMilePace + slowModifier;
  let max = basicMilePace + fastModifier;
  const unit = metric ? "/km" : "/mile";

  if (metric) {
    min = milePaceToKmPace(min);
    max = milePaceToKmPace(max);
  }

  min = formatPace(min);
  max = formatPace(max);

  return (
    <StyledPace>
      {max}-{min}
      {unit}
    </StyledPace>
  );
};

Pace.propTypes = {
  basicMilePace: number.isRequired,
  slowModifier: number.isRequired,
  fastModifier: number.isRequired,
  metric: bool.isRequired
};

export default Pace;
