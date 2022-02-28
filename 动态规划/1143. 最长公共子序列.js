/**
 * @description 
 * 题解：https://leetcode-cn.com/problems/longest-common-subsequence/solution/shi-pin-jiang-jie-shi-yong-dong-tai-gui-hua-qiu-ji/
 */
 var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length

  // 处理边界
  const dp = new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(0))

  // 由于空串的时候肯定最长公共子串为0，所以直接从dp[1][1]开始遍历
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // s1[i] == s2[j],则表示在以当前结果就等于之前没进来字符串的结果+1.
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // s1[i] != s2[j] 则表示至少有一个不在（要么s1[i]不在，要么s2[j]不在，或者都不在）。，
        // 所以当前结果就相当于之前结果的中最大的那一个
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m][n]
}

longestCommonSubsequence('abcde', 'ace')


                                                                