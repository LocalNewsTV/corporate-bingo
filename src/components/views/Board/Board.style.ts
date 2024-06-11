import styled from "@emotion/styled";
import { black, cozyFour, cozyOne, cozyTwo } from "../../../constants/theming";

export const StyledHeaderCell = styled.td`
  width: 100pt;
  height: 50pt;
  font-size: 52pt;
  font-weight: 700;
  text-align: center;
`;

export const StyledRow = styled.tr<{ bgFlip: boolean }>`
  background-color: ${({ bgFlip }) => bgFlip ? cozyOne : cozyTwo};
`;

export const StyledDiv = styled.div`
  background-color: ${cozyFour};
  padding: 5pt;
  border: 1pt solid ${black};
  border-radius: 8pt;
`
