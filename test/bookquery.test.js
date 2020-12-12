function sum2(a, b) {
  return a + b;
}

test('Test 2 a + b must be 10', () => {
  expect(sum2(6, 4)).toBe(10);
});
