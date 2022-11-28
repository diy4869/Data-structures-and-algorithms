/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @description 解题思路
 * 由于这题要求使用 O（logn） 的时间复杂度，所以对于搜索查找只能使用二分查找，然而二分查找要求数组必须是有序的
 * 然而该题属于部分有序，所以我们也依然可以使用二分查找
 * 
 * 我们可以通过 2个变量 来保存数组第一个和最后一个的结果，如果第一个比中间值要小，说明左边有序，否则右边有序
 * 如果小于的话，我们可以通过判断 target 是不是比中间值要小，并且 数组第一个也要小于 target，
 * 这时候就可以调整 high 的上边界，否则调整下边界
 * 
 * 如果 nums[0] 大于 middle，这样我们判断中间值是不是要比target 小 并且 target 是不是也比数组的最后一位小
 * 如果小的话，说明 我们需要调整下边界，否则调整上边界
 * 
 * 如果没找到的话，返回 -1 即可
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1
  let low = 0
  let high = nums.length - 1
  let end = nums.length - 1

  while (low <= high) {
    let middle = Math.round((low + high) / 2)

    if (nums[middle] === target) {
      return middle
    }

    if (nums[0] <= nums[middle]) {
      if (target < nums[middle] && nums[0] <= target) {
        high = middle - 1
      } else {
        low = middle + 1
      }
    } else {
      if (nums[middle] < target && target <= nums[end]) {
        low = middle + 1
      } else {
        high = middle - 1
      }
    }
  }
  
  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([4, 5, 6, 7, 0, 1, 2], 7))
console.log(search([4, 5, 6, 7, 8, 9, 10, 0, 1, 2], 1))
console.log(search([4, 5, 6, 7, 8, 9, 10, 0, 1, 2], 6))
console.log(search([1], 0))
