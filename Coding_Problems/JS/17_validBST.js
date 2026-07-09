class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function validate(node, min, max) {
  if (node === null) return true;

  if (node.val <= min || node.val >= max) return false;

  return (
    validate(node.left, min, node.val) && validate(node.right, node.val, max)
  );
}

function isValidBST(root) {
  return validate(root, -Infinity, Infinity);
}
