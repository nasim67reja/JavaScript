///////////////// First Class And Higher order function :
/*
JavaScript has First class function and this is able to write higher order function.so what's than
all about . thses are given below

JavaScript is a function that has first class function.which in technical terms means that
function are so called first class citizens that means function in practical term are treat
as values
JavaScript treats functions as objects and allow us to pass functions as parameter 
to another function and even return functions from other functions. In JavaScript the 
functions are first class functions meaning we can store them in variable, objects and array. 
The higher order functions can take function, return them or do both.

*/

// Example of first class function are given below:
const studentFee = function (level, semester) {
  // here we take the function value in a variable
  // that's why it is an first class function
  return `Your Semester fee is ${level > 2 ? 4000 : 3000} taka only`;
};
// console.log(studentFee(3, 2));
//  As JavaScript has a first class function that's why we can write higher function
// Example of higher order function are given below :
const addNum2 = function(num,num1){
    return num1
}
const addNum = function(num1,addNum2()){
    return num1 +addNum2()
}