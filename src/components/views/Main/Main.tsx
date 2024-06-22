import { useCallback, useEffect, useState } from "react";
import BoardHelper from "../../../common/BoardHelper";
import Board from "../Board/Board";
import Setup from "../Setup/Setup";
import BingoCard from "../../../types/BingoCard";

type PropTypes = {
  setup: boolean,
  stateToggle: () => void;
}

const Main = ({ setup, stateToggle }: PropTypes) => {
  const [prompts, setPrompts] = useState<BingoCard[][]>([]);
  const [textPrompts, setTextPrompts] = useState<string[]>(Array(24).fill(""));
  const handleLoadButton = useCallback((textPrompts: string[]) => {
    setTextPrompts(textPrompts)
  }, [])
  const handlePlayButton = (boardName: string) => {
    if ([...new Set(textPrompts)].length == 24) {
      if (boardName) { BoardHelper.saveUserPrompts(textPrompts, boardName); }
      setPrompts(BoardHelper.generateBoard(textPrompts))
      stateToggle();
    } else {
      alert("You need 24 unique items to play")
    }
  }
  const handleAllRandom = () => {
    setTextPrompts(BoardHelper.returnRandomPrompts());
  }
  const textPromptHandler = (index: number, newVal: string) => {
    setTextPrompts((oldPrompts) => {
      const temp = [...oldPrompts];
      temp[index] = newVal
      return temp;
    })
  }
  const handleCardFlip = (x: number, y: number) => {
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
          clickHandler={handleCardFlip}
        />
        : <Setup
          textPrompts={textPrompts}
          textPromptHandler={textPromptHandler}
          handlePlayButton={handlePlayButton}
          handleAllRandom={handleAllRandom}
          loadUserPrompts={handleLoadButton}
        />
      }
    </>)
}

export default Main;
