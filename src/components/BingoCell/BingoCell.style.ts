import styled from "@emotion/styled";
import { cozyFive, hero } from "../../constants/theming";

export const StyledTd = styled.td`
  height: 19vw;
  width: 19vw;
  padding: 0;
  font-size: 10px;
  text-wrap: wrap;
  text-align: center;
  border: 1pt solid ${hero};
  @media (min-width: 500pt){
    width: 100pt;
    height: 100pt;
    font-size: 16px;
  }
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
  overflow-y: auto;
  &:hover {
    background-color: ${cozyFive};
    overflow-x: contain;
  }
`;
