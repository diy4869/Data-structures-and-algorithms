var search = function (nums, target) {
  if (nums.length === 0) return false

  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let middle = low + high >> 1

    if (nums[middle] === target || nums[low] === target || nums[high] === target) return true
    if (nums[low] === nums[high]) {
      low++
      high--
    }
    if (nums[0] < target && target < nums[middle]) {
      low++
    } else {
      high--
    }
    
    
  }
};

search([2, 5, 6, 0, 0, 1, 2], 5)
search([2,5,6,0,0,1,2], 0)