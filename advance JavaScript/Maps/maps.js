'use stict';
/////////////////////////////////////// imp link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
// A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.

//  🤘🤘🤘 A Map's keys can be any value (including functions, objects, or any primitive)
// The keys of an Object must be either a String or a Symbol.

// Setting object properties
// Setting Object properties works for Map objects as well, and can cause considerable confusion.

// Therefore, this appears to work in a way:

//  👉👉👉👉 1 . Creating maps by the use of map.set
//                                      The set() method adds or updates an element with a specified key and a value to a Map object.
//  set(key, value)
const contacts = new Map();
contacts.set('Nasim', '01791843265');
contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });
//  Since the set() method returns back the same Map object, you can chain the method call like below:
contacts.set('x', '01323....').set('y', '0173.....').set('z', '018..');
// console.log(contacts);

//  👉👉👉👉 2 . Map.prototype.get()

// The get() method returns a specified element from a Map object. If the value
// that is associated to the provided key is an object, then you will get a reference to
//  that object and any change made to that object will effectively modify it inside the Map object.
//  syntax : get(key)
contacts.get('Nasim'); // return 01791843265
const x = contacts.get('Jessie');
// console.log(x.phone); // x behave like an object
contacts.get('blablah'); // Returns undefined

//  👉👉👉👉 3 . Map.prototype.has()

// The has() method returns a boolean indicating whether an element with the specified key exists or not.
// syntax : has(key)

contacts.has('Nasim'); // Returns true
contacts.has('blahblah'); // Returns false because this key does exist in the map

//  👉👉👉👉 4 . Map.prototype.delete()
// The delete() method removes the specified element from a Map object by key.
//  syntax delete(key)
contacts.has('x'); // Returns true
contacts.delete('x');
contacts.has('x'); // Returns false because the key x was deleted

//  👉👉👉👉 5 . Map.prototype.keys()
//  The keys() method returns a new Iterator object that contains the keys for each element in the map object in inertion order
contacts.keys(); // Return all the keys from the contacts map

//  👉👉👉👉 6 . Map.prototype.values()
//  The values() method returns a new Iterator object that contains the values for each element in the map object in inertion order
contacts.values();

//  👉👉👉👉  7.Map.prototype.clear()
// The clear() method removes all elements from a Map object.
// contacts.clear()

// 👉👉👉👉  8 . Map.prototype.entries()
// The entries() method returns a new Iterator object that contains the [key, value] pairs
// for each element in the Map object in insertion order. In this particular case, this
// iterator object is also an iterable, so the for-of loop can be used. When the protocol [Symbol.iterator] is used,
//  it returns a function that, when invoked, returns this iterator itself.
contacts.entries();

// 👉👉👉👉  9. Map.prototype.forEach()
//  The forEach() method executes a provided function once per each key/value pair in the Map object
//  in insertion order
// .................................
// 👉👉👉👉  10 . size property
contacts.size; // Returns the size of the maps

//////////////////////////////////////  👉👉👉👉👉 11. alternative of set method ////////////////
//  Here we can pass an array . and this array itself will contain multiple arrays and
// each of  these arrays  the first position is gonna be the key and the second position is gonna be
// the value, so let's do that
const alterSet = new Map([
  ['fname', 'Nasim'],
  ['lname', 'Reja'],
]);
//  and when we need to add element into our maps we can use the set method

///////////////////////////////////////// ⚡⚡⚡⚡⚡⚡ Little bit try with JavaScript Map's
const question = new Map([
  ['question', 'Which device people use most ?'],
  [1, 'Mobile'],
  [2, 'Desktop'],
  [3, 'Laptop'],
  ['correct', 2],
  [true, 'Correct✌'],
  [false, 'Try again 😓'],
]);
console.log(question.get('question'));

///////// Maps are iterable so for of loop works here
for (const [item1, item2] of question) {
  if (typeof item1 === 'number') {
    console.log(`Answer ${item1} : ${item2}`);
  }
}
// const input = Number(prompt('Enter your Result :')); // Remember this is only work in web page not in node
// console.log(
//   input === question.get('correct') ? question.get(true) : question.get(false)
// );
// shorcut again
// console.log(question.get(question.get('correct') === input));

// if (input === question.get("correct")) console.log(question.get(true));
// else console.log(question.get(false));
// const output = (input === question.get("correct"))?(question.get(true)
// :(question.get(false)
// const output =
//   input === question.get("correct") ? question.get(true) : question.get(false);
// console.log(ouput);

//  👉👉👉👉👉 12 . Convert map to array
const mapArr = [...question];
const mapKeyArr = [...question.keys()];
const mapValueArr = [...question.values()];
// console.log(mapValueArr);
// console.log(mapArr);

// 👉👉👉👉 13 . Convert Object to Map
