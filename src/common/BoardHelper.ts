import { v4 as uuidv4 } from "uuid";
import BingoCard from "../types/BingoCard";
import SavedBingoCard from "../types/SavedBingoCard";
import prompts from "./prompts"

const FREE_SPACE: BingoCard = {
  text: "FREE SPACE",
  toggled: false
}

class BoardHelper {
  static defaultPrompts: string[] = prompts;
  /**
   * @desc selects random entry from the list of default prompts
   * @returns string
   */
  static randomPrompt(): string {
    const index = Math.floor(Date.now() % this.defaultPrompts.length)
    return this.defaultPrompts[index];
  }
  static getUserBoards(): SavedBingoCard[] {
    const local = localStorage.getItem("userBingoCards")
    if (local) {
      return JSON.parse(local) as SavedBingoCard[]
    }
    return []
  }
  static getUserBoard(uuid: string): SavedBingoCard {
    const local = localStorage.getItem("userBingoCards")
    if (local) {
      const savedCards: SavedBingoCard[] = JSON.parse(local) as SavedBingoCard[]
      for (let i = 0; i < savedCards.length; i++) {
        if (savedCards[i].id === uuid) {
          return savedCards[i];
        }
      }
    }
    return { boardName: "", bingoCard: [], id: "" }
  }
  /**
   * @desc Fetches users local storage data to create set of BingoCards  
   */
  static loadFromUserSaved(): string[] {
    const userPrompts = localStorage.getItem("userPrompts");
    if (userPrompts == null) { return this.returnRandomPrompts(); }
    return JSON.parse(userPrompts);
  }

  static saveBoardState(currentBoard: BingoCard[][]) {
    localStorage.setItem("activeGame", JSON.stringify(currentBoard));
  }

  static loadBoardState(): BingoCard[][] {
    const activeGame: null | string | BingoCard[][] = localStorage.getItem("activeGame")
    if (activeGame) {
      console.log(activeGame);
      console.log(JSON.parse(activeGame))
      return JSON.parse(activeGame) as BingoCard[][];
    }
    return this.generateFromDefault();
  }
  /**
   * @desc Saves users prompts to localStorage
   * @param userPrompts Users array of prompts
   */
  static saveUserPrompts(userPrompts: Array<string>, boardName: string): void {
    const storedUserCards = localStorage.getItem("userBingoCards")
    const userBoard: SavedBingoCard = {
      id: uuidv4(),
      boardName: boardName,
      bingoCard: userPrompts
    }
    if (storedUserCards) {
      const parsedUserCards: SavedBingoCard[] = JSON.parse(storedUserCards) as SavedBingoCard[];
      let didUpdate = false;
      for (let i = 0; i < parsedUserCards.length; i++) {
        if (parsedUserCards[i].boardName === boardName) {
          parsedUserCards[i].bingoCard = userBoard.bingoCard;
          didUpdate = true;
        }
      }
      if (!didUpdate) {
        parsedUserCards.push(userBoard);
      }
      localStorage.setItem("userBingoCards", JSON.stringify(parsedUserCards))
    } else {
      localStorage.setItem("userBingoCards", JSON.stringify([userBoard]));
    }

  }
  /**
   * @desc Creates set of BingoCards using the built-in prompts
   */
  static generateFromDefault(): BingoCard[][] {
    return this.generateBoard(this.defaultPrompts);
  }

  static returnRandomPrompts(): string[] {
    const arrayPrompts = [...this.defaultPrompts]
    const returnVal: string[] = []
    while (returnVal.length < 24) {
      const pos = Math.floor(Math.random() * arrayPrompts.length);
      returnVal.push(arrayPrompts[pos]);
      arrayPrompts.splice(pos, 1);
    }
    return returnVal;
  }
  /**
   * @desc Creates a set of BingoCards using the supplied list 
   * @param textPrompts 
   * @returns 
   */
  static generateBoard(textPrompts: Array<string>): BingoCard[][] {
    if (textPrompts.length < 24) {
      alert("Invalid length of items... Returning default list");
      return this.generateFromDefault();
    }
    const arrayPrompts = [...textPrompts];
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
