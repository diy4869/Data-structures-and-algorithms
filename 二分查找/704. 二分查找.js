// /**
//  * 二分查找是通过每次计算数组中间的值，并通过low和high记录一个最高和最低值，并且每次循环计算的时候，不算缩小low和high的差距，最终并返回结果
//  * 
//  * 二分查找适合有序的数组，时间复杂度为O(logn)
//  */
// function search(nums, target) {
//   let low = 0
//   let high = nums.length - 1

//   while (low <= high) {
//     let middle = (low + high) >> 1

//     if (nums[middle] < target) {
//       low = middle + 1
//     }
//     if (nums[middle] > target) {
//       high = middle - 1
//     }
//     if (nums[middle] === target) {
//       return middle
//     }
//   }

//   return -1
// }

// console.log(search([1, 2, 3, 4, 8, 8, 8, 9, 9, 9], 9))

// /**
//  * 
//  * @param {number[]} nums 
//  * @param {number} target 
//  * @description 普通的二分查找无法判断查找到的middle是哪一个，
//    所以可以通过判断middle 是否为0，或者middle之前的数字是不是target，如果不是，则说明middle是第一个，否则继续通过 缩小high的边界
//  */
function firstSearch (nums, target) {
  let low = 0
  let high = nums.length - 1
  let middle = 0

  while (low <= high) {
    middle = (low + high) >> 1

    if (nums[middle] < target) {
      low = middle + 1
    }
    if (nums[middle] > target) {
      high = middle - 1
    }
    if (middle === 0 &&  nums[middle] === target) return middle
    if (nums[middle - 1] !== target) return middle
    high = middle - 1

  }

  return -1
}

function lastSearch (nums, target) {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let middle = (low + high) >> 1

    if (nums[middle] < target) {
      low = middle + 1
    }
    if (nums[middle] > target) {
      high = middle - 1
    }

    if (nums[middle] === target) {
      if (nums[middle + 1] !== target) return middle
      low = middle + 1
    } 
  }

  return -1
}

// // console.log(lastSearch([8, 8, 8, 9, 9, 9, 10, 11], 8))


const find = (arr, target) => {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let middle = Math.floor((low + high) / 2)

    if (arr[middle] === target) return middle
    if (arr[middle] < target) {
      low = middle + 1
    } else {
      high = middle - 1
    }
  }

  return -1

}

const findReverse = (arr, target) => {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let middle = Math.floor((low + high) / 2)

    if (arr[middle] === target) return middle
    if (arr[middle] < target) {
      high = middle - 1
    } else {
      low = middle + 1
    }
  }

  return -1

}

const result = find([1, 2, 3, 4, 5, 6], 5)

console.log(findReverse([5, 4, 3, 2, 1], 12))
console.log(findReverse([5, 4, 3, 2, 1], 1))
