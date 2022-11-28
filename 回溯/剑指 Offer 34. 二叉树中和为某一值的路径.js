const { arrayToBinaryTree } = require('../二叉树/utils')

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function(root, target) {
  const result = []

  const dfs = (root, target, stack = []) => {
    if (root === null) {
      return
    }
    stack.push(root.val)

    if (root.left === null && root.right === null && target - root.val === 0) {
      result.push(
        stack.slice()
      )
      stack.pop()
      return
    }
    
    dfs(root.left, target - root.val, stack)
    dfs(root.right, target - root.val, stack)
    stack.pop()
  }

  dfs(root, target)
  return result
};

pathSum(
  arrayToBinaryTree([-2,null,-3]),
  -5
)

pathSum(
  arrayToBinaryTree([5,4,8,11,null,13,4,7,2,null,null,5,1]),
  22
)