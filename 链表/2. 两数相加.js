const { arrayToLinkedList } = require('./utils/index')
const ListNode = require('./index')

/**
 * 
 * @param {*} l1 
 * @param {*} l2 
 * @description 题解
 * 对于 两数相加来讲，我们可以用小学数学的知识来做，由于链表已经是倒序的，所以 如果 2个 链表 每次相加的值大于 10 的话
 * 我们可以通过 add 来保存需要进位的数，所以，如果 2个链表都存在的话，则计算完的链表的结果为 l1.val + l2.val + add
 * 否则 为 l1.val + add || l2.val + add 则为计算后的结果，如果最后 add 不为 0 的话，则我们需要创建一个新的链表，链表的值就为 add 的值
 * 最终返回链表即可
 */
var addTwoNumbers = function(l1, l2) {
    let current1 = l1
    let current2 = l2
    let add = 0 // 每次 2 个链表计算完 需要进位的数字
    let node = new ListNode(-1) // 创建一个虚拟节点，用于每次计算完结果后，把计算结果 通过 node.next 进行保存
    let tail = node // 最终返回的结果

    while (current1 || current2) {
        if (current1 && current2) {
            const sum = current1.val + current2.val + add

            if (sum >= 10) {
                current1.val = sum !== 10 ? sum % 10 : 0
            } else {
                current1.val = sum
                add = 0
            }
            node.next = new ListNode(current1.val)
            add = Math.floor(sum / 10)
            
        } else {
            const val = current1 ? current1.val : current2.val
            const sum = val + add
            
            if (sum >= 10) {
                node.next = new ListNode( sum !== 10 ? sum % 10 : 0)
                add = Math.floor(sum / 10)
            } else {
                add = 0
                node.next = new ListNode(sum)
            }           
        }

        node = node.next
        
        if (current1) current1 = current1.next
        if (current2) current2 = current2.next
        
    }

    if (add !== 0) {
        node.next = new ListNode(add)

        return tail.next
    }

    return tail.next
};

// addTwoNumbers(
//     arrayToLinkedList([2, 4, 3]),
//     arrayToLinkedList([5, 6, 4])
// )

// 708

addTwoNumbers(
    arrayToLinkedList([9]),
    arrayToLinkedList([9,9,1])
)
