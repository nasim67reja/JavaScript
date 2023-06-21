# Reference vs Value [udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648509?start=75#questions)

## Check this code

```js
const accountNum = 12312340;
const inform12312340 = {
  Name: 'Rezwanul Haque',
  address: 'Chirirbander , Dinajpur\nBangladesh',
  totalAmount: '2 Lakh ',
  lastDepostie: '20k',
  lastDepostieDate: '20 july 2020',
};

function memberInformation(acntnum, inform) {
  inform.lastDepostieDate = '24 june 2021'; // not a good practice to change the value of the object or string
  inform.lastDepostie = '20k';
  // inform.totalAmount = '2 lakh 20k';
}
console.log(memberInformation(accountNum, inform12312340));
```

here in this function we manipulate the inform object's property.

Now see the actual object `console.log(inform12312340)`. the code inside the function also affected the original object.
Then we can create another function and manipulate the value from inside the function body

```js
function totalBalance(amount) {
  return (amount.totalAmount += 100);
}
console.log(totalBalance(inform12312340));
console.log(memberInformation(accountNum, inform12312340));
```

so we can say that ,how the ineraction of different function with the same object can create issues.

## NOTE

In programming there are two terms that are use all the time when dealing wtih functions
which is passing by value and passing by reference and many experienced programmer that are new to javaScript
have some confusion between this terms and how at works in javascript
so javascript does not have at passing by reference only passing by value even
though it looks like passing by reference. so there are language like c++ where you
can pass a reference to any value instead of the value itself . this work even
with primitive so you could pass reference to the value 5 and then the original
value outside of the function would be changed
and this is called passed by refernce once again javascript does not pass by
refernce

## IMPORTANT

When we pass a primitive type as an argument on a function, the function makes a copy of the ORIGINAL VALUE, and works with it.

On the other hand, when we pass an object as an argument on a function, the function makes a copy of the REFERENCE that points to the place of the memory where the object is stored. This copy is a value itself, is not a reference. Because all of this, the original object can be modified from inside of a function.

- In programming languages, Arguments can be passed by value, or passed by reference

- JS has not passing by reference, only passing by value...

- So, when we pass primitive values, the function works with a value, which is a copy of the original value

- When we pass an object, the function works with a value that address to the
  spot where the original object is in the memory (still is not a reference)
