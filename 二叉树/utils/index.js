const Node = require('../index')

function arrayToBinaryTree (arr) {
  const first = arr.shift()
  const treeNode = new Node(first)


  const travense = (node) => {
    if (arr.length === 0) return
    
    node.left = new Node(arr.shift())
    node.right = new Node(arr.shift())

    travense(node.left)
    travense(node.right)
    // return node
  }

  travense(treeNode)



  // }
  console.log(treeNode)
  return treeNode
}

arrayToBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9])

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
