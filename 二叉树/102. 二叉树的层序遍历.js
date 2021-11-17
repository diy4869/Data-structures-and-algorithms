var levelOrder = function (root) {
  const result = []
  if (root === null) return result
  
  const bfs = (node, level = 0) => {
    if (node === null) return
    let list = []

    if (level === 0) {
      list.push(root.val)
    } else {
      if (node.left) {
        list.push(node.left.val)
        bfs(node.left, level + 1)
      }

      if (node.right) {
        list.push(node.right.val)
        bfs(node.right, level + 1)

      }
    }

    return list
  }

  const data = bfs(root)


    result.push(data)
  

  console.log(result)
  return result
}


const result = levelOrder({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
})

console.log(result)