import { ChangeEvent } from "react";
import { StyledCopy, StyledInput, StyledLi, StyledRandom } from "./PromptCustomizer.style";
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
      <StyledRandom onClick={handleRandom}>Random</StyledRandom>
      <StyledCopy onClick={handleClear}>Clear</StyledCopy>
    </StyledLi>
  )
}

export default PromptCustomizer;
