import styled from "@emotion/styled";
import { black, cozyFour, cozyOne, cozyTwo } from "../../../constants/theming";

export const StyledHeaderCell = styled.td`
  width:  18vw;
  height: 10vw;
  font-size: 24pt;
  font-weight: 700;
  text-align: center;
  @media (min-width: 400pt){
    width: 100pt;
    height: 50pt;
    font-size: 52pt;
  }
`;

export const StyledRow = styled.tr<{ bgFlip: boolean }>`
  background-color: ${({ bgFlip }) => bgFlip ? cozyOne : cozyTwo};
`;

export const StyledDiv = styled.div`
  background-color: ${cozyFour};
  padding: 10pt 0;
  border: 1pt solid ${black};
  @media (min-width: 500pt){
    padding: 5pt;
    border-radius: 8pt;
  }
`
