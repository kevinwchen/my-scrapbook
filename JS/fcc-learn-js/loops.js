//  while loops
var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray)

// for loops
var ourArray = [];

// for (initialisation; condition; final expression)
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
    console.log(ourArray);
}

// do.. while loops
var newArray = [];
var i = 10;
do {
    newArray.push(i);
    i++;
} while (i<5)
console.log(newArray);