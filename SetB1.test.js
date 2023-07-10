const {RemoveDuplicates} = require("./SetB1-RemoveDuplicatesfromSortedArray")

test('RemoveDuplicates([] returns null', () =>{
    expect(RemoveDuplicates([])).toBe(null);
})

// test("RemoveDuplicates([1, 1, 2]) returns 2", () => {
//   expect(RemoveDuplicates([1, 1, 2])).toBe(2);
// });

// test("RemoveDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) returns 5", () => {
//   expect(RemoveDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
// });

// test("RemoveDuplicates([-2, -2, -1, 0, 1, 1, 2, 2]) returns 5", () => {
//   expect(RemoveDuplicates([-2, -2, -1, 0, 1, 1, 2, 2])).toBe(5);
// });

// test("RemoveDuplicates([1, 1, 1, 1, 1]) returns 1", () => {
//   expect(RemoveDuplicates([1, 1, 1, 1, 1])).toBe(1);
// });
