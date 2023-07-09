/*
Problem Description: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number.

Goal is to find missing number in a sorted array.
Perform cyclic sort
If the current number is within range and not in its correct position
    Swap the current number with the number at its correct position
    Else: Move to the next number
Find the missing number
   If the number at index i is not equal to i, it is the missing number
   If no missing number is found, the missing number n
*/
function findMissingNumber(nums) {
  const n = nums.length;

  let i = 0;
  while (i < n) {
    const correctIndex = nums[i];
    if (nums[i] < n && nums[i] !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return n;
}

module.exports = { findMissingNumber };
