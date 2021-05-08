// Spread syntax (...) allows an iterable such as an array expression or string
// to be expanded in places where zero or more arguments (for function calls) or
// elements (for array literals) are expected, or an object expression to be expanded
//  in places where zero or more key-value pairs (for object literals) are expected.

// 👉👉👉 Spread syntax can be used when all elements from
// an object or array need to be included in a list of some kind.

////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================ Spread in Array literals ==========================/////////////

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

let firstArr = ['tonmoy', 'shihab', 'sadikul', 'labib', 'fahim'];
let secondArr = ['fahim', 'toufiq', 'rezwan', 'lafis'];
// secondArr.unshift(firstArr); // add the firstArr in secondArr
// Array.prototype.unshift.apply(secondArr, firstArr); // add the both array's element into secondArr
// console.log(secondArr); //

let allStudents = [...firstArr, ...secondArr]; // let concatarr = firstArr.concat(secondArr);
// console.log(allStudents); // Note : Not to use const otherwise it will give TypeError(invalid assignment)

// 👉👉👉 rule 3 : Copy an array =>

let mainArr = [1, 2, 3];
let copyArr = [...mainArr]; // like arr.slice()
copyArr.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected

let a = [[1], [2], [3]];
// console.log(a);
let b = [...a];
b.shift().shift();
// console.log(a); // oh no! Now array 'a' is affected as well:
// console.log(b);
////////////////////////////////////////////////////////////////////////////////////////

////// =============================== Spread in object literals ==============================////
//The Rest/Spread Properties for ECMAScript proposal (ES2018) added spread properties to object literals.
// It copies own enumerable properties from a provided object onto a new object.

// what we can with spread in object
// 1. make a object's copy
// 2. we can merge object

/// 1. make object's copy :
let playerRun = {
  maxwell: 0,
  hafiz: 0,
  afridi: 0,
};
// let copyPlayerRun = Object.assign({}, playerRun); // atfirst we do that with Object.assign syntax
let copyPlayerRun = { ...playerRun };
// console.log(copyPlayerRun);

// 2. merge object :
let classEight = {
  roll8_1: 'fahim',
  roll8_2: 'lafiz',
  roll8_3: 'toufiq',
};
let classNine = {
  roll9_1: 'Sadikul',
  roll9_2: 'Nahid',
  roll9_3: 'Mimfat',
};
let classEight_Nine = { ...classEight, ...classNine, ...{ roll7_1: 'Tonmoy' } };
// console.log(classEight_Nine);
