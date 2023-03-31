const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    return fib(n, 0, 1);
};

function fib(n, a, b) {
    if (n === 0) {
        return a;
    }
    if (n === 1) {  
        return b;
    }
    return fib(n - 1, b, a + b);
}

// Do not edit below this line
module.exports = fibonacci;
