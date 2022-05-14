var a = 8;
a += 12;

console.log(a);

var myString = "I am Kevin";

console.log(myString);

console.log(myString.length);

var myArray = [["Clippers", 3], ["Rockets", 13], ["Celtics", 21], ["Lakers", 24]];
console.log(myArray);

// pop removes from the end of the array
var myNewArray = myArray.pop();
console.log(myArray);

// shift removes from the front of the array
var myRemoved = myArray.shift();
// unshift appends to the front of the array
myRemoved.unshift(["Heat", 3]);
console.log(myRemoved);


