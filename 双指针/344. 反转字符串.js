const reverseString = function (s) {
  let j = s.length - 1
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const temp = s[i]
    s[i] = s[j]
    s[j] = temp
    j--
  }

  return s
}

// reverseString(['h'])
// reverseString(['H', 'a', 'n', 'n', 'a', 'h'])

module.exports = reverseString
