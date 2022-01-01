const { arrayToBinaryTree } = require('./utils')

var largestValues = function (root) {
  if (!root) return []

  const queue = []
  const result = []

  queue.push(root)
  // result.push(root.val)

  while (queue.length) {
    const len = queue.length
    const current = []

    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      
      current.push(node.val)
      
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    result.push(Math.max(...current))
  }

  return result
};

largestValues(
  arrayToBinaryTree([1, 3, 2, 5, 3, null, 9])
)
