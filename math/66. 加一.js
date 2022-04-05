function plusOne(digits) {
  let step = 0

  const length = digits.length - 1

  const result = digits.reduceRight((total, current, currentIndex) => {
    if (currentIndex === length) {
      total[currentIndex] = current + 1

      if (total[currentIndex] < 10) return total
      
      step = total[currentIndex] / 10 >> 0

      total[currentIndex] = total[currentIndex]  % 10
      return total
    }

    if (current + step >= 10) {
      step = (current + step) / 10 >> 0

      total[currentIndex] = (current + step) % 10
    } else {
      total[currentIndex] = current + step
      step = 0
    }

    // step = current + 1

    return total
  }, [])

  if (step) {
    result.unshift(step)
  }

  return result
}

// plusOne([4, 3, 2, 1])
plusOne([9, 9, 9])
