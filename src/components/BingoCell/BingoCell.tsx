import { StyledDiv, StyledImage, StyledTd } from "./BingoCell.style";
import dabbed from '/person-arms-up.svg';

type PropTypes = {
  text: string,
  toggled: boolean,
  clickHandler: () => void,
}

const BingoCell = ({
  text,
  toggled = false,
  clickHandler
}: PropTypes) => {

  return (
    <StyledTd onClick={clickHandler}>
      <StyledDiv>
        {toggled && <StyledImage src={dabbed} />}
        {text}
      </StyledDiv>
    </StyledTd>
  )
}

export default BingoCell;
