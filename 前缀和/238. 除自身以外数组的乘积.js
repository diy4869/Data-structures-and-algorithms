var productExceptSelf = function(nums) {
  const pre = new Array(nums.length).fill(1)
  const post = new Array(nums.length).fill(1)
  const result = new Array(nums.length).fill(1)

  // 从前往后计算每个的乘积
  for (let i = 1; i < nums.length; i++) {
      pre[i] = nums[i - 1] * pre[i - 1]
  }

  // 从后往前计算每个的乘积
  for (let i = nums.length - 2; i >= 0; i--) {
    post[i] = nums[i + 1] * post[i + 1]
  }

  // result 的结果就是 pre[i] * post[i]
  for (let i = 0; i < nums.length; i++) {
    result[i] = pre[i] * post[i]
  }

  return result
}

productExceptSelf([1, 2, 3, 4])
// productExceptSelf([])
