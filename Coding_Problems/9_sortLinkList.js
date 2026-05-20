function flatten(head) {
  if (!head) return null;
  const values = [];

  function collect(node) {
    while (node) {
      values.push(node.val);

      if (node.chile) {
        collect(node.child);
      }
    }
  }

  collect(head);
  return values.sort((a, b) => a - b);
}
