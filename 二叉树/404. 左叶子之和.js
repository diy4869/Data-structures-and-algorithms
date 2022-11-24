const { arrayToBinaryTree } = require('./utils')

function sumOfLeftLeaves(root) {
  let result = 0

  const dfs = (root, left = false) => {
    if (root === null) return 0
    if (root.left && !root.left.left && !root.left.right) {
      result += root.val
    }

    dfs(root.left, true)
    dfs(root.right, false)
  }

  dfs(root)
 
  return result
};

sumOfLeftLeaves(
  arrayToBinaryTree([1])
)