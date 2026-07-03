class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countApples(root) {
  // base case
  if (root === null) return 0;

  // current node count
  let current = root.value === "yes" ? 1 : 0;

  // recursive calls
  let leftCount = countApples(root.left);
  let rightCount = countApples(root.right);

  return current + leftCount + rightCount;
}
