/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) return n

  let a = 1
  let b = 2
  let c

  /**
   * 当 楼梯为第三层的时候，需要 3 种方法
   * 
   * dp[n] = dp[i - 1] + dp[i - 2]
   * 
   * a 为 i - 2
   * b 为 i - 1
   * 
   * 每次需要爬楼梯的和为 a + b
   * 
   * a b 为上一次走楼梯需要的方法次数
   */

  for (let i = 3; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }

  console.log(c)
  return c
};

// climbStairs(2)
// climbStairs(3)
climbStairs(10)
