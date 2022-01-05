function multiply(A, B) {
  let i = 0
  let res = 0
  const calc = (a, b) => {
    
    if (i === B) {
      return res
    } else {
      i++
      res = res + a
      return calc(a, b)
    }
  }
  return calc(A, B)
}


console.log(multiply(0, 0))
