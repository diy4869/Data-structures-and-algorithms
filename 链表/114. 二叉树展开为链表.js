const preOrder = (root, list) => {
  if (root) {
    list.push(root)
    preOrder(root.left, list)
    preOrder(root.right, list)
  }
}

var flatten = function (root) {
  const list = []
  // 前序遍历的形式输出二叉树
  preOrder(root, list)

  /**
   * 依次遍历添加过的二叉树节点，因为题目是输出二叉树右节点形式的结构，所以需要我们先拿到父节点，然后 修改父节点的左右节点即可
   * 
   * 通过 prev 来保存 上一个节点的结果，current 为当前节点，之后只要给父节点的左节点为 null，右节点为当前节点就可以了
   */
  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1]
    const current = list[i]

    prev.left = current
    prev.right = null
  }
  console.log(list)
}

flatten({
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
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
})
