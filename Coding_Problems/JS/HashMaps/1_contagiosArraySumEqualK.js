function subarraySum(nums, k) {
  const prefixFrequency = new Map();

  prefixFrequency.set(0, 1);

  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num;

    const needed = prefixSum - k;

    if (prefixFrequency.has(needed)) {
      count += prefixFrequency.get(needed);
    }

    prefixFrequency.set(prefixSum, (prefixFrequency.get(prefixSum) || 0) + 1);
  }

  return count;
}
