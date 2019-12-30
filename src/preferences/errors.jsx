import React from "react";
import styled from "styled-components";
import { arrayOf, string } from "prop-types";

const List = styled.ul`
  color: ${props => props.theme.colors.danger};
`;

const Errors = ({ errors }) => {
  if (!errors) {
    return <></>;
  }

  return (
    <List>
      {errors.map((e, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i}>{e}</li>
      ))}
    </List>
  );
};

Errors.propTypes = {
  errors: arrayOf(string).isRequired
};
export default Errors;
