const { arrayToLinkedList } = require('./utils/index')
const ListNode = require('./index')

function deleteNode(head, val) {
  if (head === null) return null
  if (head.val === val) return head.next

  let prev = new ListNode(-1, head)
  let current = head 

  while (current) {
      if (current.val === val) {
          prev.next = current.next
          prev  = current
          current = current.next
          
      } else {
        prev = current
        current = current.next
      }
  }

  return head
};

deleteNode(
  arrayToLinkedList([4, 5, 1, 9]),
  5
)