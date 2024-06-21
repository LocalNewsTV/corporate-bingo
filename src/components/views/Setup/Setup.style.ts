import styled from "@emotion/styled";
import { black, cozyFive, cozyFour, cozyOne, cozyThree } from "../../../constants/theming";

export const StyledUl = styled.ul`
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  @media (min-width: 500pt){
    height: 100%;
    border: 1pt solid ${cozyFive};
    border-radius: 4pt;
  }
`;

export const ViewContainer = styled.div`
  display: flex;
  min-height:95vh;
  width: 100%;
  max-width: 500pt;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  & > button:nth-of-type(2) {
    margin: 0 1.5em;
  }
  display: flex;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 1em;

  button {
    color: ${black};
    height: 25pt;
    padding: 0 0.75em;
    border: 1pt solid ${cozyFive};
    border-radius: 4pt;
    background-color: ${cozyOne};
  }
  button:hover {
    transition: 1s;
    background-color: ${cozyFour};
  }
`
