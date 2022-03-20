/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let low = 0
  let high = nums.length - 1

  while (low < high) {
    const middle = low + high >> 1

    // 为 0 说明在左边，否则在右边
    if (middle % 2 === 0) {
      if (nums[low] < nums[middle]) {
        low = middle + 1
      } else {
        high = middle
      }
    } else {
      if (nums[high] < nums[middle]) {
        low = middle
      } else {
        high = middle - 1
      }
    }
  }

  // return middle
};

singleNonDuplicate([1,1,2,3,3,4,4,8,8])
singleNonDuplicate([3,3,7,7,10,11,11])