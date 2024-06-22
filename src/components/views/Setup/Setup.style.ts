import styled from "@emotion/styled";
import { black, cozyFive, cozyFour, cozyOne } from "../../../constants/theming";

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
  padding-top: 25pt;
  min-height:95vh;
  width: 100%;
  max-width: 800pt;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 500pt){
    flex-direction: row;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200pt;
  
  justify-content: left;
  box-sizing: border-box;
  padding: 0 1em;

  button {
    color: ${black};
    height: 25pt;
    padding: 0 0.75em;
    border: 1pt solid ${cozyFive};
    border-radius: 4pt;
    margin: 0.25em;
    background-color: ${cozyOne};
  }
  button:hover {
    transition: 1s;
    background-color: ${cozyFour};
  }
  p {
    margin: 0 0.25em;
    text-wrap: wrap;
    font-size: 10pt;  
  }
`

export const StyledSelect = styled.select`
  padding: 0 0.75em;
  box-sizing: border-box;
  width: 100%;
  min-height: 25pt;
  border-radius: 4pt;
  margin: 0.25em;
  border: 1pt solid ${cozyFive};
  background-color: ${cozyOne};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledTextInput = styled.input`
  border: 1pt solid ${cozyFive};
  background-color: white; //${cozyOne};
  padding: 0 0.75em;
  box-sizing: border-box;
  width: 100%;
  min-height: 25pt;
  border-radius: 4pt;
  margin: 0.25em;
  &:focus {
    outline: none;
  }
`;

export const StyledOption = styled.option`
  &:hover {
    cursor: pointer;
  }
`
