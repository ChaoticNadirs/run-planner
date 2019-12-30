import React from "react";
import styled from "styled-components";
import { childrenPropTypes, childrenDefaultProps } from "../shared-prop-types";

const StyledContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${props => props.theme.breakpoints.xl} {
    max-width: 1140px;
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  ...childrenPropTypes
};

Container.defaultProps = {
  ...childrenDefaultProps
};

export default Container;
