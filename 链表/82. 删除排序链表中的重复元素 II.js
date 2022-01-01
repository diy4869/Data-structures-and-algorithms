const ListNode = require('./index')
const { arrayToLinkedList } = require('./utils')

var deleteDuplicates = function (head) {
  const map = new Map()

  let current = head

  while (current) {
      map.has(current.val) ? map.set(current.val, map.get(current.val) + 1) : map.set(current.val, 1)
      current = current.next
  }

  let dummy = new ListNode(-1)
  let node = dummy

  for (let [key, value] of map.entries()) {
    if (value !== 1) {
      continue
    } else {
      node.next = new ListNode(key)
      node = node.next
    }
  }

  return dummy.next
};

// 官方题解
// var deleteDuplicates = function(head) {
//   if (!head) {
//       return head;
//   }

//   const dummy = new ListNode(0, head);

//   let cur = dummy;
//   while (cur.next && cur.next.next) {
//       if (cur.next.val === cur.next.next.val) {
//           const x = cur.next.val;
//           while (cur.next && cur.next.val === x) {
//               cur.next = cur.next.next;
//           } 
//       } else {
//           cur = cur.next;
//       }
//   }
//   return dummy.next;
// };


deleteDuplicates(
  arrayToLinkedList([1,1,1,2,3])
)

deleteDuplicates(
  arrayToLinkedList([1,2,3,3,4,4,5])
)