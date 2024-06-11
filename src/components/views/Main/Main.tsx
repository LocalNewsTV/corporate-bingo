import { useEffect, useState } from "react";
import BoardHelper from "../../../common/BoardHelper";
import Board from "../Board/Board";
import Setup from "../Setup/Setup";
import BingoCard from "../../../types/BingoCard";

type PropTypes = {
  setup: boolean,
}

const Main = ({ setup }: PropTypes) => {
  const [prompts, setPrompts] = useState<BingoCard[][]>([]);
  const clickHandler = (x: number, y: number) => {
    setPrompts((prompts) => {
      const temp = prompts.map((row, rowIndex) => {
        if (rowIndex === x) {
          return row.map((item, colIndex) => {
            if (colIndex === y) {
              return { ...item, toggled: !item.toggled };
            }
            return item;
          });
        }
        return row;
      });
      return temp;
    });
  };

  useEffect(() => {
    setPrompts(BoardHelper.generateFromDefault());
  }, [])

  return (
    <>
      {setup
        ? <Board
          prompts={prompts}
          clickHandler={clickHandler}
        />
        : <Setup />
      }
    </>)
}

export default Main;
