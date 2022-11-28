const { arrayToBinaryTree } = require('../二叉树/utils')

var binaryTreePaths = function (root) {
  const result = []

  const dfs = (root, stack = []) => {
    if (!root) {
      result.push(
        stack.slice().join('->')
      )
      return
    }

    stack.push(root.val)
    if (!root.left && !root.right) {
      dfs(root.right, stack)
    } else {
      root.left && dfs(root.left, stack)
      root.right && dfs(root.right, stack)
    }
    
    stack.pop()

  }
  

  dfs(root)

  return result
};

// binaryTreePaths(
//   arrayToBinaryTree([1, 2, 3, 4, 5])
// )


// binaryTreePaths(
//   arrayToBinaryTree([1, 2, 3, null, 5])
// )

// const list = [
//   { math: 'A', english: 'B', science: 'A', social: 'C' },
//   { math: 'B', english: 'A', science: 'A', social: 'B' },​
//   { math: 'C', english: 'A', science: 'C', social: 'D' },​
//   { math: 'C', english: 'D', science: 'A', social: 'B' }
// ];

// const result = list.map(item => {
//   return Object.entries(item).reduce((obj, current) => {
//     const [key, value] = current

//     if (obj[value]) {
//       obj[value] = [obj[value], key]
//     } else {
//       obj[value] = key
//     }
//     return obj
//   }, {})
// })

// .reduce((obj, current, currentIndex) => {
//   obj[current] = {}

//   return obj
// }, {})

const stack = ['country', 'state', 'city', 'town']

function render(stack, o = {}, value = '123') {
  const first = stack.shift()
  o[first] = {}

  if (stack.length === 1) {
    o[first][stack[0]] = value

    return o
  }

 return render(stack, o[first], value)
}
render(stack)

// list.groupBy((element) => {
//   console.log(element)
// })

// console.log(result)