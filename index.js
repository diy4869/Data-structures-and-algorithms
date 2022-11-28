const keyArr = ['key1', 'key2', 'key3', 'key4']; 
const valArr1 = ['val11', 'val12', 'val13', 'val14'];
const valArr2 = ['val21', 'val22', 'val23', 'val24'];
const valArr3 = ['val31', 'val32', 'val33', 'val34'];

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
