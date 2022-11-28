function exchange(nums){
  if (nums.length <= 1) return nums

  let slow = 0
  let fast = nums.length - 1

  while (slow <= fast) {

    if (nums[slow] % 2 === 0) {
      const temp = nums[slow]
      nums[slow] = nums[fast]
      nums[fast] = temp
      fast--
    }
    slow++
    
  }

  return nums
};

exchange([1,2,3,4, 5, 6])