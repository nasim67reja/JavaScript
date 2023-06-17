# this Keyword

**_this keyword in pdf file starts from line 111_**

![this](assets/this-1.png)

### JavaScript has 3 types of scope:

- Block scope
- Function scope
- Global scope

Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.These two keywords provide Block Scope in JavaScript.Variable declaring with var is function scope
Variables declared inside a { } block cannot be accessed from outside the block:

### Block scope

```js
{
  let x = 20;
}
// console.log(x); //scope.js:24 Uncaught ReferenceError: x is not defined
// but var is not block scope
{
  var x = 20;
}
// console.log(x); // we can find x out of the block
```

### Function Scope :

```js
// 2. function scope :
function addNum(a, b) {
  var x = 12;
  let y = 13;
  const z = 19;
  return a + b;
}
// x,y,z are not available here . because var is function scope and function also creates block so that let and const is also not avaiable
```

### Global scope :

`const firstName = 'Nasim';`

here firstName is global so it's avaiable anywhere in the program

## ChatGpt's Explaination

In JavaScript, the scope refers to the accessibility or visibility of variables, functions, and objects in some particular part of your code during runtime. It determines which variables are accessible in a certain area of your code, and it plays a crucial role in how variables are declared, accessed, and modified.

The scope chain is a concept closely related to the scope. It is a hierarchical structure of nested scopes that JavaScript uses to resolve variable references. When you reference a variable, JavaScript searches for that variable within the current scope. If it doesn't find the variable, it moves up the scope chain to the next enclosing scope and continues the search until it either finds the variable or reaches the global scope. The global scope is the outermost scope in JavaScript and represents the window object in a web browser environment.

To understand the scope chain better, let's look at an example:

```js
var a = 10; // Global scope

function outer() {
  var b = 20; // Outer scope

  function inner() {
    var c = 30; // Inner scope

    console.log(a + b + c); // Accesses variables from all scopes
  }

  inner();
}

outer();
```

In this example, we have three nested scopes: global scope, outer scope, and inner scope. The variable a is accessible from all scopes because it's declared in the global scope. The variable b is accessible within the outer function scope, and the variable c is accessible within the inner function scope.

When the inner function is executed and tries to access variables, it first looks for c within its own scope. If it doesn't find it, it moves up the scope chain to the outer scope and finds b. Similarly, it moves up to the global scope and finds a. The scope chain allows inner scopes to access variables from outer scopes.

It's important to note that variables declared with let and const keywords have block scope, which means they are only accessible within the block they are defined in (e.g., within an if statement or for loop). This concept of block scope affects the scope chain in those cases.

Understanding the scope and scope chain in JavaScript is essential for properly managing variable access, avoiding naming conflicts, and understanding how functions and objects interact with their surrounding environments.

## Scope

In JavaScript, there are three main types of scope: global scope, function scope, and block scope. The type of scope determines the accessibility and lifetime of variables.

1. Global Scope: Variables declared outside of any function or block have global scope. They are accessible from anywhere within your JavaScript code, including inside functions and blocks. Global variables have a lifetime that extends throughout the entire execution of your program.

```js
var globalVar = 10;

function myFunction() {
  console.log(globalVar); // Accessible from inside the function
}

console.log(globalVar); // Accessible outside the function
```

2. Function Scope: Variables declared within a function have function scope. They are accessible only within the function and any nested functions inside it. Function-scoped variables have a lifetime that lasts as long as the function is executing.

```js
function myFunction() {
  var localVar = 20; // Function scope

  console.log(localVar); // Accessible within the function
}

console.log(localVar); // Error: localVar is not defined outside the function
```

3. Block Scope: Variables declared with let and const keywords have block scope. A block is any section of code enclosed within curly braces {} like in loops, conditionals, or standalone blocks. Block-scoped variables are accessible only within the block they are defined in, including any nested blocks. They have a lifetime limited to the block execution.

```js
if (true) {
  var x = 10; // Not block-scoped with var

  let y = 20; // Block-scoped with let

  const z = 30; // Block-scoped with const
}

console.log(x); // 10, accessible outside the block
console.log(y); // Error: y is not defined outside the block
console.log(z); // Error: z is not defined outside the block
```

With var, variables are function-scoped or globally scoped, but they are not block-scoped. This means that variables declared with var inside a block are accessible outside the block as well.

On the other hand, variables declared with let and const keywords have block scope. They are limited to the block in which they are defined, providing better control and avoiding unintended variable hoisting or leakage.

It's generally recommended to use let and const for variable declaration in modern JavaScript to embrace block scoping and avoid common issues associated with var.

function printName() {
return function (nam) {
return `Hello ${nam}.Welcome to our world!`;
};
}
// here we can not get the anonymous function hence it fis also block scopexxxzzz

//////////////////////////////////////////////////////////////////////// Hoisting in JavaScipt //////////////////////////////////////////////////////////////////////////////////
/_
hoisting mane hocce kno ekta variable ba function declare korar agei take nye kaj kora.
sudhumatro function declaration er khetre seta somvob baki karo khetrei paowa jayna
_/
console.log(a);
// console.log(b);
// console.log(c);
// etai hoisting but it is not a good practice
var a = 12;
let b = 23;
const c = 212;
// here var done weird behaviour . it,s return undefined which is one kind of bug in javascript. that's why we avoid var in our daily coding life
// here given another problem of using var
if (!mangoContainer) dltFunction(); // dlt is equal to undefined
var mangoContainer = 20;
function dltFunction() {
console.log('Now the container is empty ');
}
