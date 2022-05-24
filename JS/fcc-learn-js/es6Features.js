// Anonymous functions have no name
// Aren't stored in a program but rather a variable
// can convert to an arrow function
// var magic = function() {
//     return new Date();
// };
const magic = () => new Date();

// Another example
// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// };
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// Arrow functions are good for when one function takes in another
// Filter out the positive integers and compute their squares
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Default parameter for function ifan  argument is not given
const increment = (number, value = 1) => number + value;

console.log(increment(5,3));
console.log(increment(5));

// Rest operator ...
// Converts all arguments into one array called 'args'
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3,4,5));