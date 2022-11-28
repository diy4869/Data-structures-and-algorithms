var levelOrder = function(root) {
  const result = [
      [root.val]
  ]
  const stack = [root]

  while (stack.length) {

      const first = stack.shift()

      for (let i = 0; i < first?.children.length; i++) {
          if (first.children[i]) {
            stack.push(first.children[i])
          }
      }
      console.log(stack)

  }

  return result
};

levelOrder({

})