import React from "react";
import styled from "styled-components";
import { childrenPropTypes, childrenDefaultProps } from "../shared-prop-types";

const StyledInputGroup = styled.div`
  > input {
    margin-right: 0.5rem;
    margin-left: 0.5rem;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }
`;

const InputGroup = ({ children }) => {
  return <StyledInputGroup>{children}</StyledInputGroup>;
};

InputGroup.propTypes = {
  ...childrenPropTypes
};

InputGroup.defaultProps = {
  ...childrenDefaultProps
};

export default InputGroup;
