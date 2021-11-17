const Node = require('../index')

function arrayToBinaryTree (arr) {
  const root = arr[0]
  let treeNode = new Node(root)
  let index = 1

  const travense = (treeNode) => {
    const start = Math.pow(2, index - 1) - 1
    const end = Math.pow(2, index) - 1

    if (!(end > arr.length)) {
      index++
      const slice = arr.slice(start, end)
      const middle = Math.floor(slice.length / 2)

      let result = slice.reduce((node, current, currentIndex) => {
        if (slice.length === 1) {
          return node
        }
        console.log(2 * currentIndex + 1, 2 * currentIndex + 2)
        // 左子树
        if (currentIndex < middle) {
          if (currentIndex % 2 === 0) {
            node.left = new Node(current)
          } else {
            node.right = new Node(current)
          }
        } 
        // // 右子树
        if (currentIndex >= middle) {
          if (currentIndex % 2 === 0) {
            node.left = new Node(current)
          } else {
            node.right = new Node(current)
          }
        }

        return node
      }, treeNode)

      travense(result.left)
      // index = 1
      travense(result.right)

      return treeNode
    }
  }

  const result = travense(treeNode)
  console.log(treeNode)
  return treeNode
}

arrayToBinaryTree([1, 2, 3, 4, 5, 6, 7])

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

module.exports = arrayToBinaryTree
