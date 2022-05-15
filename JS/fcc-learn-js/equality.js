function test(val) {
    // == returns true for all types
    // === returns true only if types are the same
    if (val === 7) {
        return "Equal value and type";
    } else if (val == 7) {
        return "Equal value different type";
    } else {
        return "Not equal";
    }
}

console.log(test(7));
console.log(test("7"));
console.log(test(13));
