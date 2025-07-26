const convertToCelsius = function(tempFaren) {
  let tempConverted = (tempFaren - 32) * 5/9;
  return Math.round(tempConverted * 10) / 10;
};

const convertToFahrenheit = function(tempCels) {
  let tempConverted = (tempCels * 9/5) + 32;
  return Math.round(tempConverted * 10) / 10;
};

// Do not edit below   this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
