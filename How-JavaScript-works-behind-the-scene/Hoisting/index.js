'use strict';

// functions
// console.log(addDec(2, 3)); // return 5 beacuse it is hoisted here
// console.log(addExp(2, 3)); //  referecneError it is not hoisted same for arrow

// function addDec(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// // but if we define the both function using var the function will be undefind

// // console.log(addExpVar(2, 3)); // different error because addExpVar is undefined same for arrow function

// var addExpVar = function (a, b) {
//   return a + b;
// };

// var created window object

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
