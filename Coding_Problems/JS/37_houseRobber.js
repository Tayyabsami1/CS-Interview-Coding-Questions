function rob(nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  const dp = new Array(nums.length);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[nums.length - 1];
}

// more clean approach
function rob(nums) {
  let prev2 = 0;
  let prev1 = 0;

  for (const money of nums) {
    const current = Math.max(prev1, money + prev2);

    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
