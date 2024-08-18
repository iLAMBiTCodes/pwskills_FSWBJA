function curry(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b);
        };
    };
};
// Defining the sum function
const sum = (x, y) => x + y;
// Testing the sum function
// const currySum = curry(sum);
// console.log(currySum(1)(2));
console.log(curry(sum)(99)(1));