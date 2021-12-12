const ListNode = require('./index')
const { arrayToLinkedList } = require('./utils')

const removeNthFromEnd = (head, k) => {
  // 创建一个虚拟节点，用于处理删除头结点的情况，并把虚拟节点的next 指向 head
  const tail = new ListNode(-1)
  tail.next = head

  // 通过快慢指针的方式，slow 和 fast 初始都指向链表的第一个节点
  let fast = tail.next
  let slow = tail.next
  let prev = null // 链表的上一个节点

  // 循环 k 次，并把 fast 指向 fast.next
  while (k) {
    fast = fast.next
    k--
  }

  // 遍历循环 fast，每次依然 fast 和 slow 指向下一个链表节点，当 fast 为 null 时，说明遍历结束
  // 此时 slow 就刚好是倒数第 k 个节点，因为我们在之前已经对 fast 做了处理
  while (fast) {
    prev = slow  
    slow = slow.next
    fast = fast.next
  }

  // 如果存在 prev 的话，则删除 倒数第 k 个节点，否则说明删除的是头结点，直接把 tail.next 就设置为 head.next 即可
  if (prev) {
    const temp = prev.next.next
    prev.next = temp
  } else {
    tail.next = head.next
  }

  // 最终返回 tail.next
  return tail.next
}

removeNthFromEnd(
  arrayToLinkedList([1, 2, 3, 4, 5]),
  5
)
