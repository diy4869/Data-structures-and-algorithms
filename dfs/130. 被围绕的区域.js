/**
 * @param {character[][]} board
 * @description 这题需要判断 O 是否和边界的 O相连，如果相连则不替换成 X，否则把 除过边界的 O 替换成 X
 * 所以我们需要每次 DFS 的时候，判断上下左右四个边界 为了标记已经访问过，我们需要把 每次 DFS 过的值
 * 变成 A (这里换成啥都行，主要就做个标识)，并且当前的值为 X 或者 A 的时候，直接返回 
 * 
 * 主要有 2 种情况
 * O 被 X 包围的情况，且不相连
 * O 被 X 包围 且 相连
 * 
 * 对于每一个边界上的 O，我们以它为起点，标记所有与它直接或间接相连的字母 O；
    最后我们遍历这个矩阵，对于每一个字母：
    如果该字母被标记过，则该字母为没有被字母 X 包围的字母 O，我们将其还原为字母 O；
    如果该字母没有被标记过，则该字母为被字母 X 包围的字母 O，我们将其修改为字母 X
 */

 function solve(board) {
  if (board === null || board.length === 0) return

  const m = board.length
  const n = board[0].length

  
  const dfs = (board, i, j) => {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      board[i][j] === 'X' ||
      board[i][j] === 'A'
    ) return 

    // 标记当前已经被访问过
    board[i][j] = 'A'

    dfs(board, i - 1, j) 
    dfs(board, i + 1, j) 
    dfs(board, i, j - 1) 
    dfs(board, i, j + 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const isEdge = i == 0 || j == 0 || i == m - 1 || j == n - 1
      if (isEdge && board[i][j] == 'O') {
        dfs(board, i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
       if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
      if (board[i][j] === 'A') {
        board[i][j] = 'O'
      } 
    }
  }

  return board
}

solve([
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
])


solve([
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
])
