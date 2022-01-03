var levelOrderBottom = function(root) {
  if (!root) return []

  let result = []
  let stack = [root]

  while (stack.length !== 0) {
    const len = stack.length

    result.unshift([])
    
    for (let i = 0; i < len; i++) {
      const node = stack.shift()
      result[0].push(node.val)

      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
  }

  return result
};

const result = levelOrderBottom({
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