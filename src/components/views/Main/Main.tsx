import { useState } from "react";
import BoardHelper from "../../../common/BoardHelper";
import Board from "../Board/Board";
import Setup from "../Setup/Setup";

type PropTypes = {
  setup: boolean,
}

const Main = ({ setup }: PropTypes) => {
  const [boardPrompts, setBoardPrompts] = useState(BoardHelper.generateFromDefault());

  return (
    <>
      {setup
        ? <Board boardPrompts={boardPrompts} />
        : <Setup />
      }
    </>)
}

export default Main;
