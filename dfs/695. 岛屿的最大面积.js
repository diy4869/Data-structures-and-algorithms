/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let count = 0
  let result = []
  const dfs = (i, j) => {
    
    if (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[i].length &&
      grid[i][j] === 1
    ) {
      count++
      grid[i][j] = 0
    } 
    if (grid[i][j] === 0) return 0

    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)

    result.push(count)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      dfs(i, j)
    }
  }
  console.log(count, result)
}

maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
])
