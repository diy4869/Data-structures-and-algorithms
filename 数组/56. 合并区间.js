// var merge = function (intervals) {
//   const map = new Map()

//   const sort = intervals.sort((a, b) => a[0] - b[0])

//   for (let i = 0; i < sort.length; i++) {
//     const [start, end] = sort[i]

//     if (map.has(start)) {
//       const old = map.get(start)
//       map.set(start, Math.max(old, end))
//     } else {

//       if (i > 0) {
//         const last = [...map.entries()].at(-1)

//         const min = Math.min(last[0], start)
//         const max = Math.max(last[1], end)

//         map.set(min, max)
//       } else {
//         map.set(start, end)
//       }

//     }

//   }
//   console.log(map)

//   // console.log(sort)
// }

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]) // 对每个数组的首元素进行升序排序

  const result = [] // 结果集
  let temp = intervals[0] // 取第一个数组作为临时变量

  for (let i = 1; i < intervals.length; i++) {
    const item = intervals[i]
    if (temp[1] >= item[0]) {
      // 此时说明有交集，取右边界大的元素来实现区间合并
      temp[1] = Math.max(temp[1], item[1])
    } else {
      // 没有交集直接放入结果集
      result.push(temp)
      temp = item
    }
  }
  result.push(temp) // 将最后的临时变量也放入结果集
  return result
}

merge([
  [1, 4],
  [0, 1],
])
merge([
  [1, 4],
  [4, 5],
])
merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
])

merge([
  [0, 3],
  [2, 6],
  [0, 10],
  [15, 18],
])
