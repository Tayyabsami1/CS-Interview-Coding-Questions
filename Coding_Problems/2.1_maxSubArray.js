function findSubarray(nums, k) {
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    // ONLY ONE REMOVAL
    if (sum > k) {
      sum -= nums[left];
      left++;
    }

    if (sum === k) return nums.slice(left, right + 1);
  }

  return null;
}
