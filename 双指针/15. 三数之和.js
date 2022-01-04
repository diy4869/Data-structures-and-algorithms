/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums || nums.length < 3) return []

  // 对数组进行排序
  nums.sort((a, b) => a - b)

  // 最终的结果
  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue // 去重

    // 双指针
    let l = i + 1
    let r = nums.length - 1

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]

      // 大于 0， 说明需要缩小右边界
      if (sum > 0) {
        r--
      }

      // 小于 0， 说明需要增加左边界
      if (sum < 0) {
        l++
      }

      // 说明找到结果
      if (sum === 0) {
        result.push(
          [nums[i], nums[l], nums[r]]
        )

        // 如果 当前值 等于 下一个 就 l++ 或者 r--
        while (l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--
        }
        
        // 当前的已经遍历过，需要 l++ r--
        l++
        r--
      }
    }
  }

  console.log(result)

  return result
}

threeSum([-1, 0, 1, 2, -1, -4])
