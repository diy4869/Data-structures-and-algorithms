function intToRoman(num) {
  const map = new Map([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M']
  ])


  if (map.has(num)) {
    return map.get(num)
  } else {
    return [...map.entries()].reduceRight((str, current) => {
      const [key, value] = current

      for (let i = num / key << 0; i > 0; i--) {
        str += value
        num -= key
      }

      return num === 0 ? str : str
    }, '')
  }
}

// intToRoman(3)
intToRoman(3994)