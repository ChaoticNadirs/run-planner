import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Container from "../container/container";

const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.background};
  padding: 0.5rem 0;

  h1 {
    padding: 0;
    margin: 0;
    font-weight: normal;
    font-size: 1.75rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <h1>Marathon Planner</h1>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
