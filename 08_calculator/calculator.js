const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let result = 0;
  numbers.forEach((num) => {
    result += num;
  });
  return result;
};

const multiply = function(numbers) {
  let result = 1;
  numbers.forEach((num) => {
    result *= num;
  });
  return result;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if (a <= 1) {
    return 1;
  }
  return a * factorial(a - 1);
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
