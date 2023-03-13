const sumAll = function(num1, num2) {
    // Input check - type must be number
    if (typeof(num1) != 'number' || typeof(num2) != 'number') 
        return 'ERROR';
    // Input check - nums can't be negative
    if (num1 < 0 || num2 < 0) 
        return 'ERROR';
    // Using n(n+1)/2 is faster than iterating
    let lowerBd = Math.min(num1, num2) - 1;
    let upperBd = Math.max(num1, num2);
    let sum1 = lowerBd * (lowerBd + 1) / 2;
    let sum2 = upperBd * (upperBd + 1) / 2;
    return sum2 - sum1;
};

// Do not edit below this line
module.exports = sumAll;
