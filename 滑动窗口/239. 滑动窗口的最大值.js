var maxSlidingWindow = function (nums, k) {
  let left = 0
  let right = k
  let result = []

  const slice = (nums, start, len) => {
    return nums.slice(start, len ? start + len : nums.length)
  }

  while (right <= nums.length) {
    const arr = slice(nums, left, k)
    result.push(Math.max.apply(null, arr))
    left++
    right++
    
  }

  console.log(result)
  return result
}


const nums = []

for (let i = 0; i < 10 * 10000; i++) {
  nums.push(
    Math.random() * (10000 * 10 + 100) - 100
  )

}


console.time()
maxSlidingWindow([nums], 50000)
console.timeEnd()





