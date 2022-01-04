/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function (target, nums) {
  const len = nums.length 

  let start = 0
  let end = 0
  let result = Infinity
  let sum = 0

  while (end < len) {
      sum += nums[end]
      
      while (sum >= target) {
        result = Math.min(result, end - start + 1)
          sum -= nums[start++]
    }
    end++
  }

  return result === Infinity ? 0 : result
};



console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])) // 2
console.log(minSubArrayLen(4, [1, 4, 4])) // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])) // 0
console.log(minSubArrayLen(1, [1])) // 1