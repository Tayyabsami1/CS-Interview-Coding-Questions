function findKthLargest(nums, k) {
  const minHeap = [];

  for (const n of nums) {
    minHeap.push(n);
    minHeap.sort((a, b) => a - b);

    if (minHeap.length > k) minHeap.shift();
  }

  return minHeap[0];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
