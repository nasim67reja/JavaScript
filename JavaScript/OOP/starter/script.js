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
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  return this.printName();
};
Car.prototype.brake = function () {
  this.speed -= 5;
  return this.printName();
};
Car.prototype.printName = function () {
  return `${this.make} going at ${this.speed} km/h`;
};
// static method
Car.love = function () {
  return `All people loves to drive car`;
};
console.log(Car.love());

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', '95 km/h');
console.log(car1.accelerate()); // return 130
console.log(car1.accelerate()); // return 140
console.log(car1.accelerate()); // return 150
console.log(car1.brake()); // return 145
console.log(car1.accelerate()); // return 155
// console.log(car1.love()); // thrown an Error*/
////////////////////////////////////////////////////////////////////////////////////////////////////////// 👉👉👉👉👉👉👉 Lecture : 210 (Es6 Classes)
// class expression
/*
const PersonCl = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};*/

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // method
  calcAge() {
    return 2021 - this.birthYear;
  }
  greet() {
    return `Hello ${this.firstName}`;
  }
  static program() {
    return `We love JavaScript`;
  }
}
// prototype also work here
PersonCl.prototype.lastName = function (lastName) {
  return `Hello ${this.firstName} ${lastName}`;
};
const nasim = new PersonCl('Nasim', 1997);
console.log(nasim);
console.log(nasim.greet());
console.log(nasim.calcAge());
console.log(nasim.lastName('Reja'));

/// Note that:
/*
1. classes are not hoisted
2. Classes are first-class citizen
3. Classes are executed in strict mode
*/
////////////////////////////////////////////////////////////////////////////////////////////////////// Lecture : 211 => Getters and setters
const student = {
  firstName: 'Jhon',
  lastName: 'Smith',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
student.fullName = 'Jhon smigla';
// getters => access properties
// seters => change (mutate) them
console.log(student.fullName); // Understand the purpose of getter
////////////////////////////////////////////////////////////////////////////////////////////////////// Lecture : 212 => Static method
// keep that in mind Array.from() is a static method which one's is only avialable for Array constructor not for the array object which one are created from Array  ex: [2,1,23].from() => thorow an error on the console
// look at the previous code 👆👆👆👆👆👆👆👆
// console.log(nasim.program()); // return a TypeError
console.log(PersonCl.program()); // for using the static keyword this one are not exist inside the prototype

////////////////////////////////////////////////////////////////////////////////////////////////////// Lecture : 213 => Object.create()
// this object literal works like a prototype of another object
const PersonProto = {
  calcAge() {
    return 2021 - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
// console.log(steven); // look at the console PersonProto object and calcAge() function will be found in the steven.__proto__
console.log(steven.__proto__ === PersonProto); // return true
steven.name = 'Steven';
steven.birthYear = 1997;
console.log(steven.calcAge());

// another person

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
console.log(sarah.calcAge());
///////////////////////////////////////////////////////////////////////////////////////////  :

const Employer = class {
  constructor(firstName, position) {
    this.firstName = firstName.toLowerCase();
    this.position = position.toLowerCase();
  }
  get money() {
    if (this.position === 'developer')
      return `Hello ${this.firstName} .Your monthly fee is 20k doller per year`;
    else if (this.position === 'hacker')
      return `Hello ${this.firstName} .Your monthly fee is 19k doller per year`;
    else if (this.position === 'programmer')
      return `Hello ${this.firstName} .Your monthly fee is 18k doller per year`;
    else return `There are no jobs in ${this.position} position`;
  }
  get inform() {
    return `${this.firstName}  ${this.position}`;
  }
  set inform(val) {
    const [first, second] = val.split(' ');
    this.firstName = first;
    this.position = second;
  }
};
const nasimReja = new Employer('Nasim', 'developer');
const nusratNipa = new Employer('Nipa', 'hacker');
console.log(nusratNipa.money);
console.log(nasimReja.money);
console.log(nasimReja.inform);
nasimReja.inform = 'Leon Programmer';
console.log(nasimReja.inform);
/////////////////////////////////////////////////////////////////////////////////////////// Challenge 2 :

const CarCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    return (this.speed += 10);
  }
  brake() {
    return (this.speed -= 5);
  }
  get speedUs() {
    return `${this.speed / 1.6} mi/h`;
  }
  set speedUs(num) {
    this.speed = num * 1.6;
  }
};

const ford = new CarCl('Ford', 120);
ford.speedUs = 50;
console.log(ford);
/////////////////////////////////////////////////////////////////////////////////////////// Lecture - 215 : Inheritance Between "classes": Constructor function
const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person2.prototype.calcAge = function () {
  return 2021 - this.birthYear;
};

const Student1 = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear; // this ones is same as the Person2 class and this is not a good idea. it is violet our dry principle(don't repeat your code)
  // 2. Imagine you update your Person2 class in future than you have manually update your student class as also. in large code bases it create a huge problem
  Person2.call(this, firstName, birthYear);
  this.course = course;
};
// Linking Prototypes
Student1.prototype = Object.create(Person2.prototype); // now student prototype will be the person prototype and all student can access the method which ones are exist in Person's prototype
// now we have to create this connection here before we add any more methods to the prototype object of student. And that's becasue Object.create() will return an empty object . So at this point Student1.prototype is empty. SO then onto that empty object we can add methods like introduce(below). But if we use after the introduce method then Object.create() overwrite the method

Student1.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student1('Mike', 1997, 'Computer Science');
mike.introduce();

console.log(mike.__proto__ === Person2.prototype);
console.log(mike.__proto__ === Student1.prototype);

console.log(mike.__proto__.__proto__);

console.dir(Student1.prototype.constructor); // return Person1 for fix this use
Student1.prototype.constructor = Student1;
console.log(
  (mike instanceof Object === mike instanceof Person2) ===
    mike instanceof Student1
); // return true
/*Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism �
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK �*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 23);

// tesla.accelerate();
tesla.chargeBattery(90);
console.dir(tesla.__proto__ === EV.prototype);
console.dir(tesla.__proto__ === Car.prototype);

tesla.accelerate();
tesla.accelerate(); // Example of polymorphism
// tesla.brake();
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Inheritance with  ES6 classes :
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

// child class
class EV extends Car {
  constructor(make, speed, charge) {
    // Car.constructor.call(this, make, speed);
    // Always needs to happen first :
    super(make, speed);
    this.charge = charge;
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }
  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  }
}

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.accelerate(); // Example of polymorphism
tesla.brake();
//////////////////////////////////////////////////////////////////////////// Inheritance with Object.create()

const Man = {
  eat() {
    console.log(
      `${this.fname}  needs to eat ${
        this.age > 24 ? 'less' : 'more'
      } food depend on his age`
    );
  },
  init(fname, age) {
    this.fname = fname;
    this.age = age;
  },
};

// Understand the logic
const nasimr = Object.create(Man);
nasimr.init('Nasim Reja', 24);
nasimr.eat();
const child = Object.create(nasimr);
child.init = function (fname, age, weight) {
  nasimr.init.call(this, fname, age);
  this.weight = weight;
};
child.init('Aliyar', 5, 12);
child.eat();
