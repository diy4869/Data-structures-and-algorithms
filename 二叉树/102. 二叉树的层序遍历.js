/**
 * 
 * @param {*} root 
 * @description 解法一 DFS 深度优先，每次递归通过 level 确定当前层级，从而给数组对应层级添加 node
 */
// var levelOrder = function (root) {
//   if (root === null) return []
//   let result = []

//   const dfs = (node, level = 0) => {
//     if (node === null) return

//     result[level] = !result[level] ? [] : result[level]
//     result[level].push(node.val)

//     if (node.left) {
//       dfs(node.left, level + 1)
//     }
//     if (node.right) {
//       dfs(node.right, level + 1)
//     }
//   }

//   dfs(root)

//   return result
// }

/**
 * 
 * @param {*} root 
 * @description 解法二 BFS 广度优先 
 */
const levelOrder = function (root) {
  const result = []

  if (!root) return result

  const q = []
  q.push(root)

  while (q.length !== 0) {
    const currentLevelSize = q.length
    result.push([])

    for (let i = 0; i < currentLevelSize; ++i) {
      const node = q.shift()

      result[result.length - 1].push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }

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