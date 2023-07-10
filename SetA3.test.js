const SetMismatch = require('./SetA3-SetMismatch');

test('SetMismatch([1,2,2,3] returns [2,3]', () =>{
    expect(SetMismatch([1,2,2,3])).toStrictEqual([2,3]);
})

test('SetMismatch([1,2,3,3] returns [3,4]', () =>{
    expect(SetMismatch([1,2,3,3])).toStrictEqual([3,4]);
})

test('Returns null if theres no mismatch', () =>{
    expect(SetMismatch([1,2,3,4])).toBe(null);
})

// test('SetMismatch([2,2,3,4]) returns [1,2]', () =>{
//     expect(SetMismatch([2,2,3,4])).toStrictEqual([1,2]);
// });

// test('SetMismatch([1,2,3,4,4,5,6]) returns [4,5]', () =>{
//     expect(SetMismatch([1,2,3,4,4,5,6])).toStrictEqual([4,5]);
// });