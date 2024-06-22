import { ChangeEvent, useEffect, useState } from "react";
import PromptCustomizer from "../../PromptCustomizer/PromptCustomizer";
import { ButtonContainer, StyledOption, StyledSelect, StyledTextInput, StyledUl, ViewContainer } from "./Setup.style";
import BoardHelper from "../../../common/BoardHelper";
import SavedBingoCard from "../../../types/SavedBingoCard";

type PropTypes = {
  textPrompts: string[]
  textPromptHandler: (index: number, newVal: string) => void
  handlePlayButton: (boardName: string) => void;
  handleAllRandom: () => void;
  loadUserPrompts: (userPrompts: string[]) => void;
}
const Setup = ({ textPrompts, textPromptHandler, handlePlayButton, handleAllRandom, loadUserPrompts }: PropTypes) => {
  const [boardName, setBoardName] = useState<string>("");
  const [savedBoardId, setSavedBoardId] = useState<string>("");
  const handleSavedBoardNameChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setSavedBoardId(evt.target.value);
  }
  useEffect(() => {
    const boardFromStorage = BoardHelper.getUserBoard(savedBoardId)
    if (boardFromStorage?.id) {
      loadUserPrompts(boardFromStorage.bingoCard);
      setBoardName(boardFromStorage.boardName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedBoardId])
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
        {
          BoardHelper.getUserBoards().length > 0 &&
          <StyledSelect
            onChange={handleSavedBoardNameChange}
            value={savedBoardId}
          >
            <StyledOption value="">Select a saved board</StyledOption>
            {BoardHelper.getUserBoards().map((item: SavedBingoCard, index: number) => (
              <StyledOption
                key={index}
                value={item.id}
              >
                {item.boardName}
              </StyledOption>
            ))}
          </StyledSelect>
        }
        <StyledTextInput
          type="text"
          placeholder="Board name"
          onChange={handleChange}
          value={boardName}
        />
        <p>To save or update your prompts, name your board and press start.</p>
        <button onClick={handlePlayButton.bind(this, boardName)}>Start New Game!</button>
        <button onClick={handleAllRandom}>Randomize All Prompts</button>
      </ButtonContainer>
    </ViewContainer>
  )
}

export default Setup;
