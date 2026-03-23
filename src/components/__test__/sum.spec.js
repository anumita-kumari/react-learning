const { sum } = require("../sum");

test("Sum function should return sum of two numbers", () => {
  const result = sum(3, 4);

  expect(result).toBe(5);
});
