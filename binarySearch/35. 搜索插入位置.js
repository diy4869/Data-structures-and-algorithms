function searchInsert (nums, target) {
  if (target === 0) return 0

  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    const middle = (low + high) >> 1
    if (nums[middle] === target) {
      return middle
    }
    if (nums[middle] < target) {
      console.log(nums[middle])
    }
  }
}
