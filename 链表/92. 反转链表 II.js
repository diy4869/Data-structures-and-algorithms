const { arrayToLinkedList } = require('./utils/index')
const ListNode = require('./index')

var reverseBetween = function (head, left, right) {
  const dummyNode = new ListNode(-1)
  dummyNode.next = head

  let prev = dummyNode

  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }

  let current = prev.next
 
  for (let i = 0; i < right - left ; i++) {
    const temp = current.next

    current.next = temp.next
    temp.next = prev.next
    prev.next = temp
  }


  return dummyNode.next
};


reverseBetween(
  arrayToLinkedList([1, 2, 3, 4, 5]),
  2,
  4
)