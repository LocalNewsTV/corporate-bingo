import BingoCard from "../types/BingoCard";
import prompts from "./prompts"

const FREE_SPACE: BingoCard = {
  text: "FREE SPACE",
  toggled: false
}

class BoardHelper {
  static defaultPrompts = prompts;
  static loadFromUserSaved = () => {
    const userPrompts = localStorage.getItem("userPrompts");
    if (!userPrompts) { return BoardHelper.generateFromDefault() }
    return this.generateBoard(JSON.parse(userPrompts));
  }
  static saveUserPrompts(userPrompts: Array<string>) {
    localStorage.save("userPrompts", JSON.stringify(userPrompts))
  }
  static generateFromDefault() {
    return this.generateBoard(this.defaultPrompts);
  }

  static generateBoard(userSubmittedInput: Array<string>): BingoCard[][] {
    const arrayPrompts = [...userSubmittedInput];
    const board: Array<Array<BingoCard>> = []
    for (let i = 1; i <= 5; i++) {
      const subBoard: Array<BingoCard> = [];
      for (let j = 1; j <= 5; j++) {
        if (i === 3 && j === 3) { subBoard.push(FREE_SPACE); }
        else {
          const pos = Math.floor(Math.random() * arrayPrompts.length);
          const card: BingoCard = {
            text: arrayPrompts[pos],
            toggled: false
          }
          subBoard.push(card)
          arrayPrompts.splice(pos, 1);
        }
      }
      board.push(subBoard);
    }
    return board
  }
}


export default BoardHelper
