var generateParenthesis = function (n) {
  const result = []

  const backtrack = (stack = [], left = n, right = n) => {
    if (left > right) {
      return
    }
    if (left === 0 && right === 0) {
      result.push(stack.join(''))
      return
    }

    if (left > 0) {
      backtrack([...stack, '('], left - 1, right)
    }
    if (right > 0) {
      backtrack([...stack, ')'], left, right - 1)
    }
    
  }
  backtrack()
  console.log(result)
}

generateParenthesis(0)
