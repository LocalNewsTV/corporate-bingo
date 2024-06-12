import styled from "@emotion/styled";
import { cozyFive, cozyOne, cozyThree } from "../../constants/theming";

const height = '25px';

export const StyledLi = styled.li`
  padding: 5pt;
  height: ${height};
  background-color: ${cozyOne};
  display: flex;
  align-items: center;
  flex-direction: row;
  & > input {
  margin-right: auto;
  }
  & > button {
      margin-left: 5pt;
  }
`
export const StyledCopy = styled.button`
  height: 100%;
  border-radius: 4pt;
  background-color: ${cozyFive};
  border: 0;
`
export const StyledRandom = styled.button`
  height: 100%;
  border-radius: 4pt;
  background-color: ${cozyThree};
  border: 0;
`

export const StyledInput = styled.input`
  height: ${height};
  width: 100%;
  padding-left: 0.5em;
  &:focus {
    outline: none;
  }
`;
