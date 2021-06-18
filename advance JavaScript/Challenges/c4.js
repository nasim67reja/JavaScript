'use strict';
// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;
// underscore_case first_name Some_Variable calculate_AGE  delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK �
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
const button = document.querySelector('.btn');
const inputText = document.querySelector('.input');
const heading1 = document.querySelector('h1');

button.addEventListener('click', function () {
  let arrStr = inputText.value.split('\n');
  let i = 1;
  for (const item of arrStr) {
    console.log(`${returnCamelCase(item)} ${'✅'.repeat(i)}`);
    i++;
  }
});
function returnCamelCase(str) {
  let indexUnderscore = str.indexOf('_');
  let wholeStr = `${str.slice(0, indexUnderscore).toLowerCase()}${str[
    indexUnderscore + 1
  ].toUpperCase()}${str.slice(indexUnderscore + 2, str.length).toLowerCase()}`;
  return wholeStr.replace(/;/gi, '');
}
