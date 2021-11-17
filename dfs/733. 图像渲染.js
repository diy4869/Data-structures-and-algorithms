/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  // 保存之前的颜色值
  const currentColor = image[sr][sc]

  // 如果新的颜色 和之前的颜色值一样就直接返回
  if (currentColor === newColor) {
    return image
  }
  /**
    题目要求坐标 sr、sc 上下左右四个值的颜色必须和 sr、sc 相等，如果相等 就替换成新的颜色

    这里用dfs实现，当然也可以bfs做，毕竟刚开始，先做出来再说
   */
  const dfs = (i, j) => {
    //  这里 i、j 的校验属于边界问题，因为每次递归的时候 i、j 可能是负数，所以需要直接返回
    if (
      i >= 0 &&
      j >= 0 &&
      i < image.length &&
      j < image[i].length &&
      image[i][j] === currentColor
    ) {
      image[i][j] = newColor
    } else {
      return
    }

    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  dfs(sr, sc)

  return image
}

// [
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 1]
// ]

// [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1],
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1],
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1],
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1]
// ]

// [
//   ([2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 2],
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 2],
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 2],
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 1])
// ]
