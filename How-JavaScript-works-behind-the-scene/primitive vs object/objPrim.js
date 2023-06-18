'use strict';

let age = 30;
let oldAge = age;
age = 31;

console.log(age, oldAge); // as expected 31,30

// for object
const me = {
  name: 'Nasim',
  age: 25,
};

const updateMe = me;
console.log(me, updateMe); // as expected

updateMe.age = 26;

// now look at the output again
console.log(me, updateMe); // me object's age value is also 26
