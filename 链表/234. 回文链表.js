const {arrayToLinkedList} = require('./utils/index')
const ListNode = require('./index')

var isPalindrome = function (head) {
  let prev = null
  let current = head
  let last = head

  while (current) {
    current.prev = prev
    prev = current
    current = current.next
    last = current
    console.log(prev)
  }

  let head1 = prev
  let head2 = head

  while (head1 !== null && head2 !== null) {
    if (prev.val !== head2.val) {
      return false
    }
  }

  return true
}

isPalindrome(arrayToLinkedList([1, 2, 2, 1]))
