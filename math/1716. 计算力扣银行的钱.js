/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
  let totalWeek = n / 7 << 0
   let result = 0
   let week = 0
  

   for (let i = 1; i <= n; i++) {
     result += i % 7 === 0 ? week + 7 : i % 7 + week

     if (i % 7 === 0) week++
   }

   return result
};

totalMoney(4)

totalMoney(10)

totalMoney(20)

var rangeBitwiseAnd = function(left, right) {
  while (left < right) {
    right = right & (right - 1)
  }

  return right
};

// rangeBitwiseAnd(5, 7)
console.time()
rangeBitwiseAnd(1, 2147483647)
console.timeEnd()
// rangeBitwiseAnd(5, 7)