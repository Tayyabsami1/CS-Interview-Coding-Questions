// So basically this question has a sorted array which was roated at some point so we need a modified Binaray Search
// left =0 , right = length-1
// while left <=right
// Find Mid
// If left<=mid Left is Sorted
//----
// Check if target is in Left
// if yes move the right to mid-1
// else move the left mid+1
// ----
// if left is not sorted
// check if target is in right side
// if yes move the left to mid+1
// else move the right to mid-1

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      // Target lies inside the sorted left half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
