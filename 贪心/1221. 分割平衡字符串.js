const balancedStringSplit = (s) => {
  let l_count = 0
  let r_count = 0
  let result = 0
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      l_count++
    } else {
      r_count++
    }

    if (l_count === r_count) {
      result++
      l_count = 0
      r_count = 0
    }


  }
  console.log(result)
}


balancedStringSplit('RLRRLLRLRL') // 4
balancedStringSplit('RLLLLRRRLR') // 3
balancedStringSplit('LLLLRRRR') // 1
balancedStringSplit('RLRRRLLRLL') // 2
