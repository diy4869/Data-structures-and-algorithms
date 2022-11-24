const {arrayToLinkedList} = require('./utils/index')

var reverseList = function(head) {
  let current = head
  let prev = null

  while (current) {
      const temp = current.next
      current.next = prev
      prev = current
      current = temp
  }

  return prev
};

reverseList(
  arrayToLinkedList([1,2,3,4,5])
)