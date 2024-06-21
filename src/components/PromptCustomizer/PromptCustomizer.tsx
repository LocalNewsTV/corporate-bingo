import { ChangeEvent } from "react";
import { StyledListButton, StyledInput, StyledLi } from "./PromptCustomizer.style";
import BoardHelper from "../../common/BoardHelper";

type PropTypes = {
  text: string;
  index: number;
  textPromptHandler: (index: number, value: string) => void
}
const PromptCustomizer = ({ text, index, textPromptHandler }: PropTypes) => {
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => textPromptHandler(index, evt.target.value);
  const handleClear = () => textPromptHandler(index, "");
  const handleRandom = () => textPromptHandler(index, BoardHelper.randomPrompt());

  return (
    <StyledLi>
      <StyledInput
        type="text"
        value={text}
        onChange={handleChange}
      />
      <StyledListButton onClick={handleRandom}>Random</StyledListButton>
      <StyledListButton onClick={handleClear}>Clear</StyledListButton>
    </StyledLi>
  )
}

export default PromptCustomizer;
