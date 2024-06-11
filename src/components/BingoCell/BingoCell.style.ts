import styled from "@emotion/styled";
import { cozyFive, hero } from "../../constants/theming";

export const StyledTd = styled.td`
  height: 100pt;
  padding: 0;
  width: 100pt;
  text-wrap: wrap;
  text-align: center;
  border: 1pt solid ${hero}
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
  opacity: 70%;
  fill: red;
  svg {
    fill: red;
  }
`

export const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5pt;
  &:hover {
    background-color: ${cozyFive};
  }
`;
