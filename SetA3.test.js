const SetMismatch = require('./SetA3-SetMismatch');

test('SetMismatch([1,2,2,3] returns 2', () =>{
    expect(SetMismatch([1,2,2,3])).toStrictEqual([2,3]);
})