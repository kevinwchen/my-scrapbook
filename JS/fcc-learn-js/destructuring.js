// Destructuring
// Easy way to assign individual variables for each element in an object

// Example
var voxel = {x: 3.6, y: 7.4, z: 6.54};
// Original way:
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
// Quicker way:
const { x : a, y : b, z : c} = voxel; // a = 3.6, b = 7.4, c = 6.54

// Exercise
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Extract to variables with same object names
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today,tomorrow);

// Extract and assign to different variable names
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday,highTomorrow);

// Nested destructuring
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday1, high: highToday1}} = LOCAL_FORECAST;

// Destructuring from arrays
// Put commas in to skip entries
let [p, q,,, r] = [1, 2, 3, 4, 5, 6];
console.log(p, q, r);
[p, q, r] = [r, p, q];
console.log(p, q, r)

// Destructuring with the Rest parameter
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list; // Change this line
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr)

// Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// const half = (stats) => (stats.max + stats.min) / 2.0;
const half = ({max, min}) => (max + min) / 2.0;
