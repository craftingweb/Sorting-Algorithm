// importing file with cycle algorithm
const positiveNums = require("./SetA4FirstMissingPositive");
// destructiring algorithm from the file for testing
let { findSmallestMissingPositive } = positiveNums;

it("should return 1 for an empty array", () => {
  expect(findSmallestMissingPositive([])).toBe(1);
});
it("should return 1", () => {
  expect(findSmallestMissingPositive([2, 2, 2, 2, 2])).toBe(1);
});
it("should return 3", () => {
  expect(findSmallestMissingPositive([1, 2, 0])).toBe(3);
});
