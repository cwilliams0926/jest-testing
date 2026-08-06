import capitalize from './capitalize.js';

test('hello becomes Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('hi becomes Hi', () => {
  expect(capitalize('hi')).toBe('Hi');
});
