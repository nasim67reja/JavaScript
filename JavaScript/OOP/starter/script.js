'use strict';

// Behind the scene there happens four steps :
/*
1. New{} is created
2.function is called,this ={}
3.{} linked to prototype
4. function automatically return {}
*/
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // we can also add methods :
  // never create a method inside constructor function
  /* this.calcAge = function () {
    2037 - this.birthYear;
  };*/ // if we created 1000 object that means 1000 function will create and our performence become very slow
  // Instead we will use prototype or prototypal inheritance
};
// arrow function not allowed and that's beacuse it doesn't have it's own this keyword // Remember that this function is basically produce and object /// In oop there is the convention that  consructor function always with a capital letter . so we should follow the convention too . Infact other build in constructors like array  or map follow the convention as well
console.log(new Person('Jonas', 1991));
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
/*
Like Classical oop programming concept here the matilda ,jack is Instance for Person(beacuse javascript has no class). for checking this we have in below:
*/
/*
const jonas = 'jonas';
console.log(jonas instanceof Person); // Return false
console.log(jack instanceof Person); // return true
*/

Person.prototype.calcAge = function () {
  console.log(this.birthYear - 2021);
};
matilda.calcAge();
/*🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
👉👉👉👉👉👉 Look this is very important :
here , Person.prototype  => so the prototype property of the constructor function(Person). so
all the object that are created from the constructor function will inherit . so they will get access to all the methods and properties that are defines on this prototype property. 
that's why In line 36 we add an method in to the prototype property then the matilda object which  are created from Person constructor function  are able to acces the calAge method. awesome
*/

const arr = new Array(1, 2, 3);

const newArr = arr.map(num => num * 2);
/*
This array method is exactly same as above. wow that is awesome finally i am able to understand the prototype concept
*/
// console.log(newArr);
// console.dir(Person);
// console.dir(Array);
/*🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
👉👉👉👉👉👉 Look this is very important :
Any object always has access to the methods and properties from it's prototypes and the prototypes of matlida is Person.prototypes and we can actually confirm that because each object has special property called(__proto__)
*/
console.log(matilda.__proto__);
/* Look at the console where we found the calcAge function  and that's why jonas is able to use this. So the prototypes of the matlida object is essentially the prototype property of the constructor function.we can check that by
 */
console.log(matilda.__proto__ === Person.prototype); // return true
/*Person.prototype(look here the prototype is not a prototype of the Person)
 Person.prototype, what's gonna be used as the prototype of all the objects that are created with the person constructor function.
 */
console.log(Person.prototype.isPrototypeOf(matilda)); // return true
console.log(Person.prototype.isPrototypeOf(Person)); // return false
// so this very common confusion are comes from the bad naming of this property(prototype)
// it should be .prototypeOfLinkedObjects (jonas's opinion)
/*
one more question where does this __proto__  propertry on the matlida object actually come from. well remember the new operator  it containes the step number three(line 7)
so it creates the __proto__ property and it set it's value to the prototype propertry of the function that has been called. so that is exactly written in line 63
so it set the __proto__ property on the object to the prototype propertry of the constructor function and this is how javascript knows internally that the matlida object is connected to
Person.prototype 
*/
// now we can also set property on the property no just method. look bellow
console.dir(Person);
Person.prototype.species = 'Homo Sapiens';
console.log(matilda); // matlida.species
/*However the property or method that are exist in prototype is not connected directly to the object we can check this by */
console.log(matilda.hasOwnProperty('species')); // return false
console.log(matilda.hasOwnProperty('firstName')); // return true
/*
😎😎😎😎😎😎😎😎😎😎😎  that is how the new keyword work
function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}
Person.prototype.greet = function() {
  console.log('Hello');
}
 
function newPerson(firstName, birthYear) {
  // 1. Create an empty object
  const person = {};
 
  // 2. Link the object with its constructor's prototype
  person.__proto__ = Person.prototype;
 
  // 3. Bind the 'this' keyword to the newly created 'person' object
  // Here's it's called 'that' to not collide with the reserved 'this' keyword
  const that = person;
 
  // 4. Execute the constructor function
  Person.call(that, firstName, birthYear);
 
  // 5. Return 'this'
  return that;
}
 
const john = newPerson('John', 1990);
///////////////////////////////////////////////////////////////////////////////////////////


😉😉😉😉😉😉😉😉😉😉😉😉😉😉😉😉😉😉😉😉😉😉
The difference between __proto__ and prototype
prototype

1. Each function in JS will automatically have an property called prototype, which includes constructor function

2. prorotype is an property in (constructor) function which contains all the stuff that that will be inherited by it's instance

3. Every object created by a constructor function will be able to get access to all the methods and properties that define on the prototype property of the constructor function

4. By this way, we don't need to set the method on every object. Instead, we only set the method once on the prototype of constructor function. Then all the object created by this constructor function will have access to that method



__proto__

1. Every object in JS will have a property called __proto__

2. The __proto__ property of object is essentially the prototype property of the constructor function that create the object

3. In other words, __proto__ of object is as same as prototype of function which create that object



Let's review the code in this lecturer

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
First, we create a constructor function called Person.

At this time, the prototype of this function has nothing (not indeed empty actually)

console.log(Person.prototype);


Then, we create a method on the prototype of Person

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
Break it down a little bit

1.  Person is a constructor function

2. "prototype" is one of the property in the Person constructor function

3.  then we define a method called calcAge on that "prototype" property

4.  All the object(instance) created by Person constructor function will inheirt it's prototype

5. So that object(instance) can have access to this method .calcAge()

6. "this" point to the object calling the method



Now, the prototype of the Person function will have a function called calcAge: ƒ ()

console.log(Person.prototype);


Later, we call the Person function with "new" to create an object

const jonas = new Person('Jonas', 1990);
Now, jonas is an object created by Person function. So the __proto__ property of jonas object will inherit from (link to) prototype property of Person function



So, if you do these two lines of code

console.log(Person.prototype); // see the prototype of Person (constructor function)


console.log(Object.getPrototypeOf(jonas)); // see the __proto__ of object


You will see the output of these two lines of code are actually same



And also can be proved by this line of code

console.log(Person.prototype === Object.getPrototypeOf(jonas)); // true


I'm just a student like you, so I wouldn't say I'm 100% correct. Just wanna show what I learn from this course so far. Hope this will help you a little bit.
*/

///////////////////////////////////////////////////////////////////////////// Lecture 208 : Prototypal Inheritance on Built in Objects

console.log(matilda.__proto__); // Return the Person.prototype
console.log(matilda.__proto__.__proto__); // return the Object.prototype
console.log(matilda.__proto__.__proto__.__proto__); // return null
// console.log(Person.prototype.constructor === Person);

// For Array :
Array.prototype.greet = function () {
  return 'hello world';
};
const arr3 = [1, 2, 3, 4, 5, 2, 4, 6, 6]; // new Array === []
console.log(arr3.__proto__ === Array.prototype); // wow
console.log(arr3.greet()); // wow awesome now i am feel like a pro developer. we can modify the built in array method .

// Usually not to recommand for doing this . we should always avoid this
Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr3.unique());
// console.dir(Array.__proto__);

/*Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK �*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  return `${this.make} going at ${this.speed} km/h`;
};
Car.prototype.brake = function () {
  this.speed -= 5;
  return `${this.make} going at ${this.speed} km/h`;
};
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', '95 km/h');
console.log(car1.accelerate()); // return 130
console.log(car1.accelerate()); // return 140
console.log(car1.accelerate()); // return 150
console.log(car1.brake()); // return 145
console.log(car1.accelerate()); // return 155
