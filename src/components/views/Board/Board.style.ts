import styled from "@emotion/styled";
import { black, cozyFour, cozyOne, cozyThree } from "../../../constants/theming";

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

export const StyledOuterDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  padding-top: 35pt;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (min-width: 500pt){
    flex-direction: row;
    padding-top: 50pt;
    & > div {
      margin-left: 1em;
    }
  }
`;

export const StyledRow = styled.tr<{ bgFlip: boolean }>`
  background-color: ${cozyOne};
  & > td:nth-of-type(${({ bgFlip }) => bgFlip ? 'odd' : 'even'}) {
    background-color: ${cozyThree};
  }
`;

export const StyledDiv = styled.div`
  background-color: ${cozyFour};
  padding: 10pt 0;
  border-top: 1pt solid ${black};
  border-bottom: 1pt solid ${black}; 
  @media (min-width: 500pt){
    border: 1pt solid ${black};
    padding: 5pt;
    border-radius: 8pt;
  }
`
