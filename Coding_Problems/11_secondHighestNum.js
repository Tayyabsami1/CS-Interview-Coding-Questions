function findSecondHighestNumber(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let n of arr) {
    if (n > first) {
      second = first;
      first = n;
    } else if (n > second && n !== first) {
      second = n;
    }
  }
  return second === -Infinity ? null : second;
}

console.log(findSecondHighestNumber([3, 1, 4, 1, 5, 9, 2, 6])); // 6
console.log(findSecondHighestNumber([5, 5, 5])); // null
console.log(findSecondHighestNumber([1, 2]));
