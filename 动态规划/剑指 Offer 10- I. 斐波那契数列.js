function fib (n) {
  if (n < 2) return n
  
  let a = 0
  let b = 0
  let c = 1
  const MOD = 1000000007

  for (let i = 2; i <= n; i++) {
    a = b
    b = c
    c = (a + b) % MOD
  }
  console.log(c)
  // return fib(n - 1) + fib(n - 2)
}
console.time()
console.log(fib(20))
console.timeEnd()