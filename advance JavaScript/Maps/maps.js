'use stict';
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
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
//  👉👉👉👉 2
//  👉👉👉👉 2
//  👉👉👉👉 2
//  👉👉👉👉 2
//  👉👉👉👉 2
