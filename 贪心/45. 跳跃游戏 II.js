/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let step = 0
  let maxJump = 0
  let end = 0

  for (let i = 0; i < nums.length - 1; i++) {
    // 当前可以跳跃到的最远距离
    maxJump = Math.max(maxJump, i + nums[i])

    /**
     * end 为上一次可跳跃的最远距离
     * 如果 i 已经到了上次最远的距离，那就更新 end，并 step++
     * 如果在 i 到达 end 之前，maxJump 更新的话，这样反而中间的是不需要计算的
     * 这样的话，就可以拿到在 i - end 之间的最大值
     */
    if (i === end) {
      end = maxJump
      step++
    }
  }

  // console.log()
  return step
};

jump([2, 3, 1, 1, 4])
jump([2, 3, 0, 1, 4])
