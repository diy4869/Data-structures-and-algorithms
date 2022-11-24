const { arrayToBinaryTree } = require('./utils')

var isSubStructure = function(A, B) {
    // 递归判断 root 和 子节点是否相等
  const check = (root, sub) => {
    if (sub === null) return false
    if (root === null && sub === null) return true
    if (root.val !== sub.val) return false

    return check(root.left, sub.left) && check(root.right, sub.right)
  }

  const dfs = (root, sub) => {
    if (sub === null) return false
    if (root === null && sub === null) return true
    if (root.val === sub.val) {
      return check(root, sub)
    } else {
      return dfs(root.left, sub.left) && dfs(root.right, sub.right)
    }
  }

  return dfs(A, B)
};

isSubStructure(
  arrayToBinaryTree([1,2,3,4]),
  arrayToBinaryTree([3])
)
isSubStructure(
  arrayToBinaryTree([-1,3,2,0]),
  arrayToBinaryTree([])
)

isSubStructure(
  arrayToBinaryTree([10,12,6,8,3,11]),
  arrayToBinaryTree([10,12,6,8])
)