const { arrayToBinaryTree } = require('./utils')

function isSymmetric(root) {
  const dfs = (root1, root2) => {
      if (root1 === null && root2 === null) return true
      if (root1 === null || root2 === null) return false
      if (root1.val !== root2.val) return false
      
      return dfs(root1.left, root2.right) && dfs(root1.right, root2.left)
  }

  return dfs(root, root)

}

isSymmetric(
  arrayToBinaryTree(
    [1,2,2,3,4,4,3]
  )
)
