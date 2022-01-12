/**
 * @param {number[]} nums
 * @return {boolean}
 * @description 贪心 
 * 初始化一个长度为 3 的数组，题目要求 i < j < k 一个连续的三元组，所以这里只用循环 nums 数组
 * 如果 比 第二个大 返回 true 比第 0 个大 设置 第一个为 nums[i] 否则 设置 第 0 个，如果没有 返回 false
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) return false

  const arr = [
    nums[0]
  ]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > arr[1]) {
      arr[2] = nums[i]
      return true
    } else if (nums[i] > arr[0]) {
      arr[1] = nums[i]
    } else  {
      arr[0] = nums[i]
    }
  }

  return false
};

console.log(increasingTriplet([1, 2, 3, 4, 5]))
console.log(increasingTriplet([5, 4, 3, 2, 1]))
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))