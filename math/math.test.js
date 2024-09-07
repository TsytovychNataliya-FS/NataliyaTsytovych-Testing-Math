const { add, subtract, multiply, divide, sqrt, max } = require("./math");

// Tests for add function
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

// Tests for subtract function
test("subtracts 5 - 3 to equal 2", () => {
  expect(subtract(5, 3)).toBe(2);
});

// Tests for multiply function
test("multiplies 2 * 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

// Tests for divide function
test("divides 6 / 2 to equal 3", () => {
  expect(divide(6, 2)).toBe(3);
});

test("throws an error when dividing by 0", () => {
  expect(() => divide(6, 0)).toThrow("Division by zero is not allowed.");
});

// Tests for sqrt function
test("square root of 9 is 3", () => {
  expect(sqrt(9)).toBe(3);
});

test("throws an error when computing the square root of a negative number", () => {
  expect(() => sqrt(-1)).toThrow(
    "Cannot compute the square root of a negative number."
  );
});

// Tests for max function
test("returns the maximum of 4 and 5 as 5", () => {
  expect(max(4, 5)).toBe(5);
});

test("returns the maximum of -1 and -2 as -1", () => {
  expect(max(-1, -2)).toBe(-1);
});
