import analyzeArray from './analyze';

test('Works with a regular array of numbers', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Doesn't work with an array of non-numbers", () => {
  expect(analyzeArray(['hi', 'hello', 'how are you']).average).toEqual(
    expect.any(Number)
  );
});
