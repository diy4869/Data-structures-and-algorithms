function binarySearch(nums, target, type) {
  let low = 0
  let high = nums.length - 1
  let middle = 0

  while (low <= high) {
    middle = (low + high) >> 1

    if (nums[middle] < target) {
      low = middle + 1
    }
    if (nums[middle] > target) {
      high = middle - 1
    }
    if (nums[middle] === target) {
      if (type === 'first') {
        if (middle === 0 || nums[middle - 1] !== target) return middle
        high = middle - 1
      } else {
        if (nums[middle + 1] !== target) return middle
        low = middle + 1
      }
    }
  }

  return -1
}

var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1]

  const first = binarySearch(nums, target, 'first')
  const last = binarySearch(nums, target, 'last')

  return [first, last]
}

console.log(searchRange([5, 7, 7, 8, 8,8, 8,8,8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([5, 7, 7, 8, 8, 10], 5))
console.log(searchRange([], 0))

function reduce(arr, fn, initval) {
  let result = initval ?? arr[0]

  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i], i)
  }

  return result
}