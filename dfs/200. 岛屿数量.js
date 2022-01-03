var numIslands = function(grid) {
  let result = 0

  const dfs = (i, j) => {
    const len = grid.length
    const columnLength = grid[0].length
    
    // 越界
    if (
      i < 0 ||
      j < 0 ||
      j >= columnLength ||
      i >= len ||
      grid[i][j] === '0'
    ) return 
    
    // 把当前陆地变成海洋，标记是已经遍历过的
    grid[i][j] = '0'
    
    dfs(i - 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
    dfs(i + 1, j)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        result++
        dfs(i, j)
      }
    }
  }

  return result
}

numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
])

numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])