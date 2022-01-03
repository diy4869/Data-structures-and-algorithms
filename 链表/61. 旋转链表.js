const { arrayToLinkedList } = require('./utils')
const ListNode = require('./index')

/**
 * 
 * @param {*} head 
 * @param {*} k 
 * @returns 
 * @description 解法一
 */
// var rotateRight = function (head, k) {
//   if (k === 0) return head
//   if (!head) return head

//   let current = head
//   let len = 0

//   while (current) {
//     current = current.next
//     len++
//   }

//   if (k % len === 0) return head

//   let count = k % len
//   let first = new ListNode(-1)
//   first.next = head
//   let current2 = first.next
//   let end = null

//   while (len > count) {
//     if (len - 1 === count) {
//       end = current2.next
//       current2.next = null
//     }
//     len--
//     if (current2) current2 = current2.next
    
//   }

//   let current3 = end

//   while (current3) {
//     if (current3.next === null) {
//       current3.next = head

//       return end
//     }
//     current3 = current3.next
//   }

//   return end
// }

// const getLen = (head) => {
//   let current = head
//   let len = 0

//   while (current) {
//     len++
//     current = current.next
//   }

//   return len
// }

// const rotateRight = (head, k) => {
//   if (k === 0) return head
//   if (!head) return head

//   const len = getLen(head)

//   if (k % len === 0) return head

//   let remainder = k % len
//   let rotateCount = len - (remainder)
//   let first = head
//   let slow = head
//   let temp = null

//   while (rotateCount--) {
//     if (rotateCount === 0) {
//       temp = first.next
//       first.next = null
//     }
//     first = first.next
//   }

//   let current = temp

//   while (current) {
//     if (current.next === null) {
//       current.next = slow

//       return temp
//     }
//     current = current.next
//   }
// }

/**
 * @description 解法二 环状链表
 * 要旋转链表的话，必须要知道链表的总长度，而且要考虑 k 比链表长度大的情况，
 * 对于这种的话，可以通过取余的方式解决
 * 
 * 首先遍历链表，拿到链表的总长度，遍历完成的时候，这时候 cur 是最后一个链表，
 * 这时候，我们把 cur 直接指向head 就形成了环状链表
 * 
 * 接着用 链表的总长度 减去 之前取余的余数，就是链表需要断开的位置
 * 
 */
var rotateRight = function(head, k) {
  if (k === 0 || !head || !head.next) {
      return head;
  }
  let n = 1;
  let cur = head;
  while (cur.next) {
      cur = cur.next;
      n++;
  }

  let add = n - k % n;
  if (add === n) {
      return head;
  }

  // 设置为环状链表
  cur.next = head;
  // add 为需要旋转的链表长度
  while (add) {
      cur = cur.next;
      add--;
  }

  // 遍历完成，因为 cur 是环状链表，所以需要把 cur.next 设置为 null 即可
  const ret = cur.next;
  cur.next = null;
  return ret;
};


console.log(rotateRight(
  arrayToLinkedList([1, 2, 3, 4, 5, 6]),
  14
))

console.log(rotateRight(
  arrayToLinkedList([1, 2, 3, 4, 5, 6]),
  3
))

console.log(rotateRight(
  arrayToLinkedList([1, 2, 3, 4, 5, 6]),
  6
))

console.log(rotateRight(
  arrayToLinkedList([1, 2, 3, 4, 5, 6]),
  8
))