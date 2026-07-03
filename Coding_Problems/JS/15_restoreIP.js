const MAX_IP_PARTS = 4;
const MAX_IP_VALUE = 255;
function restoreIpAddress(s) {
  let result = [];

  function backTrack(index, parts) {
    // terminating condition
    if (parts.length === MAX_IP_PARTS) {
      if (index == s.length) result.push(parts.join("."));
      return;
    }

    for (let len = 1; len <= 3; len++) {
      if (index + len > s.length) break;
      let segment = s.substring(index, index + len);
      if (segment.length > 1 && segment[0] === "0") continue;

      if (Number(segment) > MAX_IP_VALUE) continue;

      parts.push(segment);

      backTrack(index + len, parts);

      parts.pop();
    }
  }
  backTrack(0, []);
  return result;
}

console.log(restoreIpAddress("25511135"));
console.log(restoreIpAddress("25525511135"));
