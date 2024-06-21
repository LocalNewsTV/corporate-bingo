import styled from "@emotion/styled";
import { cozyFive, cozyFour, cozyOne, cozyThree } from "../../constants/theming";

const height = '25px';

export const StyledLi = styled.li`
  padding: 5pt 7pt;
  height: ${height};
  background-color: ${cozyOne};
  display: flex;
  align-items: center;
  border-top: 1pt solid transparent;
  border-bottom: 1pt solid transparent;
  flex-direction: row;
  & > input {
  margin-right: auto;
  }
  & > button {
      margin-left: 5pt;
  }

  &:hover {
    transition: .2s;
    background-color: ${cozyThree};
    border-top: 1pt solid ${cozyFour};
    border-bottom: 1pt solid ${cozyFour};
  }
`
export const StyledListButton = styled.button`
  height: 100%;
  border-radius: 4pt;
  padding: 0 0.75em;
  border: 0;
  &:nth-of-type(odd){
    background-color: ${cozyFour};
  }
  &:nth-of-type(even){
    background-color: ${cozyFive};
  }
`

export const StyledInput = styled.input`
  height: ${height};
  width: 100%;
  padding-left: 0.5em;
  border-radius: 3pt;
  border: 1pt solid ${cozyFive};
  &:focus {
    outline: none;
  }
`;
