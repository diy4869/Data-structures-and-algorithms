/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  const map = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ])

  const result = []
  const arr = digits.split('')

  const backtrack = (current, index = 0, stack = []) => {
    if (stack.length === arr.length) {
      result.push(
        stack.join('')
      )
      return
    }
    const list = map.get(current)

    for (let i = 0; i < list.length; i++) {
      stack.push(list[i])
      backtrack(arr[index + 1], index + 1, stack)
      stack.pop()
    }
  }

  backtrack(arr[0])
  return result
}

// letterCombinations('2')
// letterCombinations('2345')
console.time()
letterCombinations('234567859')
console.timeEnd()
