/**
 * 
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n
 * @description 初始化 2 个变量，指向数组的最后一个位置，每次循环判断大小，如果条件符合，则移动对应的指针 
 * @returns 
 */
var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    nums2.forEach((item, index) => {
      nums1[index] = item
    })

    return nums1
  }

  let len = m + n - 1
  let r1 = m - 1
  let r2 = n - 1

  while (len >= 0) {
    if (nums1[r1] > nums2[r2]) {
      nums1[len--] = nums1[r1]
      r1--
    } else if (nums1[r1] < nums2[r2]) {
      nums1[len--] = nums2[r2]
      r2--
    } else if (nums1[r1] === nums2[r2]) {
      nums1[len--] = nums2[r2]

      r2 > r1 ? r1-- : r2--
    } else {
      if (r1 === -1) {
        nums1[len--] = nums2[r2--]
      }
      if (r2 === -1) {
        nums1[len--] = nums1[r1--]
      }
    }
  }

  return nums1
}


console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([1], 1, [], 0))
console.log(merge([0], 0, [1], 1))


