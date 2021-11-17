/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {

 

  const dfs = (root1, root2) => {
    if (!root1) return root2
    if (!root2) return root1

    if (root1?.val && root2?.val) {
      root1.val = root1.val + root2.val
    }
    root1.val = root1.val ? root1.val : root2.val ? root2.val : null

    root1.left = dfs(root1.left, root2.left)
    root1.right = dfs(root1.right, root2.right)


    return root1
  }

  dfs(root1, root2)
  console.log(root1)
  return root1
}

mergeTrees(
  {
    val: 1,
    left: {
      val: 3,
      left: {
        val: 5,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null
      }
    },
    right: {
      val: 3,
      left: null,
      right: {
        val: 7,
        left: null,
        right: null
      }
    }
  }
)
