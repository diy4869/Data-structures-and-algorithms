var isSymmetric = function (root) {
  const dfs = (leftNode, rightNode) => {
    // 如果 2个 节点都为 null，说明是对称的
    if (leftNode === null && rightNode === null) return true
    // 如果 2个 有 1个 为 null 那就是不对称的
    if (leftNode === null || rightNode === null) return false

    // 判断左边和右边的值是否相等
    return leftNode.val === rightNode.val &&
    dfs(leftNode.left, rightNode.right) &&
    dfs(leftNode.right, rightNode.left)    
  }

  return dfs(root, root)

  // dfs(root.right)
}

const result = isSymmetric({
  val: 1,
  left: {
    val: 2,
     left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
})

console.log(result)