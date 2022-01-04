const { arrayToLinkedList } = require('./utils')
const ListNode = require('./index')

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

  let current1 = l1
  let current2 = l2
  let tail = new ListNode(-1)
  let head = tail
  
  while (current1 || current2) {
    if (current1 && current2) {
      if (current1.val === current2.val) {
        current1.val = current1.val
      } else if (current1.val > current2.val) {
        current1.val = current2.val
      } else if (current1.val < current2.val) {
        head.next = current1
      }
    }
    
    head = head.next
    current1 = current1.next
    current2 = current2.next

  }

  return tail.next
}


mergeTwoLists(
  arrayToLinkedList([1, 2, 3]),
  arrayToLinkedList([4, 5, 6])
)

