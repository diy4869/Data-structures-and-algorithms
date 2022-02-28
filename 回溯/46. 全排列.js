/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  const stack = []

  const backtrace = ( visited) => {
    if (stack.length === nums.length) {
      const copy = stack.slice()

      result.push(copy)
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue
      stack.push(nums[i])
      
      visited[i] = true
      backtrace(visited)
      stack.pop()
      visited[i] = false
    }
  }

  
  console.time()
  backtrace([])
  console.timeEnd()

  console.log(result)
};

// permute(new Array(5).fill(undefined).map((_, index) => index))
permute(new Array(10).fill(undefined).map((_, index) => index))