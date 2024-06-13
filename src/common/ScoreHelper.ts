import BingoCard from "../types/BingoCard";
import Score from "../types/Score";

class ScoreHelper {
  board: BingoCard[][]

  constructor(currentBoard: BingoCard[][]) {
    this.board = currentBoard;
  }
  /**
   * @desc Check each row of the bingo board for completed rows
   */
  checkRows(): number {
    let rowPoints = 0;
    this.board.forEach((item: BingoCard[]) => {
      if (item.every(item => item.toggled)) { rowPoints++; }
    })
    return rowPoints;
  }
  /**
   * @desc Check each column of bingo board for completed columns
   * @returns {number} completed rows
   */
  checkColumns(): number {
    let rowPoints = 0;
    for (let i = 0; i < 5; i++) {
      if (this.board.every(row => row[i].toggled)) {
        rowPoints++;
      }
    }
    return rowPoints;
  }

  /**
   * @returns {boolean} Entries in '/' pattern form complete row
   */
  checkAscendingDiagonal(): boolean {
    for (let i = 0; i < 5; i++) {
      if (!this.board[4 - i][i].toggled) {
        return false;
      }
    }
    return true;
  }

  /**
   * @returns {boolean} Entries in '\' pattern form complete row
   */
  checkDescendingDiagonal(): boolean {
    for (let i = 0; i < 5; i++) {
      if (!this.board[i][i].toggled) {
        return false;
      }
    }
    return true;
  }
  /**
   * @desc Checks if 'X' pattern formed on Bingo card
   * @returns {Score}
   */
  checkCross(): Score {
    const crossComplete = this.checkAscendingDiagonal() && this.checkDescendingDiagonal();
    return { title: "X Bonus", score: crossComplete ? 5 : 0 }
  }
  /**
   * @desc Sums points for all completed rows, columns, and crosses
   * @returns {Score}
   */
  checkCompleteRows(): Score {
    let sum = this.checkColumns();
    sum += this.checkRows();
    if (this.checkAscendingDiagonal()) { sum += 1; }
    if (this.checkAscendingDiagonal()) { sum += 1; }
    return { title: "Complete Rows", score: sum };
  }

  /**
   * @desc Checks each corner of the bingo card is complete
   * @returns {Score}
   */
  checkFourCorners(): Score {
    const fourCorners = (
      this.board[0][0].toggled &&
      this.board[0][4].toggled &&
      this.board[4][4].toggled &&
      this.board[4][0].toggled
    )
    return {
      title: "Four Corners Bonus",
      score: fourCorners ? 4 : 0
    }
  }

  getBoardScore() {
    const response = {} as Record<string, Score>;
    response.rows = this.checkCompleteRows();
    response.cross = this.checkCross();
    response.fourCorners = this.checkFourCorners();
    return response;
  }
}

export default ScoreHelper;
