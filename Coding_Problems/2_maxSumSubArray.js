function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // Build the first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i]; // add new element on right
    windowSum -= arr[i - k]; // remove old element on left
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(maxSumSubarray(arr, k)); // Output: 9 (4 + 5)
