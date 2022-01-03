const { arrayToLinkedList } = require('./utils')
const ListNode = require('./index')

var deleteDuplicates = function(head) {
    if (!head) return null
    
    // let current = head
    // while (current.next) {
    //     current = current.next
    // }

    // current.next = head

    let slow = head
    let fast = head.next
    let tail = new ListNode(-1)
    tail.next = head
    let tail2 = tail

    while (slow && fast) {
        if (slow.val !== fast.val) {
            tail.next = slow.next
        }

        slow = slow.next
        fast = fast.next.next


    }
};

deleteDuplicates(
    arrayToLinkedList([1, 1, 1, 2, 3, 3, 4, 5])
)