import calculator from './calculator.js';

test('2 + 3 = 5', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('1 + 2 = 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('3 - 2 = 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('4 - 2 = 1', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test('4 / 2 = 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('6 / 2 = 3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('2 * 3 = 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('3 * 3 = 9', () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});

// Test for dividing by zero

test('Cannot divide by zero', () => {
  expect(calculator.divide(4, 0)).toBeUndefined();
});

// Test for floating points

test('1.5 * 2 = 5.0', () => {
  expect(calculator.multiply(1.5, 2)).toBeCloseTo(3);
});

// Test for negatives

test('-2 + 1 = -1', () => {
  expect(calculator.add(-2, 1)).toBe(-1);
});
