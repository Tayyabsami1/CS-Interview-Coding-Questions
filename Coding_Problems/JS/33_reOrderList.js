// You are given the head of a singly linked list:

// 1 → 2 → 3 → 4 → 5

// Reorder it to:

// 1 → 5 → 2 → 4 → 3

// More generally:

// L0 → L1 → L2 → ... → Ln

// should become:

// L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...

// You must modify the list in-place.
function reorderList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  // 1. Find middle
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 2. Split
  let second = slow.next;
  slow.next = null;

  // 3. Reverse second half
  let prev = null;

  while (second !== null) {
    const next = second.next;

    second.next = prev;

    prev = second;
    second = next;
  }

  second = prev;

  // 4. Merge
  let first = head;

  while (second !== null) {
    const firstNext = first.next;
    const secondNext = second.next;

    first.next = second;
    second.next = firstNext;

    first = firstNext;
    second = secondNext;
  }

  return head;
}
