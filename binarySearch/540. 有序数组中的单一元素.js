/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNonDuplicate = function(nums) {
//   if (nums.length === 1) return nums[0]

//   let slow = 0
//   let high = nums.length - 1

//   while (slow <= high) {
//     const middle = (slow + high) >> 1


//     if (middle === 0 && nums[middle + 1] !== nums[middle]) {
//       return nums[middle]
//     }

//     if (middle === nums.length - 1 && nums[middle - 1] !== nums[middle]) {
//       return nums[middle]
//     }

//     if (nums[middle + 1] !== nums[middle] && nums[middle - 1] !== nums[middle]) {
//       return nums[middle]
//     }


//   }
// };

// console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))

var twoSum = function(nums, target) {
  nums.sort((a, b) => a - b)

  let low = 0
  let high = nums.length - 1

  while (low <= high) {
      if (nums[low] + nums[high] === target) {
          return [low, high]
      }
      if (nums[low] + nums[high] > target) {
          high--
      }
      if (nums[low] + nums[high] < target) {
          low++
      }
  }
};

twoSum([3, 2, 4], 6)