/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0
  let r = height.length - 1
  let max = 0

  while (l < r) {
    // 盛水的范围区间
    const range = r - l
    // 每次计算的时候，需要找到区间内的最小值，这是因为容纳的水量是由两个指针中最小的 * 指针之间的距离
    const min = Math.min(height[l], height[r]) * range
    // 保存当前所计算出的最大值
    max = Math.max(max, min)

    if (height[l] <= height[r]) {
      l++
    } else {
      r--
    }
  }

  return max
};

maxArea([1,8,6,2,5,4,8,3,7])