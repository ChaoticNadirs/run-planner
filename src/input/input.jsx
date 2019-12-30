import React from "react";
import styled from "styled-components";
import { string, shape } from "prop-types";

const StyledInput = styled.input`
  border-radius: 3px;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.backgroundLight};
  border: none;
  color: ${props => props.theme.colors.text};
`;

const Input = ({ className, ...attrs }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledInput className={className} {...attrs} />;
};

Input.propTypes = {
  className: string,
  attrs: shape({})
};

Input.defaultProps = {
  className: "",
  attrs: {}
};

export default Input;
