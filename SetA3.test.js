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