var findTarget = function (root, k) {
  // 通过 set 集合保存数据值
  const set = new Set()

  const dfs = (root) => {
    if (root === null) return false
    // 判断 set 里面村存不存在 k - root.val 的值
    if (set.has(k - root.val)) return true
    // 添加到集合
    set.add(root.val)
    // 只要有一个找到就行
    return dfs(root.left) || dfs(root.right)
  }

  return dfs(root)
};

const tree = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
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
    val: 6,
    left: {
      val: null,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
console.log(findTarget({
  val: 1,
  left: null,
  right: null
}, 2))
console.log(findTarget(tree, 28))
console.log(findTarget(tree, 9))
