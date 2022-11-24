
const list = [
  {
    span: 8
  },
  {
    span: 8
  },
  {
    span: 8
  },
  {
    span: 16
  },
  {
    span: 24
  },
  {
    span: 8
  }
]


// function demo (arr) {
//   const result = [];
//   const backtrack = ( stack = [], sum = 0) => {
//     if (sum === 24) {
//       result.push(stack)
//       sum = 0
//       return
//     } else {
//       if  (sum < 24) {
//         const first = arr.shift()
//         backtrack([...stack,  first], sum + first.span)
//         if (stack.length === 0) {
//           const first = arr.shift()
//           if (first) {
//             backtrack([...stack,  first], sum + first.span)
//           }
//         }
//       } else {
//         const last = stack.pop()
//         arr.push(last)
//         backtrack(stack, sum - last.span)
//       }
//     }
//   }

//   while (arr.length) {
//     backtrack()
//   }

//   return result;
// }

function demo (arr) {
  let sum = 0
  let result = []

  const sort = arr.sort((a, b) => a.span - b.span)
  sort.reduce((total, current) => {
    sum +=  current.span
    if (sum === 24) {
      total.push(current)
      result.push(total)
      sum = 0;
      total = []
      return total
    }
    if (sum < 24) {
      total.push(current)
      return total
    }

    
  }, [])

  return result;
}
demo(list)