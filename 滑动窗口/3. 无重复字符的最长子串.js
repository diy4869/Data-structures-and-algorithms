// var lengthOfLongestSubstring = function(s) {
//     // 哈希集合，记录每个字符是否出现过
//     const set = new Set();
//     const n = s.length;
//     // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
//     let rk = -1, ans = 0;
//     for (let i = 0; i < n; ++i) {
//         if (i != 0) {
//             // 左指针向右移动一格，移除一个字符
//             set.delete(s.charAt(i - 1));
//         }
//         while (rk + 1 < n && !set.has(s.charAt(rk + 1))) {
//             // 不断地移动右指针
//             set.add(s.charAt(rk + 1));
//             ++rk;
//         }
//         // 第 i 到 rk 个字符是一个极长的无重复字符子串
//         ans = Math.max(ans, rk - i + 1);
//   }
//   console.log(ans)
//     return ans;
// };

const getMaxLenOfStr = function (str) {
  // 初始化一个空字符串来保存没有重复的子串
  let substr = ''
  // 记录最长字符串的长度
  let maxLen = 0
  // 循环遍历整个长字符串
  for (let i = 0; i < str.length; i++) {
    // 在子串中查找当前循环的字符的索引
    let findex = substr.indexOf(str[i])
    if (findex > -1) {
      // 如果子串中包含当前循环的 字符 str[i]
      // 返回截取的子字符串，从索引 findex + 1 开始到结束，再将当前 循环字符 str[i] 压进子串
      // 其实这一步的目的在于，在子串中发现了重复的字符，祛除掉子串中重复字符前面的部分，得到一个新的子串，新的子串中，没有任何重复字符
      substr = substr.substring(findex + 1)
    }
    // 如果子串不包含当前循环的 字符 str[i]
    // 将 循环字符 str[i] 组合进 子串
    substr += str[i]
    // 这一步的目的在于，子串的长度发生了变化，对比当前保存的最大长度，返回最大长度
    maxLen = substr.length < maxLen ? maxLen : substr.length
    console.log(substr)
    /*  根据打印结果来仔细思考这个过程，基本上就能比较清晰了
                打印结果为：
                p
                pw
                w
                wk
                wke
                kew
            */
  }
  return maxLen
}


lengthOfLongestSubstring('ababcbb')
lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('pwwkew')
