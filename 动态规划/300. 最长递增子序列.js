/**
 * 
 * @param {*} nums 
 * @param {*} val 
 * @description 寻找插入位置 二分查找
 */
const findInsertIndex = (nums, target) => {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let middle = low + high >> 1

    if (nums[middle] === target) return middle
    if (nums[middle] < target) {
      low = middle + 1
    }
    if (nums[middle] > target) {
      high = middle - 1
    }
  }
  
  return low
}

findInsertIndex([1, 2, 3, 5, 6], 8)

var lengthOfLIS = function (nums) {
  if (nums.length <= 1) return nums
  
  const list = []

  for (let i = 0; i < nums.length; i++) {
    const index = findInsertIndex(list, nums[i])
    if (index > list.length) {
      list.push(nums[i])
    } else {
      list[index] = nums[i]
    }
  }

  return list.length
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
lengthOfLIS([0, 1, 0, 3, 2, 3])
lengthOfLIS([7,7,7,7,7,7,7])