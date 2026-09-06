function firstUnique(s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (obj[char] === 1) return i;
  }
}
