//  First Class and Higher Order function in JavaScript

//  1 First Class function  =>
/*
A programming language is said to have First-class functions when functions 
in that language are treated like any other variable. For example, in such a
 language, a function can be passed as an argument to other functions, can 
be returned by another function and can be assigned as a value to a variable.
JavaScript treat function as a first-class-citizens. This means that functions 
are simply a value and are just another type of object.

ExamPle are given below :
*/
const studentFee = function (level, semester) {
  // here the function value are stored in studentFee variable
  // that's why it is an firstclass funciton
  return `The Semester fee of this student is ${
    level > 2 ? 4000 : 3000
  } taka only`;
};
// console.log(studentFee(3, 2));
// we can also store the value of function in object or array
const newObj = {
  name: 'Nasim reja',
  birthyear: 1997,
  age: function (year) {
    return `${this.name} born in ${this.birthyear} and Now he is ${
      year - this.birthyear
    } years old.`;
  },
};
// console.log(newObj.age(2021));

/*
Higher-Order Function: A function that receives another function as an argument
 or that returns a new function or both is called Higher-order functions
Higher-order functions are only possible because of the First-class function.
*/
// Let’s take some examples to understand better:

// Example 2: Functions returning another function.
// Example 1 : functions takes function as an argument
const lowerCaseAllWord = function (str) {
  return str.replace(/ /gi, '-').toLowerCase();
};
const capitalize = function (str) {
  let newArr = [];
  for (const item of str.split(' ')) {
    let item1 = `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`;
    newArr.push(item1);
  }
  return `${newArr.join(' ')}`;
};
const makingWord = function (str, fn) {
  return `The answer version of the strings : ${fn(str)}`;
};
// console.log(
//   makingWord(
//     'javascript is the best programming language in the world.',
//     lowerCaseAllWord // here we don't call the function just specify the function as an argument
//   )
// );
