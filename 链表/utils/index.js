const arrayToLinkedList = arr => {
  let index = 0
  let linkedList = {}
  if (arr.length === 1) return linkedList = {
    val: arr[0],
    next: null
  }

  const deep = (data = {}) => {
    if (index < arr.length - 1) {
      data.val = arr[index]
      data.next = {}
      data.next.val = arr[index + 1]
      index++

      return deep(data.next)
    }
    data.next = null
  }
  deep(linkedList)

  return linkedList
}

const flatLinkedList = linkedList => {
  const arr = []
  const deep = data => {
    if (data) {
      arr.push({
        val: data.val,
        next: data.next
      })
      return deep(data.next)
    }
  }
  deep(linkedList)

  return arr
}

module.exports.arrayToLinkedList = arrayToLinkedList
module.exports.flatLinkedList = flatLinkedList
