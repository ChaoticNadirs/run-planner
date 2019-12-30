import React from "react";
import styled from "styled-components";
import { string, func } from "prop-types";

const StyledButton = styled.button`
  border-radius: 3px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  font-size: 1.25rem;
  color: white;
  background-color: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};
  margin-right: 0.5rem;

  :last-of-type {
    margin-right: 0;
  }

  :hover {
    filter: brightness(90%);
    transition: 0.15s ease-in-out;
  }
`;

const Button = ({ text, onClick, className, type }) => {
  return (
    <StyledButton className={className} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: func,
  className: string,
  text: string.isRequired,
  type: string
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  type: "button"
};

export default Button;
