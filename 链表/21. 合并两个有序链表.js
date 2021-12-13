const { arrayToLinkedList } = require('./utils')
const ListNode =  require('./index')

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
// var mergeTwoLists = function (l1, l2) {
//   if (l1 === null) {
//     return l2;
//   } else if (l2 === null) {
//       return l1;
//   } else if (l1.val < l2.val) {
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//   } else {
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2;
//   }
// }

var mergeTwoLists = function(l1, l2) {
  const tail = new ListNode(-1)

  let head = tail

  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      head.next = l1
      l1 = l1.next
    } else {
      head.next = l2
      l2 = l2.next
    }
    head = head.next
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  head.next = l1 === null ? l2 : l1

  return tail.next
}

// mergeTwoLists(
//   arrayToLinkedList([1, 2, 3]),
//   arrayToLinkedList([4, 5, 6])
// )

mergeTwoLists(
  arrayToLinkedList([1, 2, 4]),
  arrayToLinkedList([1, 3, 4])
)
