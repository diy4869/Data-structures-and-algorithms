/**
 * @description 单向链表
 */

class ListNode {
  constructor (val, next = null) {
    this.val = val
    this.next = next
  }

  add (val) {
    let current = this // 当前链表的值
    let prev = null // 上一个

    while (current) {
      prev = current // 设置上一个链表
      current = current.next // 把 current 指向下一个链表

      // 如果 prev.next 为 null，说明到了最后一个，就把 prev.next 指向一个新的链表
      if (prev.next === null) {
        prev.next = new ListNode(val)
      }
    }
  }

  remove (val) {
    let prev = null
    let current = this

    // 如果删除的是头结点
    if (current.val === val) {
      current = current.next

      // 处理头结点和尾结点删除情况
      this.val = current ? current.val : null
      this.next = current ? current.next : null

      return
    }

    while (current) {
      prev = current
      current = current.next

      if (current.val === val) {
        prev.next = current.next
        current = prev.next

        return
      }
    }
  }

  update (val, newVal) {
    let current = this

    while (current) {
      if (current.val === val) {
        current.val = newVal
      }
      current = current.next
    }
  }

  get (val) {
    let current = this

    while (current) {
      if (current.val === val) {
        return current
      }
      current = current.next
    }

    return null
  }

  has (val) {
    let current = this

    while (current) {
      if (current.val === val) {
        return true
      }
      current = current.next
    }

    return false
  }

  insertBefore (head, val) {
    let current = this
    let prev = null

    if (current.val === head.val) {
      const temp = current
      prev = new ListNode(val)

      // this.val = prev.val
      // this.next = prev.next

      current = prev.next.next

      return prev
    }

    while (current) {
      if (current.val === head.val) {
        const next = prev.next

        prev.next = new ListNode(val)
        current = prev.next
        current.next = next
      } else {
        prev = current
        current = current.next
      }
    }
  }

  insertAfter (head, val) {
    let current = this

    while (current) {
      if (current.val === head.val) {
        let temp = current.next

        current.next = new ListNode(val)
        current.next.next = temp

        return
      }
      current = current.next
    }
  }

  reverse () {
    let prev = null // 上一个
    let current = this // 当前的

    while (current) {
      let temp = current.next // 缓存下一个链表的值
      current.next = prev // 反转的话，第一个肯定为 null

      prev = current // 上一个就设置为 current
      current = temp // 并把当前的设置为之前保存的
    }

    return prev
  }
}
// const linkedList = new ListNode(1)

// linkedList.add(2)
// linkedList.add(4)
// linkedList.add(5)

// // linkedList.insertBefore(linkedList.get(1), 3)
// // console.log(linkedList)
// // linkedList.insertBefore(linkedList.get(5), 8)
// // console.log(linkedList)
// // 3 1 2 4 8 5

// // linkedList.insertAfter(linkedList.get(1), 3)
// // console.log(linkedList)
// // linkedList.insertAfter(linkedList.get(5), 8)
// // linkedList.insertAfter(linkedList.get(5), 9)
// // console.log(linkedList)
// // 1 3 2 4 5 8

module.exports = ListNode
