/**
 * @param {number} n
 * @return {number}
 */
 var binaryGap = function(n) {
  const bit = n.toString(2)
  const arr = []

  for (let i = 0; i < bit.length; i++) {
      if (bit[i] === '1') arr.push(i)
  }
  
  let first = arr[0]
  let end = arr[1]
  let result = 0

  for (let i = 1; i <= arr.length; i++) {
      result = Math.max(result, end - first)
      first = arr[i - 1]
      end = arr[i]
  }

  return Object.is(result, NaN) ? 0 : result
}