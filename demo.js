function a (n) {
  const map = new Map()
  const result = []
  for (let i = 1; i <= n; i++) {
    map.set(i * i,  { sum: i * i, key: i})
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const sum = (i * i) + (j * j)
      if (map.get(sum)?.sum - sum === 0) {
        result.push([i, j, map.get(sum).key])
      }
    }
  }

  console.log(result)
}

a(10)