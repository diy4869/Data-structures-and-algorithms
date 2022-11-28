module.exports = function (count, max, min) {
  const arr = []

  for (let i = 0; i <= count; i++) {
    arr.push(
      Math.floor(Math.random() * (max - min) + min)
    )
  }
  return arr
}

