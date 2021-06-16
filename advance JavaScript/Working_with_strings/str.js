// String
// The String object is used to represent and manipulate a sequence of characters.

// Description
// Strings are useful for holding data that can be represented in text -form
// . Some of the most-used operations on strings are to check their length,
// to build and concatenate them using the + and += string operators, checking for
// the existence or location of substrings with the indexOf() method, or extracting
// substrings with the substring() method.

// Properties
// String length
const firstTruth = 'I Love Allah';
const truth = ' I Love Prophet Mohammad (sa:) ♥';
// console.log(`The Sentence (${truth}) is contain ${truth.length} characters`);
// Methods :
//  👉👉👉👉👉👉 1 .String.prototype.concat()

// syntax : concat(str1) concat(str1, str2) concat(str1, str2, ... , strN)
let concatText = firstTruth.concat(truth);
console.log(concatText);
// It is strongly recommended that the assignment operators (+, +=) are used instead of the concat() method.

//  👉👉👉👉👉👉  .String.prototype.charAt()

// charAt(index)
const index = 4;
// console.log(`The character at index ${index} is : ${truth.charAt(index)}`);
// console.log(`The last character is ${truth.charAt(truth.length - 1)}`);
truth.charAt(100); // Returns empty strings.  If index is out of range, charAt() returns an empty string.
truth.charAt(); // Returns 'I' by default charAt has a value of 0

//  👉👉👉👉👉👉  .String.prototype.charCodeAt()
// syntax charCodeAt(index)
console.log(
  `The character code ${truth.charAt(index)} is equal to ${truth.charCodeAt(
    index
  )} `
);
'ABC'.charCodeAt(); // no index means 0. so it Return 65 for "A"
'ABC'.charCodeAt(-123); // Return NaN

//  👉👉👉👉👉👉 String.prototype.endsWith()
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
// syntax endsWith(searchString) endsWith(searchString, length)
firstTruth.endsWith('Alla', 11); // Returns true
firstTruth.endsWith('Allah'); // Returns true

//  👉👉👉👉👉👉 1 .String.prototype.charAt()
//  👉👉👉👉👉👉 1 .String.prototype.charAt()
//  👉👉👉👉👉👉 1 .String.prototype.charAt()
//  👉👉👉👉👉👉 1 .String.prototype.charAt()
//  👉👉👉👉👉👉 1 .String.prototype.charAt()
//  👉👉👉👉👉👉 1 .String.prototype.charAt()
//  👉👉👉👉👉👉 1 .String.prototype.charAt()
