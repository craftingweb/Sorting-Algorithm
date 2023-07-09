// importing file with algorithm
const missingNumber = require("./SetAFindMissingNumber");
// destructiring algorithm from the file for testing
let { findMissingNumber } = missingNumber;
// test suit for a missing mumber
describe("Find a missing mumber in a sorted array", () => {
  // unit tests for a missing mumber
  it("should return the missing number when it is in the middle of the array", () => {
    const nums = [0, 2, 3, 4, 5];
    expect(findMissingNumber(nums)).toBe(1);
  });

  it("should return the missing number when it is at the beginning of the array", () => {
    const nums = [1, 2, 3, 4, 5];
    expect(findMissingNumber(nums)).toBe(0);
  });

  it("should return the missing number when it is at the end of the array", () => {
    const nums = [0, 1, 2, 3, 4];
    expect(findMissingNumber(nums)).toBe(5);
  });

  it("should return the missing number in an array with only one element", () => {
    const nums = [0];
    expect(findMissingNumber(nums)).toBe(1);
  });

  it("should return the missing number in an array with two elements", () => {
    const nums = [0, 1];
    expect(findMissingNumber(nums)).toBe(2);
  });

  it("should return 0 when the array is empty", () => {
    const nums = [];
    expect(findMissingNumber(nums)).toBe(0);
  });
});
