import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

const StyledDayHeader = styled.div`
  padding: 0.5rem 1rem;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  font-weight: bold;
`;

const DayHeader = ({ date }) => {
  return <StyledDayHeader>{date}</StyledDayHeader>;
};

DayHeader.propTypes = {
  date: string.isRequired
};

export default DayHeader;
