var findCircleNum = function(isConnected) {
  let result = 0

  const dfs = (i, j) => {
    const len = isConnected.length
    const columnLength = isConnected[0].length
    
    // 越界
    if (
      i < 0 ||
      j < 0 ||
      j >= columnLength ||
      i >= len ||
      isConnected[i][j] === 0
    ) return 
    
    // 把当前陆地变成海洋，标记是已经遍历过的
    isConnected[i][j] = 0
    
    dfs(i - 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
    dfs(i + 1, j)
  }

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] === 0) {
        result++
        dfs(i, j)
      }
    }
  }

  console.log(result)
  return result
};

findCircleNum([
  1, 1, 0,
  1, 1, 0,
  0, 0, 1
])

findCircleNum([
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
])