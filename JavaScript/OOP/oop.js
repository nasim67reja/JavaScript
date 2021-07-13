// Object oriented Programming :
/*With the basics out of the way, we'll now focus on object-oriented JavaScript (OOJS) — this article presents a basic view of object-oriented programming (OOP) theory, then explores how JavaScript emulates object classes via constructor functions, and how to create object instances.
 */

// const myName = function (name) {
//   return `Hello ${name},`;
// };
// console.dir(myName);

const arr = [1, 2, 3];
// console.dir(arr.constructor);
const newArr = arr.constructor.prototype.map(num => num * 2);
console.log(newArr);
console.dir(Array.prototype);
