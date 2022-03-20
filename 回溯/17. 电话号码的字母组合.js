/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
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
  const stack = []
  const arr = digits.split('')



  for (let i = 0; i < arr.length; i++) {
    const list = map.get(arr[i])
    stack.push(list)

    while (stack.length) {
      const first = stack.shift()

      for (let i = 0; i < first.length; i++) {
        result.push(first[i])
      }
    }
  }
  console.log(result)
  
};

letterCombinations('2')
letterCombinations('23')
letterCombinations('234')