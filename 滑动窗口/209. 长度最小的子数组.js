/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function (target, nums) {
  const len = nums.length - 1

  let start = 0
  let end = 0
  let result = Infinity
  let sum = 0

  while (end <= len) {
    sum = nums.slice(start, end).reduce((total, current) => total + current, 0)

    if (sum >= target) {
      start++
      const min = end - start
      result = Math.min(result, min <= 0 ? 0 : min)
    } else {
      end++
    }
  }

  return result === Infinity ? 0 : result
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
console.log(minSubArrayLen(1, [1]))