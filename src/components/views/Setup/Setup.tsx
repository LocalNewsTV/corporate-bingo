import { ChangeEvent, useState } from "react";
import PromptCustomizer from "../../PromptCustomizer/PromptCustomizer";
import { ButtonContainer, StyledOption, StyledSelect, StyledTextInput, StyledUl, ViewContainer } from "./Setup.style";

type PropTypes = {
  textPrompts: string[]
  textPromptHandler: (index: number, newVal: string) => void
  handlePlayButton: (boardName: string) => void;
  handleAllRandom: () => void;
  loadUserPrompts: () => void;
}
const Setup = ({ textPrompts, textPromptHandler, handlePlayButton, handleAllRandom, loadUserPrompts }: PropTypes) => {
  const disabled = localStorage.getItem("userPrompts") === null;
  const [boardName, setBoardName] = useState<string>("");
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => setBoardName(evt.target.value);
  return (
    <ViewContainer>
      <StyledUl>
        {textPrompts.map((text, index) => (
          <PromptCustomizer
            key={index}
            index={index}
            text={text}
            textPromptHandler={textPromptHandler}
          />))}
      </StyledUl>
      <ButtonContainer>
        <StyledSelect>
          <StyledOption value="">Select a saved board</StyledOption>
          <StyledOption>Hi</StyledOption>
          <StyledOption>Bye</StyledOption>
          <StyledOption>Salut</StyledOption>
        </StyledSelect>
        <StyledTextInput
          type="text"
          placeholder="Optional: Save your board"
          onChange={handleChange}
          value={boardName}
        />
        <button onClick={handlePlayButton.bind(this, boardName)}>Start New Game!</button>
        <button onClick={handleAllRandom}>Randomize Prompts</button>
        <button onClick={loadUserPrompts} disabled={disabled}>Load Previous Board</button>
      </ButtonContainer>
    </ViewContainer>
  )
}

export default Setup;
