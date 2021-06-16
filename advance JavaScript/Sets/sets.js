// The Set object lets you store unique values of any type, whether primitive values or object references.
// Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

// 👉👉👉 1. Create Sets :
const mySet = new Set([
  'Tonmoy',
  'Sadiqul',
  'Nahid',
  'Labib',
  'Fahim',
  'Sihab',
  // newName,
]);

// 👉👉👉 2 Set.prototype.add(value)
// Appends value to the Set object. Returns the Set object with added value.
mySet.add('Reshad');

// 👉👉👉 3 Set.prototype.has(value)
// Returns a boolean asserting whether an element is present with the given value in the Set object or not.
const x = mySet.has('Tonmoy');
// console.log(x); // true

// 👉👉👉 4 we can get the size of the set
const y = mySet.size;

// 👉👉👉 5. We can delete item from a set :
mySet.delete('Reshad');

// 👉👉👉 6. Iterate of a set :
for (const item of mySet) {
  // console.log(item);
}

// 👉👉👉 7. convert array object into set:
const newName = ['fahim', 'Toufiq', 'Labib', 'Rezwan'];
const test = mySet.add(newName);
// console.log(test);

// 👉👉👉 8. convert Set object to an Array object
const newArr = [...mySet];
// console.log(newArr);

// 👉👉👉 9. Relation with Array objects :
let myArray = ['value1', 'value2', 'value3'];
// Use the regular Set constructor to transform an Array into a Set
let my_Set = new Set(myArray);
// mySet.has('value1')     // returns true
// Use the spread operator to transform a set into an Array.
// console.log([...mySet]); // Will show you exactly the same Array as myArray

//  👉👉👉 10 . Remove duplicate elements from the array
const number = [1, 2, 1, 2, 3, 4, 4, 5, 1, 5];
const dupSet = new Set(number);
// console.log([...dupSet]);

// 👉👉👉 11 . Relation with Strings :
const myFirstName = 'Nasim';
const myFirstNameSet = new Set(myFirstName);
// console.log(myFirstNameSet);

// console.log(new Set('Nasimrejaleon').size); The word contain 11 specific  letters

// 👉👉👉 12 . clear all item from a sets
mySet.clear();
