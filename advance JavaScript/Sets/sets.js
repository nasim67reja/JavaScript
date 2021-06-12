// The Set object lets you store unique values of any type, whether primitive values or object references.
// Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

//  1. Create Sets :
const newName = ['fahim', 'Toufiq', 'Labib', 'Rezwan'];
const mySet = new Set([
  'Tonmoy',
  'Sadiqul',
  'Nahid',
  'Labib',
  'Fahim',
  'Sihab',
  newName,
]);

// 2 Set.prototype.add(value)
// Appends value to the Set object. Returns the Set object with added value.
mySet.add('Reshad');

// 3 Set.prototype.has(value)
// Returns a boolean asserting whether an element is present with the given value in the Set object or not.
const x = mySet.has('Tonmoy');
// console.log(x); // true

// 4 we can get the size of the set
const y = mySet.size;

// 5. We can delete item from a set :
mySet.delete('Reshad');

// 6. Iterate of a set :
// for (const item of mySet) console.log(item);

// 7. convert Set object to an Array object
const newArr = [...mySet];
// console.log(newArr);
