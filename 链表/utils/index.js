const ListNode = require('../index')

const arrayToLinkedList = arr => {
  let tail = new ListNode(-1)

  for (let i = 0; i < arr.length; i++) {
    tail.add(arr[i])
  }

  return tail.next
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

arrayToLinkedList([1, 2, 3])

module.exports.arrayToLinkedList = arrayToLinkedList
module.exports.flatLinkedList = flatLinkedList
