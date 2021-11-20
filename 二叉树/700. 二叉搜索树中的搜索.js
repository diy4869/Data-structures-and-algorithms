var searchBST = function (root, val) {

    if (root === null) return null
    if (root.val === val) return root
    if (val < root.val) {
      return searchBST(root.left, val)
    } else if (val > root.val) {
      return searchBST(root.right, val)
    }
};

searchBST({
  val: 4,
  left: {
    val: 2,
     left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
    // left: {
    //   val: 4,
    //   left: null,
    //   right: null
    // },
    // right: {
    //   val: 3,
    //   left: null,
    //   right: null
    // }
  }
}, 2)