import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${(props) => props.theme.bgColBody};
  }
`;

export { GlobalStyle };
