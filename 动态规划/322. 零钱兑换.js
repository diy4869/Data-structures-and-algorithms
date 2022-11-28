// var coinChange = function(coins, amount) {
//   // let max = amount + 1
  
//   const dp = [0]

//   for (let i = 1; i <= amount; i++) {

//     dp[i] = Infinity

//     for (let j = 0; j < coins.length; j++) {
//       if (i - coins[j] >= 0) {
//         dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
//       }
//     }
//   }

//   return dp[amount] > amount ? -1 : dp[amount]
// };

const coinChange = function (coins, amount) {
  // 用于保存每个目标总额对应的最小硬币个数
  const f = [];
  // 提前定义已知情况
  f[0] = 0;
  // 遍历 [1, amount] 这个区间的硬币总额
  for (let i = 1; i <= amount; i++) {
    // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
    f[i] = Infinity;
    // 循环遍历每个可用硬币的面额
    for (let j = 0; j < coins.length; j++) {
      // 若硬币面额小于目标总额，则问题成立
      if (i - coins[j] >= 0) {
        // 状态转移方程
        f[i] = Math.min(f[i], f[i - coins[j]] + 1);
      }
    }
  }
}


const coinChange = function (coins, amount) {
  coins.sort((a, b) => b - a)

  const map = new Map()

  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const obj = map.get(coins[i])

      if (obj) {
        if (coins[j] > obj.money) {
          continue
        } else {
          const count = obj.money / coins[j] >> 0

          map.set(coins[i], {
            count: obj.count + count,
            money: obj.money - (coins[j] * count)
          })
          console.log(obj.money - (coins[j] * count))
          if (obj.money - (coins[j] * count) <= 0) {
            break
          }
        }
      } else {
        map.set(coins[i], {
          count: amount / coins[i] >> 0,
          money: amount % coins[i]
        })
      }
     
    }
  }

  let result = Infinity

  for (let item of map) {
    const [_, value] = item
    const { count, money } = value

    if (money === 0) {
      result = Math.min(result, count)
    } else {
      return -1
    }
  }
  console.log(result)
  return result
}

coinChange([186,419,83,408], 6249)
// coinChange([1,2,5,10], 18)
// coinChange([1,2147483647], 2)
// coinChange([1, 2, 5], 11)
// coinChange([2], 3)
// coinChange([1], 0)