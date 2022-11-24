// var lengthLongestPath = function(input) {
//   const list = input.split('\n')

//   let arr = []
//   let last = arr

//   for (let i = 0; i < list.length; i++) {
//     const result = list[i].match(/\t+/)
//     console.log(result)
    
//     if (result) {
//       const level = result[0].length
//       const name = list[i].trim()

//       if (level !== last.level && last.type === 'directory') {
//         last = last.children
//       }
//       if (name.endsWith('.ext')) {
//          last.push({
//           type: 'file',
//           level: level,
//           name: list[i].trim()
//         })
//       } else {
//         const dir = {
//           type: 'directory',
//           name: list[i].trim(),
//           level: level,
//           children: []
//         }
        
//         last.push(dir)
//         last = dir
//       }
//     } else {
//       last = {
//         type: 'directory',
//         name: list[i].trim(),
//         level: 0,
//         children: []
//       }
//       arr.push(last)
//     }
//   }
// }

var lengthLongestPath = function(input) {
  const list = input.split('\n')
  const stack = []

  let arr = []
  let last = arr

  for (let i = 0; i < list.length; i++) {
    const result = list[i].match(/\t+/)
    
    if (result) {
      const level = result[0].length
      const name = list[i].trim()

      const value =  {
        type: name.endsWith('.ext') ? 'file' : 'directory',
        name,
      }
      if (stack[level]) {
        stack[level].push(value)
      } else [
        stack[level] = [value]
      ]
    } else {
      stack[0] = [{
        type: 'directory',
        name: list[i].trim(),
      }]
    }
  }

  let max = 0
  let str = ''

  const len = stack.length

  for (let i = 0; i < len; i++) {
    stack.at(-1)
  }
}

lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext")