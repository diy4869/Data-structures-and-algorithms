var romanToInt = function (s) {
  const map = new Map([
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000]
  ])

  let result = 0
  let i = 0

  while (i < s.length) {
    if (s[i] === 'I') {
      if (s[i + 1] === 'V' || s[i + 1] === 'X') {
        result += map.get(s[i] + s[i + 1])
        i += 2
      } else {
        result += map.get(s[i])
        i += 1
      }
     
    } else if (s[i] === 'X') {
      if (s[i + 1] === 'L' || s[i + 1] === 'C') {
        result += map.get(s[i] + s[i + 1])
        i += 2
      } else {
        result += map.get(s[i])
        i += 1
      }
      
    } else if (s[i] === 'C') {
      if (s[i + 1] === 'D' || s[i + 1] === 'M') {
        result += map.get(s[i] + s[i + 1])
        i += 2
      } else {
        result += map.get(s[i])
        i += 1
      }
     
    } else {
      result += map.get(s[i])
      i += 1
    }
  }

  return result
};
romanToInt('III')
romanToInt('IX')
romanToInt('LVIII')
romanToInt('MCMXCIV')
