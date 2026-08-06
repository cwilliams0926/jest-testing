import caesarCipher from './caesar';

test('Single character shifts', () => {
  expect(caesarCipher('a', 1)).toBe('b');
});

test('Multiple character shifts', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('Works with capitals', () => {
  expect(caesarCipher('hELLo', 2)).toBe('jGNNq');
});

test('Wraps at Z', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Preserves punctuation and spaces', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
