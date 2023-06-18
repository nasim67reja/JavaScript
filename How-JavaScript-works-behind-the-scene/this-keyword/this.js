'use strict';

// method

const jonas = {
  name: 'Jonas',
  year: 1989,
  calcAge: function () {
    return 2037 - this.year; // here this point to jonas beacuse jonas call the function
  },
};
jonas.calcAge();

// simple function call
// function name() {
//   console.log(this); // here this will global object if strict mood on otherwise undefined
// }
// name();

// console.log('this ', this);

//  More Relevant

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};
// calcAge(1991);

const calcAgeArr = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // window
};
// calcAgeArr(1980);

const matila = {
  year: 2017,
};

matila.calcAge = jonas.calcAge;
console.log(matila.calcAge());
