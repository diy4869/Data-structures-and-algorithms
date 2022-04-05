/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if (strs.length < 1) return ''
 
  let result = ''
  let minLen = Infinity
  let minIndex = Infinity

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < minLen) {
      minLen = strs[i].length
      minIndex = i
    }
  }

  for (let i = 0; i < strs[minIndex].length; i++) {
    const current = strs[minIndex][i]
    const every = strs.every(children => children[i] === current)

    if (every) {
      result += current
    } else {
      break
    }
  }

  return result
};

longestCommonPrefix(["flower","flow","flight"])

longestCommonPrefix(["dog","dacecar","car"])