const { arrayToBinaryTree } = require('./utils')

var connect = function (root) {
  if (!root) return null

  const queue = [root]
  
  while (queue.length) {
    const len = queue.length 

    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      
      // 拿到栈中的第一个节点，并把 node.next 指向第一个节点，如果当前节点是当前层的最后一个节点，就为 null
      // 不存在的话，直接把 node.next 置空
      if (queue[0]) {
        node.next = i === len - 1 ? null : queue[0]
      } else {
        node.next = null
      }

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return root
};

connect(
  arrayToBinaryTree([1,2,3,4,5,6,7, 8, 9])
)