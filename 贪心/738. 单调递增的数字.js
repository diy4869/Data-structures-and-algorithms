function monotoneIncreasingDigits(n) {
  if (n < 10) return n
  if (n === 10) return 9
}

console.log(monotoneIncreasingDigits(10))
console.log(monotoneIncreasingDigits(1234))
console.log(monotoneIncreasingDigits(332))
