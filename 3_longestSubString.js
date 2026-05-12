function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLen = 0;
  const seen = new Set();

  for (let right = 0; right < s.length; right++) {
    // Window is invalid — shrink from left
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
