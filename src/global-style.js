import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.backgroundDark};
        color: ${props => props.theme.colors.text};
    }
`;

export default GlobalStyle;
