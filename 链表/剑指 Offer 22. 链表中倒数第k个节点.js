const { arrayToLinkedList } = require('./utils')

/**
 * 
 * @param {*} head 
 * @param {*} k 
 * @param 解题思路
 * 定义 fast slow 2个变量，初始都指向 head
 * 
 * 因为链表没办法知道当前是第几个，所以我们先循环 k，每次让 fast 都指向下一个节点，并且 k--
 * 当 k 为 0 时，说明已经走了 k 步
 * 
 * 这时候再去循环 fast，每次循环 slow 和 fast 都指向自身的下一个节点，当 fast 为 null 时，
 * 就说明已经到了倒数第 k 个节点，最后返回 slow 即可
 */

const getKthFromEnd = (head, k) => {
  let fast = head
  let slow = head

  while (k) {
    fast = fast.next
    k--
  }

  while (fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}

getKthFromEnd(
  arrayToLinkedList([1, 2, 3, 4, 5]),
  2
)
