import BingoCard from "../../../types/BingoCard";
import BingoCell from "../../BingoCell/BingoCell";
import ScoreCard from "../../ScoreCard/ScoreCard";
import { StyledDiv, StyledHeaderCell, StyledOuterDiv, StyledRow } from "./Board.style";

type PropTypes = {
  prompts: BingoCard[][]
  clickHandler: (x: number, y: number) => void
}
const Board = ({ prompts, clickHandler }: PropTypes) => {

  return (
    <StyledOuterDiv>
      <StyledDiv>
        <table>
          <thead>
            <tr>
              <StyledHeaderCell>B</StyledHeaderCell>
              <StyledHeaderCell>I</StyledHeaderCell>
              <StyledHeaderCell>N</StyledHeaderCell>
              <StyledHeaderCell>G</StyledHeaderCell>
              <StyledHeaderCell>O</StyledHeaderCell>
            </tr>
          </thead>
          <tbody>
            {prompts.map((row, rowInd) => (
              <StyledRow key={`row${rowInd}`} bgFlip={rowInd % 2 == 0}>
                {row.map((cell, cellInd) => (
                  <BingoCell
                    key={`cell${cellInd}`}
                    text={cell.text}
                    toggled={cell.toggled}
                    clickHandler={clickHandler.bind(this, rowInd, cellInd)}
                  />
                ))}
              </StyledRow>
            )
            )}
          </tbody>
        </table>
      </StyledDiv>
      <ScoreCard currentCard={prompts} />
    </StyledOuterDiv>
  )
}

export default Board;
