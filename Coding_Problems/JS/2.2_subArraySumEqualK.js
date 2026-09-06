// So in this question we have to return the count of subArrays in an array whole sum is equal to k
function subarraySum(nums, k) {
  const prefixFrequency = new Map();

  // Empty prefix
  prefixFrequency.set(0, 1);

  let currentSum = 0;
  let count = 0;

  for (const num of nums) {
    currentSum += num;

    const needed = currentSum - k;

    if (prefixFrequency.has(needed)) {
      count += prefixFrequency.get(needed);
    }

    prefixFrequency.set(currentSum, (prefixFrequency.get(currentSum) || 0) + 1);
  }

  return count;
}
