// String
// The String object is used to represent and manipulate a sequence of characters.

// Description
// Strings are useful for holding data that can be represented in text -form
// . Some of the most-used operations on strings are to check their length,
// to build and concatenate them using the + and += string operators, checking for
// the existence or location of substrings with the indexOf() method, or extracting
// substrings with the substring() method.

const firstTruth = 'I Love Allah';
const truth = ' I Love Prophet Mohammad (sa:)  ♥';
// Properties
// String length
// console.log(`The Sentence (${truth}) is contain ${truth.length} characters`);

//////////////////////////////////////////////////////////////////////////////////
// Methods :

//  👉👉👉👉👉👉 1 .String.prototype.includes()
// The includes() method performs a case-sensitive search to determine whether one string may be
// found within another string, returning true or false as appropriate.
//  syntax includes(searchString) includes(searchString, position)
//  position => we can start from 0 by default but we can also specify the number
truth.includes('love'); // Return false . because this method is case sensitive
firstTruth.includes('Love'); // Return true.

//  👉👉👉👉👉👉 String.prototype.indexOf()
// The indexOf() method returns the index within the calling String object of the
// first occurrence of the specified value, starting the search at fromIndex.
// Returns -1 if the value is not found.
// indexOf(searchValue);
// indexOf(searchValue, fromIndex);
const concatTextIndex = firstTruth.concat(' & ', truth);
const firstIndex = concatTextIndex.indexOf('Love');
const secondIndex = concatTextIndex.indexOf('Love', firstIndex + 1);
// console.log(firstIndex, secondIndex);
//  👉👉👉👉👉👉  .String.prototype.lastIndexOf()
// syntax  lastIndexOf(searchValue)
// lastIndexOf(searchValue , fromIndex)
const lastIndex = concatTextIndex.lastIndexOf('Love');

//  👉👉👉👉👉👉  .String.prototype.concat()
// syntax : concat(str1) concat(str1, str2) concat(str1, str2, ... , strN)
let concatText = firstTruth.concat(truth);
// console.log(concatText);
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
// console.log(
//   `The character code ${truth.charAt(index)} is equal to ${truth.charCodeAt(
//     index
//   )} `
// );
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

// Some String operation
const allowedPlane = function (inform) {
  let informv = inform.toLowerCase();
  if (informv.includes('knife') || informv.includes('gun')) {
    return 'The person is not allowed';
  } else return 'The person is allowed for take off';
};
console.log(
  allowedPlane('I have Knife , some food, coca cola and my cell phone')
);
console.log(allowedPlane('I have a gun for my own protection'));
console.log(allowedPlane('I have socks and a water bottle'));
