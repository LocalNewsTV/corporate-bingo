import PromptCustomizer from "../../PromptCustomizer/PromptCustomizer";
import { ButtonContainer, StyledUl, ViewContainer } from "./Setup.style";

type PropTypes = {
  textPrompts: string[]
  textPromptHandler: (index: number, newVal: string) => void
  handlePlayButton: () => void;
  handleAllRandom: () => void;
  loadUserPrompts: () => void;
}
const Setup = ({ textPrompts, textPromptHandler, handlePlayButton, handleAllRandom, loadUserPrompts }: PropTypes) => {
  const disabled = localStorage.getItem("userPrompts") === null;
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
        <button onClick={handlePlayButton}>Start New Game!</button>
        <button onClick={handleAllRandom}>Randomize</button>
        <button onClick={loadUserPrompts} disabled={disabled}>Load Previous Board</button>
      </ButtonContainer>
    </ViewContainer>
  )
}

export default Setup;
