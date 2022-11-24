/**
 * 
 * @description 这道题考察 二分查找算法。常规的二分搜索让你在 nums 中搜索目标值 target，但这道题没有给你一个显式的 target，怎么办呢？

其实，二分搜索的关键在于，你是否能够找到一些规律，能够在搜索区间中一次排除掉一半。比如让你在 nums 中搜索 target，你可以通过判断 nums[mid] 和 target 的大小关系判断 target 在左边还是右边，一次排除半个数组。

所以这道题的关键是，你是否能够找到一些规律，能够判断缺失的元素在哪一边？

其实是有规律的，你可以观察 nums[mid] 和 mid 的关系，如果 nums[mid] 和 mid 相等，则缺失的元素在右半边，如果 nums[mid] 和 mid 不相等，则缺失的元素在左半边。

二分查找算法 中说到了二分搜索的几种形式，我就用搜索左侧边界的二分搜索定位缺失的元素位置。
 */
var missingNumber = function(nums) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (middle === nums[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return left
};

// missingNumber([0, 1, 3])
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]))