var spiralOrder = function (matrix) {
  const result = []
  const len = matrix.length - 1
  const rowLen = matrix[0].length - 1

  const dfs = (rowIndex, columnIndex) => {
    
    if (columnIndex < 0) {
      dfs(rowIndex - 1, columnIndex + 1)
      if (columnIndex > len || rowIndex > rowLen) return
    }
    if (rowIndex > len ) {
      dfs(rowIndex - 1, columnIndex - 1)
      if (columnIndex > len || rowIndex > rowLen) return
    }

    if (matrix[rowIndex][columnIndex] === -1) return
    if (columnIndex < rowLen) {
      if (columnIndex === -1) return
      result.push(matrix[rowIndex][columnIndex])
      matrix[rowIndex][columnIndex] = -1

      if (matrix[rowIndex][columnIndex + 1] && matrix[rowIndex][columnIndex + 1] !== -1) {

        dfs(rowIndex, columnIndex + 1)
        if (columnIndex > len || rowIndex > rowLen) return
      } else {
        dfs(rowIndex, columnIndex - 1)
        if (columnIndex > len || rowIndex > rowLen) return
      }
    }
    if (columnIndex >= rowLen) {
      if (rowIndex <= len) {
        result.push(matrix[rowIndex][columnIndex])
        matrix[rowIndex][columnIndex] = -1
        dfs(rowIndex + 1, columnIndex)
        if (columnIndex > len || rowIndex > rowLen) return
      }
    }

  }

  dfs(0, 0)
}
// spiralOrder([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ])

spiralOrder([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
])
