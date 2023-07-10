const {RemoveDuplicates} = require("./SetB1-RemoveDuplicatesfromSortedArray")

test('RemoveDuplicates([1,2,2,3] returns 2', () =>{
    expect(RemoveDuplicates([1,2,2,3])).toBe(2);
})