const ListNode = require('./index')
const { arrayToLinkedList } = require('./utils/index')

function mergeList(head) {
  if (head === null) return head

  let slow = head
  let fast = head

  let temp = new ListNode(-1)
  let result = temp
  let val = 0

  while (fast) {
    if (fast.val === 0) {
      slow = fast
      temp.next = new ListNode(val)
      temp = temp.next
      val = 0
    }
    
    val += fast.val
    fast = fast.next
  }

  return result.next.next
}

mergeList(
  arrayToLinkedList([0, 3, 1, 0, 4, 5, 2, 0])
)

mergeList(
  arrayToLinkedList([0, 1, 0, 3, 0, 2, 2, 0])
)