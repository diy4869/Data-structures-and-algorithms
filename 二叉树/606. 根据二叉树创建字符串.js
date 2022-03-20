const { arrayToBinaryTree } = require('./utils')


var tree2str = function(root) {
  if (!root) {
    return ''
  }

  if (!root.left && !root.right) {
    return '' + root.val
  }

  if (!root.right) {
    return root.val + '(' + tree2str(root.left) + ')'
  }
  
  return root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')'
}


// tree2str(
//   arrayToBinaryTree([1, 2, 3, 4])
// )
tree2str(
  arrayToBinaryTree([1, 2, 3, null, 4])
)