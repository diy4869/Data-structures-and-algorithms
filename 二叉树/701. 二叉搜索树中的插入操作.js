const TreeNode = require('./index')

/**
 * @description 通过 二叉树 后序遍历去查找节点，并利用二叉搜索树的特性就可以实现插入
 */
var insertIntoBST = function (root, val) {
  if (root === null) return new TreeNode(val)
  if (root === val) return root
  
  if (val < root.val) {
      root.left = insertIntoBST(root.left, val)
  } else if (val > root.val) {
      root.right = insertIntoBST(root.right, val)
  }

  return root
}

insertIntoBST(
  {
    val: 4,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    },
    right: {
      val: 7,
      left: null,
      right: null
      // left: {
      //   val: 4,
      //   left: null,
      //   right: null
      // },
      // right: {
      //   val: 3,
      //   left: null,
      //   right: null
      // }
    }
  },
  5
)
