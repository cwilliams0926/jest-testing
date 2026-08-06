import reverseString from './reverseString.js';

test('hello becomes olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('hi becomes ih', () => {
  expect(reverseString('hi')).toBe('ih');
});
