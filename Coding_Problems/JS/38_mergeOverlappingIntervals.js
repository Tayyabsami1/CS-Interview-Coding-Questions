function mergeOverlapping(nums) {
  if (nums.length === 0) return [];
  const START = 0,
    END = 1;

  nums.sort((a, b) => a[START] - b[START]);
  const result = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const last = result[result.length - 1];

    if (curr[START] <= last[END]) {
      last[END] = Math.max(curr[END], last[END]);
    } else {
      result.push(nums[i]);
    }
  }
  return result;
}

console.log(
  mergeOverlapping([
    [5, 8],
    [1, 3],
    [4, 7],
    [8, 10],
  ]),
);
