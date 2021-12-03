/**
 * @description 双向链表
 */
class DobbyLinkedList {
    constructor (val) {
      this.val = val
      this.prev = null
      this.next = null
    }
  
    add (val) {
      let current = this // 当前链表的值
      let prev = null // 上一个
  
      while (current) {
        // 设置当前链表的上一个节点
        current.prev = prev
  
        prev = current // 设置上一个链表
        current = current.next // 把 current 指向下一个链表
  
        // 如果 prev.next 为 null，说明到了最后一个，就把 prev.next 指向一个新的链表
        if (prev.next === null) {
          prev.next = new DobbyLinkedList(val)
          prev.next.prev = prev
        }
      }
    }
  
    remove (val) {}
  
    search () {}
  
    reverse () {
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
  }
  
  const linkedList = new DobbyLinkedList(1)
  
  linkedList.add(2)
  linkedList.add(3)
  linkedList.add(4)
  linkedList.add(5)
  linkedList.add(6)
  
  console.log(linkedList)
  