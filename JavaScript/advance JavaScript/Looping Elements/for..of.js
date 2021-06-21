// for...of
// The for...of statement creates a loop iterating over iterable objects, including: built-in String,
// Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
// It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// Syntax :
// for (variable of iterable) {
//   statement;
// }

const studentsList = ['Tonmoy', 'Nahid', 'sihab', 'Fahim', 'Reshad'];
for (const student of studentsList.entries()) {
  console.log(`${student[0] + 1} : ${student[1]}`);
}
