/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  const stack = []

  const backtrack = (target, index) => {
    if (target < 0) {
      stack.pop()
      return
    }

    if (target === 0) {
      const copy = stack.slice()

      result.push(copy)

      return
    } else {
      stack.push(candidates[index])
    
      backtrack(target - candidates[index], index + 1)
      stack.pop()
      backtrack(target, index + 1)
    }
  }

  backtrack(target, 0)
}

// var combinationSum = function(candidates, target) {
//   const ans = [];
//   const dfs = (target, combine, idx) => {
//       if (idx === candidates.length) {
//           return;
//       }
//       if (target === 0) {
//           ans.push(combine);
//           return;
//       }
//       // 直接跳过
//       dfs(target, combine, idx + 1);
//       // 选择当前数
//       if (target - candidates[idx] >= 0) {
//           dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
//       }
//   }

//   dfs(target, [], 0);
//   return ans;
// };


combinationSum([2, 3, 6, 7], 7)