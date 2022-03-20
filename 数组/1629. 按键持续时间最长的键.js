/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
  let result = keysPressed[0]
   let max = releaseTimes[0]
   
   for (let i = 1; i < releaseTimes.length; i++) {
      const sum = releaseTimes[i] - releaseTimes[i - 1]
      if (sum > max || max === sum && keysPressed[i].charCodeAt() > result.charCodeAt() ) {
        max = sum
        result = keysPressed[i]
      }
  }

  return result
};

slowestKey([9,29,49,50], 'cbcd')
slowestKey([9, 10], 'cb')
slowestKey([12, 23, 36, 46, 62], 'spuda')
slowestKey([1, 2], 'ba')