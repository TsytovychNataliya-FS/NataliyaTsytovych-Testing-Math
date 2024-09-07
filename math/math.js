// Adds two numbers.
function add(a, b) {
  return a + b;
}

//Subtracts the second number from the first number.
function subtract(a, b) {
  return a - b;
}

//Multiplies two numbers.
function multiply(a, b) {
  return a * b;
}

//Divides the first number by the second number.
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed.");
  return a / b;
}

//Returns the square root of a number.
function sqrt(a) {
  if (a < 0)
    throw new Error("Cannot compute the square root of a negative number.");
  return Math.sqrt(a);
}

//Returns the maximum of two numbers.
function max(a, b) {
  return Math.max(a, b);
}

module.exports = { add, subtract, multiply, divide, sqrt, max };
