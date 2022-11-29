const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((total, item) => total += item, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, item) => total *= item);
};

const power = function (a, b) {
  return Math.pow(a, b)
};

const factorial = function (n) {
  if (n < 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
