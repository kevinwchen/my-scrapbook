// Random number between 0 <= x < 1
function randomFraction() {
    return Math.random();
}

console.log(randomFraction());

// parseInt
function convertToInt(str) {
    return parseInt(str);
}
console.log(convertToInt("46"));

// parseInt with radix
function convertToIntRad(str) {
    return parseInt(str,2);
}
console.log(convertToIntRad("101"));

// Ternary operator
// condition ? statement-if-true : statement-if-false;
function checkEqual(a,b) {
    return a === b ? true : false;
    // equivalent to >> return a === b;
}

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(4));
