import styled from "@emotion/styled";
import { black, navBar } from "../../constants/theming";

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${navBar};
  max-height: 35pt;
  padding-left: 1em;
  border-bottom: 1pt solid ${black};
  h1 { 
    font-size: 20pt;
  }
  button:last-child {
    margin-left: auto;
    margin-right: 2em;
  }
`;

export const StyledImage = styled.img`
  max-height: 25pt;
  height: auto;
  padding: 3pt;
`;
