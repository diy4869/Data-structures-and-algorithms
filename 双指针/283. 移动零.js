// var moveZeroes = function (nums) {
//   let arr = []
//   let count = 0
    
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count++
//     } else {
//       arr.push(nums[i])
//     }
//   }
//   arr = [...arr, ...new Array(count).fill(0)]

//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = arr[i]
//   }

//   return nums
// }

/**
 * 
 * @description 每次循环判断当前值是否为0，如果不是0，保存当前值，并做交换，就和最左边第一个为0的进行交换
 * 第零次 [0, 1, 0, 3, 12]
 * 第一次 [1, 0, 0, 3, 12]
 * 第二次 [1, 3, 0, 0, 12]
 * 第三次 [1, 3, 12, 0, 0]
 */
var moveZeroes = function (nums) {
  let right = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i] 
      nums[i] = nums[right]
      nums[right] = temp
      right++
    }
  }
}

moveZeroes([0, 1, 0, 3, 12])

