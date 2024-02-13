function isValidSudoku(board: string[][]): boolean {
  const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  const blocks = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (!isNaN(+board[row][col])) {
        const blockIndex = ((row / 3) >> 0) * 3 + ((col / 3) >> 0);
        if (
          rows[row].hasOwnProperty(board[row][col]) ||
          cols[col].hasOwnProperty(board[row][col]) ||
          blocks[blockIndex].hasOwnProperty(board[row][col])
        ) {
          return false;
        } else {
          rows[row][board[row][col]] = 1;
          cols[col][board[row][col]] = 1;
          blocks[blockIndex][board[row][col]] = 1;
        }
      }
    }
  }
  return true;
}

isValidSudoku([
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
]);
