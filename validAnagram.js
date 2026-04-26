function isValidAnagram(s, t) {
  if (s.length !== t.length) return false;
  const normalize = (str) => str.toLowerCase();
  s = normalize(s);
  t = normalize(t);
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}

// Example usage:
const s = "Anagram";
const t = "nagaram";
console.log(isValidAnagram(s, t)); // Output: true
