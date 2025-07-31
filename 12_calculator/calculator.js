const add = function(num1, num2) {
	let addition = num1 + num2;
  return addition;
};

const subtract = function(num1, num2) {
	let subtraction = num1 - num2;
  return subtraction;
};

const sum = function(arr) {
	let sumArr = 0;
  if (arr.lenght === 0) {
    return 0;
  }
  else if (arr.lenght === 1) {
    return arr[0];
  }
  else {
    for (num in arr) {
    sumArr += arr[num];
    }
    return sumArr;
  }
};

const multiply = function(arr) {
  let multiplied = 1;
  for (num in arr) {
    multiplied = multiplied * arr[num];
  }
  return multiplied;
};

const power = function(num1, num2) {
	fnum =  num1 ** num2
  return fnum
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  else {
    return num * factorial(num - 1)
    }
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
