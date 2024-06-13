import { useEffect, useState } from "react";
import BingoCard from "../../types/BingoCard";
import { StyledDiv, StyledP, StyledSpan, TotalScore } from "./ScoreCard.style";
import Score from "../../types/Score";
import ScoreHelper from "../../common/ScoreHelper";

type PropTypes = {
  currentCard: BingoCard[][];
}

const ScoreCard = ({ currentCard }: PropTypes) => {
  const [scoreBreakdown, setScoreBreakdown] = useState<Record<string, Score>>({})
  const sumScores = (): number => {
    let total = 0;
    Object.keys(scoreBreakdown).forEach((key) => total += scoreBreakdown[key].score);
    return total;
  }

  useEffect(() => {
    const helper = new ScoreHelper(currentCard);
    setScoreBreakdown(helper.getBoardScore());
  }, [currentCard])

  return (
    <StyledDiv>
      {Object.keys(scoreBreakdown).map((key: string, index: number) => (
        <StyledP key={index}>
          <StyledSpan>
            {scoreBreakdown[key].title}: &nbsp;
          </StyledSpan>
          {scoreBreakdown[key].score}
        </StyledP>))}
      <TotalScore> Total Score: {sumScores()}</TotalScore>
    </StyledDiv>
  )
}

export default ScoreCard;
