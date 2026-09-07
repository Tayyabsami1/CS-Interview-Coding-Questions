// So for frequncy we have map
// of the top k , heap is a really great thing to start with
// Complexity with heap is O(nLogK) and space o(n)
// More efficient is Bucket Solution
// We will have O(n) time and Space will be o(n)
function topKFrequent(nums, k) {
  const frequency = new Map();

  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  const buckets = Array.from({ length: nums.length + 1 }, () => []);

  for (const [num, count] of frequency) {
    buckets[count].push(num);
  }

  const result = [];

  for (let count = buckets.length - 1; count >= 0; count--) {
    for (const num of buckets[count]) {
      result.push(num);

      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
}
