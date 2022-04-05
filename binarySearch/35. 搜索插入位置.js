/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
      const middle = (left + right) >> 1

      if (nums[middle] < target) {
          left = middle + 1
      }

      if (nums[middle] > target) {
          right = middle - 1
      }
      
      if (nums[middle] === target) {
          return middle
      }
  }

  return left
  
};