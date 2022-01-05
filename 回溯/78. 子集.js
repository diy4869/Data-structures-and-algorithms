/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
  if (nums.length === 0) return []

  const result = []
  const t = []
  
  const backTrace = (index) => {
    if (index === nums.length) {
      const copy = t.slice()

      result.push(copy)
      return
    }
    t.push(nums[index])
    backTrace(index + 1)
    t.pop()
    backTrace(index + 1)
  }

  backTrace(0)

  return result
};


// var subsets = function(nums) {
//   const t = [];
//   const ans = [];
//   // const n = nums.length;
//   const dfs = (cur) => {
//       if (cur === nums.length) {
//           ans.push(t.slice());
//           return;
//       }
//       t.push(nums[cur]);
//       dfs(cur + 1, nums);
//       t.pop(t.length - 1);
//       dfs(cur + 1, nums);
//   }
//   dfs(0, nums);
//   return ans;
// };

subsets([1, 2, 3])
subsets([0])