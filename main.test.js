import { capitalize, reverseString, calculator, caesarCypher, analyzeArray } from './main.js';

test('capitalizes the first letter of a string', () => {
    expect(capitalize('apple')).toBe('Apple');
});

test('reverses the letter order of a string', () => {
    expect(reverseString('banana')).toBe('ananab');
});

test('adds two numbers', () => {
    expect(calculator.add(8, 4)).toBe(12);
});

test('subtracts two numbers', () => {
    expect(calculator.subtract(8, 4)).toBe(4);
});

test('divides two numbers', () => {
    expect(calculator.divide(8, 4)).toBe(2);
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(8, 4)).toBe(32);
});

test('shifts letters in a word by 3', () => {
    expect(caesarCypher('hello', 3)).toBe('khoor');
});

test('shifts letters by 3 and wraps from z to a correctly', () => {
    expect(caesarCypher('xyz', 3)).toBe('abc');
});

test('shifts letters by 3 and preserves non-alphabetical chars', () => {
    expect(caesarCypher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyze array and return object with average, min, max and length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});