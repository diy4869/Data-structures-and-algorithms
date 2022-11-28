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

var reverseKGroup = function (head, k) {
  if (head === null) return
  if (k <= 1) return head

  let len = 0
  let current = head

  while (current) {
    current = current.next
    len++
  }

  let maxReverseCount = len / k >> 0
  
  let index = 0

  const dummyNode = new ListNode(-1)
  dummyNode.next = head

  for (let i = 0; i < maxReverseCount; i++) {
    const node = reverseBetween(head, index * k, index + 1 * k - 1)
    console.log(node)

    // for
  }

  return head

};

reverseKGroup(
  arrayToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]),
  3
)