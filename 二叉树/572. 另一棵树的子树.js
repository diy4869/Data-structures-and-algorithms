const { arrayToBinaryTree } = require('./utils')

/**
 * 
 * @param {*} root 
 * @param {*} subRoot 
 * @returns boolean
 * @description 第一步 找到相同的节点，第二步 递归 root 和 subroot 判断他们的节点以及子节点是否相等
 */
var isSubtree = function (root, subRoot) {
  // 递归判断 root 和 子节点是否相等
  const check = (root, subRoot) => {
    if (root === null && subRoot === null) return true
    if (root === null || subRoot === null || root.val !== subRoot.val) return false

    // 找到相同的节点，判断 子节点是否相等
    if (root.val === subRoot.val) {
      return check(root.left, subRoot.left) && check(root.right, subRoot.right)
    }
  }

  const dfs = (node, sub) => {
    if (node === null && sub === null) return true
    if (node === null || sub === null) return false
        
    // 检查子节点是否相等 或者 subroot 是否在左节点 或者 在右节点
    return check(node, sub) || isSubtree(node.left, sub) || isSubtree(node.right, sub)
  }
  
  return dfs(root, subRoot)
};

console.log(isSubtree(
  arrayToBinaryTree([1, 1]),
  arrayToBinaryTree([1])
))
console.log(isSubtree(
  arrayToBinaryTree([3,4,5,1,2]),
  arrayToBinaryTree([4, 1, 2])
))


console.log(isSubtree(
  arrayToBinaryTree([3,4,5,1, null, 2]),
  arrayToBinaryTree([3, 1, 2])
))


console.log(isSubtree(
  arrayToBinaryTree([3,4,5,1,2,null,null,null,null,0]),
  arrayToBinaryTree([4, 1, 2])
))


