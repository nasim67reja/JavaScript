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
// 👉👉👉👉 5. Array.prototype.find()
/*The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
This is very important method to find something see the practical exam in the bankist project */
const newArr1 = [1, 23, 4, 3, 12, -12, -1, -2, -4, 21, 14, 51];
const firstNegativeNum = newArr1.find(num => num < 0);
console.log(`The first negative number is :`, firstNegativeNum);

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
function largeNum(numArr) {
  return numArr.reduce((acc, crnt) => (acc > crnt ? acc : crnt));
}
console.log(largeNum([2, 3, 12, 1]));
// console.log('%cseparator', 'color:white');
// const newArr = [2, 31, 53, 12, 1, -1];
// const largeN = newArr.reduce((acc, crnt) => {
//   console.log(acc, crnt);
//   if (acc > crnt) return crnt;
//   else return acc;
// });
// console.log(largeN);
//
//
//
//
// Proper explaination of reduce method
/*Using Jonas' equation:

const ages = [10, 6];
console.log(ages.reduce((acc, age) => acc + age, 0) / ages.length);
 
Console:
8
Step-by-step:
We declare the variable ages, and assign it an array of two values, 10 and 6.
Inside the .log-method, we call the .reduce-method on our ages array. It will iterate two times, as we only have two values stored. acc starts as 0, as we set in the second argument of the method call. 
1st iteration: 0 + 10 = 10, acc now equals 10
2nd iteration: 10 + 6 = 16, acc now equals 16
We reached the end of the array, so .reduce returns acc, which has the value 16.
We divide 16 by the length of the ages array, which is 2. 16 / 2 is 8.
We finally pass the value 8 as the parameter to the .log-method, which sequentially prints out to the console.
Using your equation:
const ages = [10, 6];
console.log(ages.reduce(function(acc,age,i,arr){
    return (acc + age)/(arr.length);
},0));
 Console: 
5,5
Step-by-step:

We declare the variable ages, and assign it an array of two values, 10 and 6.
Inside the .log-method, we call the .reduce-method on our ages array. It will iterate two times, as we only have two values stored. acc starts as 0, as we set in the second argument of the method call. 
1st iteration: (0 + 10) / (2) = 10 / 2 = 5, acc now equals 5
2nd iteration: (5 + 6) / (2) = 11 / 2 = 5,5, acc now equals 5,5
We reached the end of the array, so .reduce returns acc, which has the value 5,5.
We finally pass the value 5,5 as the parameter to the .log-method, which sequentially prints out to the console.*/
//
//
//
//
//
//
//
//
//
//
//
//
//
// 👉👉👉👉👉👉 some() method :
/*The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.*/
const array = [1, 2, 3, 4, 5, 6];
const even = array.some(element => element % 2 === 1);
// console.log(even); // Return true as even number exist in the array
// 👉👉👉👉👉👉 Array.prototype.every()
/*The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.*/
const positive = array.every(element => element > 0);
// console.log(positive);// return true as all the element is above of 0
/* 👉👉👉👉👉👉 Array.prototype.flat()
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. */
const arr1 = [0, 1, 2, [3, 4], [5, 6, 7, [8, 9]]];
// console.log(arr1, arr1.flat(1), arr1.flat(2)); // look at the console for better understand. flat(x)=> x will be number which specify that flat goes how much deep into an array

const towTimesBig = arr1.flat(2).map(num => num * 2);
// console.log(arr1.flat(2), towTimesBig);
const addAll = arr1
  .flat(2)
  .map(num => num * 2)
  .reduce((acc, crnt) => acc + crnt);
// console.log(addAll);
const arr2 = [0, 1, 2, [3, 4]];
// const addAl2 = arr2
//   .flat()
//   .map(num => num * 2)
//   .reduce((acc, crnt) => acc + crnt);
// console.log(addAl2);
// we can use flatMap() method instead of this proces
const insteadFlat = arr2.flatMap((num, i, arr) => {
  return num;
});
// console.log(insteadFlat);
// 👉👉👉👉👉 sort() method
const friends = ['alex', 'jonas', 'ben', 'rohit', 'smith'];
// console.log(friends.sort());
const oddNumber = [1, 5, 13, 19, 93, 33, 49, 53, 9];
// console.log(oddNumber.sort()); // Return this [1, 13, 19, 33, 49,5, 53,  9, 93]
// beacuse sort works for strings. don't worry we can make for number also by passing a callback funtion
const oddNumSort = oddNumber.sort((a, b) => a - b); // a-b return small to big and b-a will be return the number big to small
// console.log(oddNumber); // this works as we expected . for better understanding look mdn or jonas course sort lecture

//
//👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
/*Hi Adam,

first it is of course a difference on the complexity whether mapping, filtering or reducing the array in contrary of sorting. In the first functions you definitely must do something once for each element. Filter it out (or not), map it or run the reducing function. In case of sorting the best case is an array, that already is sorted. Then you need to look at each element once. In other cases (random arrays) the complexity using swapping is up to the quadrat of the number of elements. Thats because you need for each element a comparison with each other element of the non sorted rest of the array until it is at the right position. Look here the processing to get the least element:

[200, 450, -400, 3000, -630, -130, 70]; 
check 1. and 2. element: 200 - 450 < 0 no swap                   
check 1. and 3. element: 200 - (-400) > 0 swap
[-400, 450, 200, 3000, -630, -130, 70]; 
check 1. and 4. element: -400 - 3000 < 0 no swap
check 1. and 5. element: -400 - (-630) > 0 swap
[-630, 450, 200, 3000, -400, -130, 70]; 
check 1. and 6. element: -630 - (-130) < 0 no swap
check 1. and 7. element: -630 - 70 < 0 no swap
now the first element is at the right place, it's the least one
now starting with the first element of the unsorted array:
check 1. and 2. element: 450 - 200 > 0 swap
[-630, 200, 450, 3000, -400, -130, 70]; and so on!!




Second: no, the numbers are taken as they are, not the absolut values. So in case of the example:

200 - 450 = -250, so negativ and not swapping (step 1 above)

450 - (-400) = 850 , so positiv an swapping (step 2 above)

*/
//
//
//
//
//
//
//
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

// console.log(safeRegions);
