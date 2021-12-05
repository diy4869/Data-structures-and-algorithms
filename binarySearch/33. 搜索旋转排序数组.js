var search = function(nums, target) {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
      let middle = Math.round((low + high) / 2)

      if (nums[middle] < target) {
        low = middle + 1
      }
      if (nums[middle] > target) {
        low = middle + 1
      }
      if (nums[middle] === target) {
        return middle
      }
  }
};

search([4, 5, 6, 7, 0, 1, 2], 2)
search([4, 5, 6, 7, 0, 1, 2], 5)
search([1], 0)