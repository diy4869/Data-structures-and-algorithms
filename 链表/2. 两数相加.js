const { arrayToLinkedList } = require('./utils/index')

var addTwoNumbers = function(l1, l2) {
    let current1 = l1
    let current2 = l2
    let add = 0

    while (current1 || current2) {
        if (current1 && current2) {
            const sum = current1.val + current2.val

            if (sum < 10) {
                current1.val = add !== 0 ? sum + add : sum
            } else if (sum === 10) {
                current1.val = 0
            } else  {
                current1.val = sum % 10
            }
            add = Math.floor(sum / 10)
            
        } else if (current1) {
            const sum = current1.val + add
            
            if (sum >= 10) {
                current1.val = sum === 10 ? sum % 10 : 0
                add = Math.floor(sum / 10)
            } else {
                current1.val = sum
            }
        } else if (current2) {
            const sum = current2.val + add
            if (sum >= 10) {
                current1.val =  sum === 10 ? sum % 10 : 0
                add = Math.floor(sum / 10)
            } else {
                current1.val = sum
            }
        }

        head.next = head.next
        current1 = current1 ? current1.next : null
        current2 = current2 ? current2.next : null 
    }
};

// addTwoNumbers(
//     arrayToLinkedList([2, 4, 3]),
//     arrayToLinkedList([5, 6, 4])
// )

// 708

addTwoNumbers(
    arrayToLinkedList([9,9,9]),
    arrayToLinkedList([9])
)
// 80001