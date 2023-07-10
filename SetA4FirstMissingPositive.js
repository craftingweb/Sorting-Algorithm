/*
Problem Description: Given an unsorted integer array nums, find the smallest missing positive integer.

Goal is to find the smallest missing + int
Perform cyclic sort on the array nums to place each positive integer in its correct position.
Iterate through each element num in nums:
While num is within the valid range (1 ≤ num ≤ n) and num is not already in its correct position (num should be at index num - 1):
Swap num with the element at the correct position (num - 1).
Iterate through the sorted array nums to find the smallest missing positive integer.
Iterate through each element num and its corresponding index i in nums:
If num is not equal to i + 1, return i + 1 as the smallest missing positive integer.
If no missing positive integer is found, the smallest missing positive integer is n + 1.
Return n + 1 as the smallest missing positive integer.
*/
function findSmallestMissingPositive(nums) {
  const n = nums.length;

  // Perform cyclic sort
  for (let i = 0; i < n; i++) {
    while (nums[i] >= 1 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // Swap nums[i] with the element at the correct position
      [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
    }
  }

  // Find the smallest missing positive integer
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If no missing positive integer is found, return n + 1
  return n + 1;
}

module.exports = { findSmallestMissingPositive };
