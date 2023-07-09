/*
Problem Description: Given an array of integers nums containing n integers where nums[i] is in the range [1, n]. Return an array of all the integers in the range [1, n] that do not appear in nums.

Goal: Return intergers that not in an array
    Perform cyclic sort
        If the current number is not in its correct position
            Swap the current number with the number at its correct position
            Else move to the next number
        Find missing numbers
            If the number at index i is not equal to i + 1, it is a missing number
*/
function findMissingNumbers(nums) {
  const n = nums.length;
  const missingNumbers = [];

  let i = 0;
  while (i < n) {
    const num = nums[i];
    if (nums[i] !== nums[num - 1]) {
      [nums[i], nums[num - 1]] = [nums[num - 1], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      missingNumbers.push(i + 1);
    }
  }

  return missingNumbers;
}

module.exports = { findMissingNumbers };
