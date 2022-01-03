const Node = require('../index')

function arrayToBinaryTree (arr) {
  if (!arr.length) return null

  let index = 0
  const queue = []
  const len = arr.length
  const head = new Node(arr[index])
  queue.push(head)

  while (index < len) {
    index++
    const parent = queue.shift()
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new Node(arr[index])
      parent.left = node
      queue.push(node)
    }

    index++

    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new Node(arr[index])
      parent.right = node
      queue.push(node)
    }
  }

  return head
  
}





module.exports.arrayToBinaryTree = arrayToBinaryTree
