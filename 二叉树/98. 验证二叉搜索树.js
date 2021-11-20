// 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  // 如果是空节点
  if (!root) return true;
  // 若 root.val 不符合 max 和 min 的限制，说明不是合法 BST
  if (root.val <= min || root.val >= max) return false;
  // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};


console.log(isValidBST({
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
}))