const FindDuplicateNum = require('./SetA5-FindtheDuplicateNumber');

test('FindDuplicateNum([1,2,2,3] returns 2', () =>{
    expect(FindDuplicateNum([1,2,2,3])).toBe(2);
})

test('FindDuplicateNum([1,2,2,3] returns 2', () =>{
    expect(FindDuplicateNum([1,1,2,3])).toBe(1);
})

test('FindDuplicateNum([1,2,2,3] returns 2', () =>{
    expect(FindDuplicateNum([1,2,3,3])).toBe(3);
})

test('FindDuplicateNum([1,2,3,4] returns null', () =>{
    expect(FindDuplicateNum([1,2,3,4])).toBe(null);
})

