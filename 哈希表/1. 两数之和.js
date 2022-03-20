var twoSum = function(nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
      if (map.has(target - nums[i])) {
        return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
};

twoSum([2, 7, 11, 15], 9)

twoSum([3, 2, 4], 6)


var twoSum = function(nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      result = [j, i]
      break
    }
  }
}
  return result
};