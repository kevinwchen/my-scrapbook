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

// Spred operator
// Spreads an array into individual parts

const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function () {
    // arr2 = arr1; // gives potato
    arr2 = [...arr1]; // gives JAN
    arr1[0] = 'potato'
})();
console.log(arr2[0]);

// Template literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

// Concise Object Literal Declarations Using Object Property Shorthand
// Simpler way if you know you want to make an object where
// the argument name is the key and the argument value is the object value.
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Jenna", "25", "F"))
// Simpler way:
const createPerson2 = (name, age, gender) => ({name, age, gender});
console.log(createPerson2("Jenna", "25", "F"))

// Concise Declarative Functions with ES6
// no need to declare 'function()'
const bicycle = {
    gear: 2,
    // setGear: function(newGear) {
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// Class syntax to define a constructor function
// Older way to create an object:
// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');
// ES6 way
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');

// Exercise
class Vegetable {
    constructor(vegName) {
        this.name = vegName;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Object control access with getters and setters
// Getter functions return the value of an object's private variable
// Setter functions assign the value of an object's private variable
// Both without direct acces to it
// It is convention to precede the name of a private variable with an underscore (_)
// However, the practice itself does not make a variable private.
// Example:
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
// Exercise:
class Thermostat {
    constructor(setTemp) {
        this._temp = (5/9) * (setTemp -32);
    }
    get temperature() {
        return this._temp;
    }
    set temperature(newTemp) {
        this._temp = newTemp;
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
