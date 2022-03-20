function pivotIndex(nums) {
  const pre = [0]
  const post = new Array(nums.length + 1).fill(0)

  for (let i = 0; i < nums.length; i++) {
    pre[i] = nums[i] + pre[pre.length - 1]
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    post[i] = nums[i ] + post[i + 1]
  }

  let left = 0
  let right = post.length - 1

  while (left < right) {
    if (pre[left] === post[right]) {
      return right
    }
    left++
    right--
  }
  // console.log(pre)

  return -1
};
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))


try {
  JSON.stringify(obj)

  return false
} catch {
  return true
}