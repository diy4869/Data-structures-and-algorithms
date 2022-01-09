var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return []
  const arr = Array.from(new Array(m), () => [])

  while (m > 0) {
    let end = (m * n) - 1
    let start = (end - n) + 1

    for (let i = start; i <= end; i++) {
      arr[m - 1].push(original[i])
    }

    m--/**
    * @param {number[]} nums
    * @return {number[][]}
    */
   var subsets = function(nums) {
   
   };
  }

  return arr
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2))
console.log(construct2DArray([1, 2, 3], 1, 3))
console.log(construct2DArray([1, 2], 1, 1))
console.log(construct2DArray([3], 1, 2))