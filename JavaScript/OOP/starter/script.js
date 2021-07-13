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
console.log(jack.calcAge());
console.log(matilda, jack);
/*
Like Classical oop programming concept here the matilda ,jack is Instance for Person(beacuse javascript has no class). for checking this we have in below:
*/
const jonas = 'jonas';
console.log(jonas instanceof Person); // Return false
console.log(jack instanceof Person); // return true
