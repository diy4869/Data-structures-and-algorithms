function isValid(s) {
  const start = []
  const end = []

  const findStr = (char, startStr, endStr) => {
    if (char === startStr) {
        start.push(char)
      } else if (char === endStr) {
        end.push(endStr)
        const startEndIndex = start.length - 1
        if (start[startEndIndex] === startStr) {
          start.pop()
          end.pop()
        }
      }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    findStr(char, '(', ')')
    findStr(char, '[', ']')
    findStr(char, '{', '}')
  }

  return start.length === 0 && end.length === 0  
}

console.log(isValid('([)]'))
console.log(isValid('()'))
console.log(isValid('((()))'))


