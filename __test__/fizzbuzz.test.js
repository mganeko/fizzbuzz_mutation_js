
const fizzbuzz = require('../src/fizzbuzz');

test('returns fizzbuzz when number is divisible by 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
    expect(fizzbuzz(30)).toBe('fizzbuzz');
    expect(fizzbuzz(45)).toBe('fizzbuzz');
})

test('returns fizz when number is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');
    expect(fizzbuzz(6)).toBe('fizz');
    expect(fizzbuzz(9)).toBe('fizz');
})

test('returns buzz when number is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
    expect(fizzbuzz(10)).toBe('buzz');
    expect(fizzbuzz(20)).toBe('buzz');
})

// test('returns number when number is not divisible by 3 or 5', () => {
//     expect(fizzbuzz(1)).toBe('1');
//     expect(fizzbuzz(2)).toBe('2');
//     expect(fizzbuzz(4)).toBe('4');
// });


// Path: __test__/fizzbuzz.test.js
// Compare this snippet from src/fizzbuzz.js:
