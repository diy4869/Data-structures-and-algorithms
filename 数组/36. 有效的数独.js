/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
   

  const validator = (type, rowIndex, columnIndex) => {
    const rowMap = new Map()
    const columnMap = new Map()
    const palaceMap = new Map()

    if (type === 'row') {
      for (let i = 0; i < board[rowIndex].length; i++) {
        if (rowMap.has(board[rowIndex][i])) return false
        if (board[rowIndex][i] !== '.') {
          rowMap.set(board[rowIndex][i], board[rowIndex][i])
        }
      }
    } else if (type === 'column') {
      for (let i = 0; i < board.length; i++) {
        if (columnMap.has(board[rowIndex][i])) return false
        if (board[rowIndex][i] !== '.') {
          columnMap.set(board[rowIndex][i], board[rowIndex][i])
        }
      }
    } else {
      for (let i = 0; i < board.length; i++) {
        console.log( Math.floor(rowIndex % 3) , Math.floor(columnIndex / 3))
        // if (columnMap.has(board[rowIndex][i])) return false
        // if (board[rowIndex][i] !== '.') {
        //   columnMap.set(board[rowIndex][i], board[rowIndex][i])
        // }
      }
    }
      
  }
  
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        validator('palace', i, j)
       
        // return validator('palace', i, j)
      }
  }

  
};

console.log(isValidSudoku(
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6",".",".","1","9","5",".",".","."],
    ["","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]

))