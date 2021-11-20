const { arrayToLinkedList } = require('./utils')

var reverseList = function (head) {
  let prev = null // 上一个
  let current = head // 当前的

  while (current) {
    let temp = current.next // 缓存下一个链表的值
    current.next = prev // 反转的话，第一个肯定为 null

    prev = current // 上一个就设置为 current
    current = temp // 并把当前的设置为之前保存的
  }

  return prev
}

reverseList(arrayToLinkedList([1, 2, 3, 4, 5]))
