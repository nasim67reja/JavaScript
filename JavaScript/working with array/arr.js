// working with array method
const movements = [120, 200, -500, 1300, -600, 3000];
// 👉👉👉👉 inclueds()  method check the equality
// console.log(movements.includes(-500));
// 👉👉👉👉 besides some() method check the condtion either it true or false
const aboveThousandDeposit = movements.some(mov => mov > 1000);
const sameAsInclueds = movements.some(mov => mov === -500); // same as line 4
// console.log(aboveThousandDeposit, sameAsInclueds); // it will be printed true as the array contain 1300 and 3000
//👉👉👉👉 every() method is like some() method. it's also check the condition not equality ; return true or false based on condition here all the element of the array should be maintain the condition
const everyPositive = movements.every(mov => mov > 0);
// console.log(everyPositive);// return false

// 👉👉👉👉flat() method=>
// const arr2 = [1, 2, [3, 4]];
// console.log(arr2.flat());
// const arr3 = [1, 2, 3, [4, 5, 6, [7, 8]]];
// console.log(arr3, arr3.flat(), arr3.flat(2));
// this is how the flat method works in javascript
// let's see another example

/*
check this in the bankist project for real world project
const allBankMoney = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((acc, crnt) => acc + crnt);
console.log(allBankMoney);
const allBankMoney2 = accounts
  .flatMap(mov => mov.movements)
  .reduce((acc, crnt) => acc + crnt);
console.log(allBankMoney2); // remember that flatMap method goes only one level deep*/
console.log('a' > 'A');
