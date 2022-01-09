var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length
  
  let slow = 0
  let fast = 1

  while (fast <= nums.length) {
    if (nums[slow] === nums[fast]) {
      ++fast
    } else {
      ++slow
      nums[slow] = nums[fast]
    }
  }

  return slow
};
console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([1, 1, 2, 3, 3,3, 3, 4, 4, 5]))
