/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(...nums)

  const len = nums.length - 1

  const range = (start, end) => {
    let first = nums[start]
    let second = Math.max(nums[start], nums[start + 1])
  
    for (let i = start + 2; i < end; i++) {
      let temp = second
      second = Math.max(second, first + nums[i])
      first = temp
    }
  
    return second
  }
  
  return Math.max(
    range(0, nums.length - 1, len), // 第一个 到 倒数第一个
    range(1, nums.length, len) // 跳过 第一个 从第二个开始偷到最后一个
  )
}

console.log(rob([2, 3, 2]))
console.log(rob([1, 2, 3, 1]))
console.log(rob([1, 2]))