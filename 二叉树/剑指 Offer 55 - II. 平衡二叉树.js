const { arrayToBinaryTree } = require('./utils')

var isBalanced = function (root) {
  if (root === null) return true
  const maxDepth = (root, depth = 1) => {
    if (root === null) return 0

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
  }

  const leftMaxDepth = maxDepth(root.left) + 1
  const rightMaxDepth = maxDepth(root.right) + 1

  return (
    Math.abs(rightMaxDepth - leftMaxDepth) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}
// isBalanced(
//   arrayToBinaryTree([1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5])
// )
// // isBalanced(
// //   arrayToBinaryTree([1])
// // )
// isBalanced(
//   arrayToBinaryTree([3,9,20,null,null,15,7])
// )
isBalanced(arrayToBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]))
