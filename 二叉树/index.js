class Node {
  constructor(val, left = {}, right = {}) {
    this.val = val
    this.left = left
    this.right = right
  }
}

module.exports = Node
