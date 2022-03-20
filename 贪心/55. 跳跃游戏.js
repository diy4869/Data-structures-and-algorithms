/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length
  let rightmost = 0
  for (let i = 0; i < n; ++i) {
    /**
     * i 的话，是当前的位置，每次从当前位置起跳
     * rightmost 是当前可以跳跃的最远位置 初始为 0
     * 如果当前的位置 小于 可以跳的最远位置，则更新最远位置
     * 如果 i 已经大于可以跳的最远位置 则返回 false
     * 
     */
    if (i <= rightmost) {
      // 可以跳跃的最大位置
      rightmost = Math.max(rightmost, i + nums[i])
      // 如果当前可以跳跃的最大位置大于等于数组长度的话，返回 true
      if (rightmost >= n - 1) {
        return true
      }
    }
  }
  return false
}

// console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))

var canJump = function(nums) {
  const max = nums.length - 1
  let jumpMax = 0

  for (let i = 0; i < nums.length; i++) {
      if (i > jumpMax) return false
      jumpMax = Math.max(jumpMax, i + nums[i])
      if (jumpMax >= max) return true
  }

  return false
};
