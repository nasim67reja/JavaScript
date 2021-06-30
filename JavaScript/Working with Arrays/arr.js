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
/*👉👉👉👉👉👉Array.prototype.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.*/
const oldAge = [20, 12, 32, 12, 41];
const newAge = oldAge.map(age => age + 5);
//👉👉👉👉👉👉 Array.prototype.filter()
/* filter method return a array based on  a condition (which element filup the condtion are returned)
here the delete the student from the array which names is startswith s and n*/

// console.log(stndt);
const removeArr = stndt.filter(
  val => !val.startsWith('s') && !val.startsWith('n')
);
// console.log(removeArr);
//👉👉👉👉👉👉 Array.prototype.reduce()
/*The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

The reducer function takes four arguments:

Accumulator
Current Value
Current Index
Source Array
Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

The first time the callback is called, accumulator and currentValue can be one of two values. If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.
Note: If initialValue is not provided, reduce() will execute the callback function starting at index 1, skipping the first index. If initialValue is provided, it will start at index 0.
*/
//reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

const regions = [
  {
    name: 'goa',
    Population: 1000,
  },
  {
    name: 'maharashtra',
    population: 100000,
  },
  {
    name: 'Kerala',
    Population: 1000,
  },
  {
    name: 'Delhi',
    population: 100000,
  },
  {
    name: 'Kolkata',
    Population: 1000,
  },
  {
    name: 'UP',
    population: 100000,
  },
  {
    name: 'Sikkim',
    Population: 1000,
  },
  {
    name: 'Ladakh',
    population: 100000,
  },
];
// const Covid_count = [
const infected = [
  {
    name: 'Kolkata',
    patients: 20,
  },
  {
    name: 'UP',
    patients: 100,
  },
  {
    name: 'Sikkim',
    patients: 10,
  },
  {
    name: 'Ladakh',
    patients: 10,
  },
];
// const StateName = Covid_count.map(val => val.name);
// console.log(StateName);

// const containCovid = state.filter(val => !StateName.includes(val.name));
// console.log(containCovid);

const infectedRegions = infected.map(region => region.name);

const safeRegions = regions
  .filter(region => !infectedRegions.includes(region.name))
  .map(region => region.name);

console.log(safeRegions);
