function fun1() {
    // If var is NOT used at declaration
    // it exists as a global variable
    myVar = 3;
}
function fun2() {
    // If var is used at declaration
    // it exists within the scope of where it was defined
    var myVar = 5;
}

fun1();
console.log(myVar);

myVar = 7;

fun2();
console.log(myVar);