/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  const dp = []

  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  
  /**
   * i - 1 不偷
   * i - 2 偷 + 当前的值
   * 
   * 状态转移方程
   * 
   * dp 为你之前偷到的钱
   * dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
   * 
   * 假设偷当前的话，那么上一个是不能偷的，而上上一个是可以偷的 + 当前可以偷的值
   * 就是当前可以偷到的最大的
   */
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  
  return dp[nums.length - 1]
}

rob([1, 2, 3, 1])
rob([2, 7, 9, 3, 1])
