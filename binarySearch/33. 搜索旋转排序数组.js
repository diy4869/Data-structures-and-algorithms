var search = function (nums, target) {
  let low = 0
  let high = nums.length - 1
  const left = nums[0]
  const right = nums[nums.length - 1]

  while (low <= high) {
    let middle = Math.round((low + high) / 2)

    if (nums[middle] === target) {
      return middle
    }

    if (nums[left] < nums[middle]) {
      if (nums[0] <= target && target < nums[middle]) {
        high = middle - 1
      } else {
        low = middle + 1
      }
    } else {
      if (nums[middle] < target && target <= nums[right]) {
        low = middle + 1
      } else {
        high = middle - 1
      }
    }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 2))
console.log(search([4, 5, 6, 7, 0, 1, 2], 5))
console.log(search([1],0))

