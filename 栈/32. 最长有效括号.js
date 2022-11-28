var longestValidParentheses = function(s) {
  if (s === '') return 0

  let result = 0
  let start = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      start++
    } else {
      end++  
    }

    if (start === end) {
      result = Math.max(result, end * 2)
    } else if (end > start) {
      start = 0
      end = 0
    }
  }

  // 倒序遍历，处理左括号比右边大的情况  ()(() 
  start = 0
  end = 0

  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] === ')') {
      end++
    } else {
      start++  
    }

    if (start === end) {
      result = Math.max(result, start * 2)
    } else if (start > end) {
      start = 0
      end = 0
    }
  }

  return result
}

 longestValidParentheses('(()')
 longestValidParentheses(')()())')
 longestValidParentheses('(()())')
 longestValidParentheses('()()()()')
 longestValidParentheses('((((((()))))))')
 longestValidParentheses('()())')
 longestValidParentheses('()(()')