var reverseWords = function (s) {
  const arr = s.split(' ')

  const result = arr.reduce((str, current, index) => {
    const reverse = current.split('').reverse().toString().replace(/(,)/g, '')


    return str + reverse + (index === arr.length - 1 ? '' : ' ')
  }, '')

  console.log(result)
}

reverseWords("Let's take LeetCode contest")