# CALL APPLY AND BIND [udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648663#questions)

## CALL

`function.call(this,argu1,arug2 .... arguN)`

In JavaScript, you can use the call() method to invoke a function and explicitly specify the value of this within the function. The call() method allows you to pass arguments to the function individually. Here's how you can use the call() method:

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
  console.log(`This is ${this}`);
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
};

// Using call() to invoke the greet() function with the 'person' object as the value of 'this'
greet.call(person, 'Alice');
```

The call() method is a predefined javascript method. with call(), an object can use a method
beolnging to another object. means an object property can use another object property

````js
 const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log('Eurowings ', eurowings);```
````

## APPLY

`function.apply(this,[argu1,argu2....,arguN])`

Certainly! In JavaScript, the apply() method is similar to the call() method, as it allows you to invoke a function and explicitly set the value of this within the function. However, the key difference is in how you pass arguments to the function.

The apply() method accepts two parameters: the value to be used as this inside the function and an array-like object or an iterable containing the arguments to be passed to the function. Here's an example to illustrate its usage:

```JS
function greet(name, age) {
  console.log(`Hello, ${name}!`);
  console.log(`You are ${age} years old.`);
  console.log(`This is ${this}`);
}

const person = {
  firstName: "John",
  lastName: "Doe"
};

const args = ["Alice", 25];

// Using apply() to invoke the greet() function with the 'person' object as the value of 'this' and passing arguments from the 'args' array
greet.apply(person, args);

```

## BIND

`const variable = function.bind(this,argu1,....,arguN)`

Certainly! In JavaScript, the bind() method is used to create a new function that, when called, has a specified this value and, optionally, pre-set arguments. The bind() method does not immediately invoke the function; instead, it returns a new function with the bound this value and arguments. Here's an example to illustrate its usage:

```JS
const person = {
  firstName: "John",
  lastName: "Doe"
};

function greet(message) {
  console.log(`${message}, ${this.firstName} ${this.lastName}!`);
}

const boundGreet = greet.bind(person, "Hello");

boundGreet(); // Output: Hello, John Doe!

```

JONAS CODE :

```JS

function userInformation(bankName, password) {
  if (this.password === password)
    return `Hello ${this.name} ${this.accountNum}\
  ${this.totalBalance}`;
  else return ` wrong password`;
}
const user = [
  {
    name: 'Nasim Reja',
    accountNum: 2021100,
    totalBalance: 2000000,
    password: 1,
    userInformation, // yuserInformation function include here
  },
  {
    name: 'Kevin Taylor',
    accountNum: 20211001,
    totalBalance: 210020302,
    password: 2,
  },
  {
    name: 'Denial Weber',
    accountNum: 2021102,
    totalBalance: 2321000,
    password: 2,
    aboutme() {
      console.log(`hi ${this.name}`);
    },
  },
];
const [user1, user2, user3] = user;
const user1InformationBind = user1.userInformation.bind(user1, 'Gramen-Bank🙌');
/*
 specifying  parts of the argument before hint is actually a common pattern called partial aplications
so essentially partial aplication means that a part of the argument of the original funciton are already appiled
 predefiened argument*/
const user2InformationBind = user1.userInformation.bind(user2, 'Jonota-Bank');
const user3InformationBind = user1.userInformation.bind(user3, 'Islami-Bank');
// console.log(user1InformationBind(1));

```

## NOTE

- `function.call(this,argu1,arug2 .... arguN)`
- `function.apply(this,[argu1,argu2....,arguN])`
- `const variable = function.bind(this,argu1,....,arguN)`

the difference between call and bind , here in bind don't execute or call the function just return a function
which ones you have to store in a variable as javascript has a first class function

Well, ask yourself these questions:

1. Do I need to store this function in a variable for later use? If so, use bind()

2. Do I need to pass this function as an argument? If so, use bind()

3. Do I need to call this function right now? If so, use call()
