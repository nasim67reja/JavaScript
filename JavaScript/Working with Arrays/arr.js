'use strict';
/*
Array
The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
*/

const stndt = [
  'sadiqul',
  'nahid',
  'mimfat',
  'labib',
  'reshad',
  'fahim',
  'sihab',
  'tonmoy',
  'rafi',
  'jotirmoy',
  'payel',
  'mansif',
  'tasin',
  'rafi',
  'masum',
];
// 👉👉👉👉 1. Array.prototype.slice()
/*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.*/
// if we need to first 5 boys in the class we can do that by help of slice method:
stndt.slice(0, 6); // should be printed the first five element into the array
stndt.slice(-1); // nice tricks for pirnting the last element of any array
const stdntCopy = stndt.slice(); // shallow copy of the array like the spread operator [...stndt]
stndt.slice(-3, -1); // ['tonmoy','rafi']
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 👉👉👉👉 2. Array.prototype.splice()
/*The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().*/
stndt.splice(-1); // the last element in the array are deleted
stndt.splice(10, 2, 'new1', 'new2'); // remove 2 item from 10 and add the specify element
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 👉👉👉👉 3. Array.prototype.reverse()
/*The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.*/
// console.log(stndt.reverse());
['n', 'o'].reverse();
// console.log(stndt); // reverse method also reverse the main array keep in mind that
// 👉👉👉👉 4. Array.prototype.concat()
/*The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.*/
stndt.concat(['hello']);
// 👉👉👉👉 5. Array.prototype.join()
/*The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.*/
stndt.join(' - ');
// 👉👉👉👉 6. Array.prototype.slice()
/**/

// 👉👉👉👉 7. Array.prototype.slice()
/**/
///////////////////////////////////////////////////////////////////////
// you can found all the array method in mdn
//////////////////////////////////////////////////////////////////////////
/*The implementation and difference between for of and forEach are given below:*/
// for of
console.log('-----------for of loop-----------');
for (const [id, name] of stndt.entries()) {
  console.log(`id-${id + 1} : ${name.toUpperCase()}`);
}
// forEach
console.log(`---------forEach----------`);
stndt.forEach(function (studentName, index) {
  console.log(`id-${index + 1} : ${studentName}`);
});
// for loop
console.log('------------for Loop-------------');
for (let i = 0; i < stndt.length; i++) {
  console.log(`id-${i + 1} : ${stndt[i]}`);
}
// while loop
console.log('--------------while loop--------------------');
let i = 0;
while (i < stndt.length) {
  console.log(`id-${i + 1} : ${stndt[i]}`);
  i++;
}
/////////////////////////////////////////////////////////////////////////
/*forEach method: 
forEach is higher order function and takes a callback function as an argument. where the argument will be each element of the targeted/specified array
Array.prototype.forEach()
The forEach() method executes a provided function once for each array element.

*/
