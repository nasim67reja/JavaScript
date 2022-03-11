'use stict';

//  Scoping in JavaScript
/*
Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:

Block scope
Function scope
Global scope
*/
/*
Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:
*/
{
  let x = 20;
}
// console.log(x); //scope.js:24 Uncaught ReferenceError: x is not defined
// but var is not block scope
{
  var x = 20;
}
// console.log(x); // we can find x out of the block

// 2. function scope :
function addNum(a, b) {
  var x = 12;
  let y = 13;
  const z = 19;
  return a + b;
}
// x,y,z are not available here . because var is function scope and  function also creates block

// 👉👉👉👉 global scope :
const firstName = 'Nasim';
// here firstName is global so it's avaiable anywhere in the program

function printName() {
  return function (nam) {
    return `Hello ${nam}.Welcome to our world!`;
  };
}
// here we can not get the anonymous function hence it fis also block scopexxxzzz

//////////////////////////////////////////////////////////////////////// Hoisting in JavaScipt //////////////////////////////////////////////////////////////////////////////////
/*
hoisting mane hocce kno ekta variable ba function declare korar agei take nye kaj kora.
sudhumatro function declaration er khetre seta somvob baki karo khetrei paowa jayna
*/
console.log(a);
// console.log(b);
// console.log(c);
// etai hoisting but it is not a good practice
var a = 12;
let b = 23;
const c = 212;
//  here var done weird behaviour . it,s return undefined which is one kind of bug in javascript. that's why we avoid var in our daily coding life
//  here given another problem of using var
if (!mangoContainer) dltFunction(); // dlt is equal to undefined
var mangoContainer = 20;
function dltFunction() {
  console.log('Now the container is empty ');
}
