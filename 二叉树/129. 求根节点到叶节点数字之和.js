const { arrayToBinaryTree } = require('./utils')

const dfs = (root, prevSum) => {
  if (root === null) {
      return 0;
  }
  const sum = prevSum * 10 + root.val;
  if (root.left == null && root.right == null) {
      return sum;
  } else {
      return dfs(root.left, sum) + dfs(root.right, sum);
  }
}
var sumNumbers = function(root) {
  return dfs(root, 0);
}

sumNumbers(
  arrayToBinaryTree([1,2,3,4,5,6])
)

let a = 0
let b = async () => {
  a = a + await 10
  console.log(a)
}
b()
console.log(++a)
