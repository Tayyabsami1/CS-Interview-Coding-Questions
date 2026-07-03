function climbStairs(n) {
  // Base cases
  if (n === 1) return 1;
  if (n === 2) return 2;

  // Recursive relation
  return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(4));
