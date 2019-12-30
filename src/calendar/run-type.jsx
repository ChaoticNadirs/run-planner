import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

const StyledRunType = styled.div`
  color: ${props => props.theme.colors.backgroundDark};
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  text-align: center;
  margin-bottom: 0.5rem;
  background-color: ${props =>
    (props.type === "Speed" && props.theme.colors.warning) ||
    (props.type === "Tempo" && props.theme.colors.success) ||
    (props.type === "Long" && props.theme.colors.secondary)};
`;

const RunType = ({ type }) => {
  return <StyledRunType type={type}>{type}</StyledRunType>;
};

RunType.propTypes = {
  type: string.isRequired
};

export default RunType;
