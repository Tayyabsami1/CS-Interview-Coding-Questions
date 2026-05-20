function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];
    // console.log(map);
    // console.log(map.has(rem));
    if (map.has(rem)) {
      return [map.get(rem), i];
    }

    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([3, 3, 7], 10));
