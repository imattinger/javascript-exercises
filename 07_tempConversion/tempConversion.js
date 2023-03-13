const convertToCelsius = function(tempInF) {
  // return Math.round((tempInF - 32) / 18) * 10;
  let tempInC = (tempInF - 32) * 5 / 9;
  return Math.round(tempInC * 10) / 10;
};

const convertToFahrenheit = function(tempInC) {
  let tempInF = tempInC * 9 / 5 + 32;
  return Math.round(tempInF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
