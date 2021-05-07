// Spread syntax (...) allows an iterable such as an array expression or string
// to be expanded in places where zero or more arguments (for function calls) or
// elements (for array literals) are expected, or an object expression to be expanded
//  in places where zero or more key-value pairs (for object literals) are expected.

// 👉👉👉 Spread syntax can be used when all elements from
// an object or array need to be included in a list of some kind.

// 👉👉👉 rule 1: basic uses ==>

let arr1 = [1, 2, 3];
// console.log(...arr1); // 1 2 3
let newarr = [...arr1, 4, 5];
// console.log(newarr);   // [1,2,3,4,5]
// some example:
function addNum(x, y, z, u, v) {
  return x + y + z + u + v;
}
let number = [3, 2, 4];
// console.log(addNum(1, ...number, ...[2])); // 12

//👉👉👉 rule 2 : We can add two array =>
let firstArr = ["tonmoy", "shihab", "sadikul", "labib", "fahim"];
let secondArr = ["fahim", "toufiq", "rezwan", "lafis"];
let allStudents = [...firstArr, ...secondArr]; // let concatarr = firstArr.concat(secondArr);
// console.log(allStudents);

// 👉👉👉 rule 3 : Copy an array =>
let mainArr = [1, 2, 3];
let copyArr = [...mainArr]; // like arr.slice()
copyArr.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected
