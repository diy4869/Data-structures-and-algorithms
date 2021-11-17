const { arrayToLinkedList } = require('./utils')

var deleteDuplicates = function (head) {
  if (head === null) return null // 如果 head 为 null 直接返回 null

  let current = head

  while (current.next) { // 如果 循环到最后一个节点，next 可能为 null
    // 如果 当前的 值 和链表的下一个的值相等，就把 current.next 指向 next.next
    if (current.val === current.next.val) { 
      current.next = current.next.next
    } else {
      // 不相等，current 就直接指向下一个，进入下一个循环
      current = current.next
    }
  }

  // 返回修改后的链表，如果返回 current 的话，current 会是最后一个链表指针
  return head 
}

deleteDuplicates(
  arrayToLinkedList([1, 1, 1, 2, 3, 4, 5])
)

