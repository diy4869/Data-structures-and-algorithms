var twoSum = function (numbers, target) {
  let l = 0
  let r = numbers.length - 1

  while (l <= r) {
    if (numbers[l] + numbers[r] === target) {
      return [l + 1, r + 1]
    }
    if (numbers[l] + numbers[r] < target) {
      l++
    }
    if (numbers[l] + numbers[r] > target) {
      r--
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))

