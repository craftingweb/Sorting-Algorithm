// importing file with cycle algorithm
const missingNums = require("./SetA6FindAllNumber");
// destructiring algorithm from the file for testing
let { findMissingNumbers } = missingNums;
// test suit for a missing mumbers
describe("Find missing numbers in an array", () => {
  // unit tests for a missing mumbers
  it("should return an empty array when there are no missing numbers", () => {
    const nums = [1, 2, 3, 4, 5];
    expect(findMissingNumbers(nums)).toEqual([]);
  });

  it("should return the missing number when there is a single missing number", () => {
    const nums = [1, 2, 4, 5];
    expect(findMissingNumbers(nums)).toEqual([3]);
  });

  it("should return all numbers in the range [1, n] when the array is empty", () => {
    const nums = [];
    expect(findMissingNumbers(nums)).toEqual([]);
  });

  it("should return all numbers in the range [1, n] when the array contains duplicate numbers", () => {
    const nums = [2, 2, 3, 3, 5];
    expect(findMissingNumbers(nums)).toEqual([1, 4]);
  });
});
