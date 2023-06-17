# Hoisting

**_Hoisting in pdf file starts from line 106_**

hoisting mane hocce kno ekta variable ba function declare korar agei take nye kaj kora.
sudhumatro function declaration er khetre seta somvob baki karo khetrei paowa jayna

```js
console.log(a);
console.log(b);
console.log(c);
// etai hoisting but it is not a good practice
var a = 12;
let b = 23;
const c = 212;
// here var done weird behaviour . it,s return undefined which is one kind of bug in javascript. that's why we avoid var in our daily coding life
```

### functions

```js
console.log(addDec(2, 3)); // return 5 beacuse it is hoisted here
console.log(addExp(2, 3)); //  referecneError it is not hoisted same for arrow

function addDec(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;
```

### but if we define the both function using var the function will be undefind

```js
console.log(addExpVar(2, 3)); // different error because addExpVar is undefined same for arrow function
console.log(addExpVar); // undefined

var addExpVar = function (a, b) {
  return a + b;
};
```

### Why not use var

```js
// here given another problem of using var
if (!mangoContainer) dltFunction(); // dlt is equal to undefined
var mangoContainer = 20;
function dltFunction() {
  console.log('Now the container is empty ');
}
```

- Var created window object

```js
// var created window object

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
```

## ChatGpt's explaination

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared in your code, they are effectively hoisted or lifted to the top of their scope.

However, it's important to note that only the declarations are hoisted, not the initializations or assignments. Let's look at an example to understand this behavior:

```js
console.log(x); // undefined
var x = 10;

console.log(y); // ReferenceError: y is not defined
let y = 20;
```

In the example above, we have two variables x and y. With var, the variable declaration is hoisted to the top of the scope (in this case, the global scope), so the first console.log(x) does not throw an error. However, the variable is not yet initialized, so it prints undefined. Later, the variable x is assigned the value 10.

On the other hand, with let, the variable declaration is also hoisted to the top of the scope, but unlike var, the variable is not accessible before its actual declaration. Hence, the console.log(y) throws a ReferenceError because the variable y is not defined at that point.

The same hoisting behavior applies to function declarations:

```js
myFunction(); // Hello from myFunction!

function myFunction() {
  console.log('Hello from myFunction!');
}
```

In this example, the function declaration is hoisted to the top of the scope, so calling myFunction() before its declaration works fine. The function is accessible and executes successfully.

However, it's important to note that hoisting does not occur with function expressions or arrow functions:

```js
myFunction(); // TypeError: myFunction is not a function

var myFunction = function () {
  console.log('Hello from myFunction!');
};
```

In this case, the variable myFunction is hoisted, but since it is initialized with a function expression, the assignment is not hoisted. Therefore, when trying to call myFunction() before its assignment, it throws a TypeError since myFunction is not yet a function.

To avoid confusion and maintain code readability, it's generally recommended to declare variables and functions before using them, even though JavaScript allows hoisting. This practice makes the code more predictable and easier to understand.
