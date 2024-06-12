import styled from "@emotion/styled";

export const StyledUl = styled.ul`
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  max-height: 400pt;
  overflow-y: auto;
`;

export const ViewContainer = styled.div`
  display: flex;
  min-height:95vh;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  & > button {
    margin-left: 5pt;
  }
  & > button:first-of-type {
    margin-left: 0;
  }
`
