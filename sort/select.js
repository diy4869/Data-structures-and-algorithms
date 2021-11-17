const random = require('./index')

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

      }

    }
  }
}

console.time('sort')
random(500000, 10, 1).sort((a, b) => a - b)
console.timeEnd('sort')


console.time()
bubble(random(500000, 10, 1))
console.timeEnd()


