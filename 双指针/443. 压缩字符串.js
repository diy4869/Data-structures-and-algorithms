/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
  let result = []

  let slow = 0
  let fast = 0

  while (fast < chars.length) {
    if (chars[slow] !== chars[fast]) {
      result.push(chars[slow])
      if (fast - slow > 1) result.push(...`${fast - slow}`.split(''))

      slow = fast
      fast++

      continue
    }
    
    fast++
   }

   result.push(chars[slow])
   if (fast - slow > 1) result.push(...`${fast - slow}`.split(''))
   
   return result
};

compress(["a", "b", "c"])

compress(["a", "a", "b", "b", "c", "c", "c"])

compress(["a"])
compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])