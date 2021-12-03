const { arrayToLinkedList } = require('./utils')
const LinkedList =  require('./index')

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) return null
  if (l1 === null) return l2
  if (l2 === null) return l1

  let current1 = l1.next
  let current2 = l2.next
  let head = l1 || l2
  
  while (current1 !== null || current2 !== null) {

    if (current1.val === current2.val) {
      head.next = current1.next
    } else if (current1.val > current2.val) {
      head.next = current2.next
    } else if (current1.val < current2.val) {
      head.next = current1.next
    }
    current1 = current1.next
    current2 = current2.next

  }
  return head
}


mergeTwoLists(
  arrayToLinkedList([1, 2, 3]),
  arrayToLinkedList([4, 5, 6])
)

