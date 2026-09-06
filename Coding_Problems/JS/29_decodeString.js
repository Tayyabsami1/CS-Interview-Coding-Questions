// so we have 3[a4[b]]
// the output will be abbbbabbbbabbbb
// time complexity O(n+m) : n is length of string and m is length of decoded string
function decodeString(s) {
  const stack = [];

  let currentString = "";
  let currentNumber = 0;

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      currentNumber = currentNumber * 10 + Number(char);
    } else if (char === "[") {
      stack.push({
        previousString: currentString,
        repeatCount: currentNumber,
      });

      currentString = "";
      currentNumber = 0;
    } else if (char === "]") {
      const { previousString, repeatCount } = stack.pop();

      currentString = previousString + currentString.repeat(repeatCount);
    } else {
      currentString += char;
    }
  }

  return currentString;
}
