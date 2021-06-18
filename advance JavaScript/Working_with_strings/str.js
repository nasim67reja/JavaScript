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

//  👉👉👉👉👉👉 1 .String.prototype.replace()
console.log(concatTextIndex.replace(/Love/g, 'Like')); // regular expression  for details check website

//  👉👉👉👉👉👉 1 .String.prototype.slice()
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
console.log(concatTextIndex.slice(0, 12));

//  👉👉👉👉👉👉  .String.prototype.split()
// The split() method divides a String into an ordered list of substrings, puts these substrings into
//  an array, and returns the array.  The division is done by searching for a pattern; where the pattern is
//  provided as the first parameter in the method's call.
console.log(truth.split(' '));
// convert a string into an Array
truth.split();

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

//  👉👉👉👉👉👉 1 .String.prototype.trim()
// The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace
//  characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
// trimEnd() => Remove whitespace from End of the string
//  trimStart() => Remove whiteSpace from start of the string
//  👉👉👉👉👉👉 1 .String.prototype.valueOf()
// The valueOf() method returns the primitive value of a String object.

const testString = new String('Hello world !');
console.log(typeof testString);
console.log(typeof testString.valueOf());
