const { arrayToBinaryTree } = require('./utils')

/**
 * 
 * @param {*} root 
 * @description 解法一 暴力查找 O(n) 时间复杂度 
 */
var countNodes = function (root) {
  let count = 0
  
  const dfs = (root) => {
      if (!root) return
      count++

      if (root.left) dfs(root.left)
      if (root.right) dfs(root.right)
  }

  dfs(root)

  return count
}

/**
 * 
 * @param {*} root 
 * @description 解法二 由于完全二叉树本身只有最后一层节点不是满的，所以我们只需要判断最后一层节点是否存在即可
 */
//  var countNodes = function (root) {
//   let count = 0

//   let leftNode = root
//    let level = 0
   
//   while (leftNode) {
//     leftNode = leftNode.left
//     level++
//    }
   
//   const start = Math.pow(2, level - 1)
//   const end = Math.pow(2, level) - 1

// };

const exists = (root, level, k) => {
  let bits = 1 << (level - 1);
  let node = root;
  while (node !== null && bits > 0) {
      if (!(bits & k)) {
          node = node.left;
      } else {
          node = node.right;
      }
      bits >>= 1;
  }
  return node !== null;
}

var countNodes = function(root) {
  if (root === null) {
      return 0;
  }
  let level = 0;
  let node = root;
  while (node.left !== null) {
      level++;
      node = node.left;
  }
  let low = 1 << level, high = (1 << (level + 1)) - 1;
  while (low < high) {
      const mid = Math.floor((high - low + 1) / 2) + low;
      if (exists(root, level, mid)) {
          low = mid;
      } else {
          high = mid - 1;
      }
  }
  return low;
};

countNodes(
  arrayToBinaryTree([1, 2, 3,4,5,6])
)