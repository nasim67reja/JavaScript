// 🔥🔥🔥🔥🔥🔥 Number
/*
Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
*/
/*Description
When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.*/
// some example are given below :
123; // one-hundred twenty-three
123.0; // same
123 === 123.0; // true
Number('123'); // returns the number 123
Number('123') === 123; // true

Number('unicorn'); // NaN
Number(undefined); // NaN

/*Static methods
Number.isNaN()
Determine whether the passed value is NaN.
Number.isFinite()
Determine whether the passed value is a finite number.
Number.isInteger()
Determine whether the passed value is an integer.
Number.isSafeInteger()
Determine whether the passed value is a safe integer (number between -(2^53 - 1) and 2^53 - 1).
Number.parseFloat(string)
This is the same as the global parseFloat() function.
Number.parseInt(string, [radix])
This is the same as the global parseInt() function.*/

//  👉👉👉👉👉👉 1. Number.isNaN()
/*Number.isNaN()
The Number.isNaN() method determines whether the passed value is NaN and its type is Number. It is a more robust version of the original, global isNaN().*/
// console.log(Number.isNaN(23));
// console.log(Number.isNaN('hi' - 2)); // return true because the result is not a number
// Number.isNaN(value) => this funciton checked the passing argument is NaN or not
//value
// The value to be tested for NaN.
// Return value
// true if the given value is NaN and its type is Number; otherwise, false.
// console.log(0.1 + 0.2 === 0.3); // this is a bug in javascript. it should be ture but return false
// console.log(Math.pow(2, 53) - 1);
// console.log(Math.pow(2, 53));
//  👉👉👉👉👉👉 2. Number.parseFloat()
/*The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.*/
//Number.parseFloat(string)
// console.log(Number.parseFloat('12.4rem'));
//  👉👉👉👉👉👉 3. Number.parseInt()
/*The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.*/
//Number.parseInt(string)
// console.log(Number.parseInt(' 23.8ast ')); // white space don't create any problem
//  but startswith any string is not count return NaN
//This method has the same functionality as the global parseInt() function:
Number.parseInt === parseInt; // true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SOME MATH CALCULATION ///////////////////////////////////////////////////////////////////

// 👉👉👉👉👉👉👉 1. Math.max()
/*The Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.*/
Math.max(2, 3, 4, 5, 12, 1, 4); // Return 12
Math.max(2, 3, 4, 5, '12', 1, 4); // Return 12 . because it is also support type coercion
const arr9 = [10, 4, 21, 3];
// console.log(Math.max(...arr9));
// 👉👉👉👉👉👉👉 1. Math.min()
/*it's return the opposite of the math.max()*/
Math.min(3, 1, 4, 12); // Return 1 also work with array
// console.log(Math.min(...arr9));

/*
👉👉👉👉👉👉👉 Math.sqrt()
The Math.sqrt() function returns the square root of a number
Math.sqrt(x)
*/
Math.sqrt(9); // return 3
// console.log(9 ** (1 / 2)); // alternative of Math.sqrt(
// console.log(8 ** (1 / 3)); // we can use for cube or more than cube
// 🔥🔥🔥🔥🔥🔥🔥  some important aspect with number that might be work for future project
// console.log(Math.PI * Number.parseFloat('10px') ** 2); // count area of a circle as Math.PI is constant and it's value is 3.1416
// const randomInt = (max, min) =>
//   Math.floor(Math.random() * (max - min) + 1) + min; // 😊😊😊😊😊 wow this funtion create any random number as we want
// console.log(randomInt(20, 10));

/// 👇👇👇👇👇👇👇👇👇 Rounding Integeras
// console.log(Math.trunc(23.9)); // Math.trunc() remove decimal parts from a float number

Math.round(23.4); // return 23
Math.round(23.6); // return 24

Math.ceil(23.6); // return 24
Math.ceil(23.6); // return 24

Math.floor(23.6); // return 23
Math.floor(23.6); // return 23
Math.floor('23.3'); // also return 23 🙅‍♀️🙅‍♀️🙅‍♀️🙅‍♀️🙅‍♀️ because all the method works with type coercion

/// difference between Math.floor()  and Math.trunc()
// They are same for positive number . interesting fact is that for negative number Math.trunc() and Math.ceil() is same understanding the math logic =>
//  because ceil always return the above number and floor return the below number just like room ceil and floor
// console.log(Math.trunc(-23.6));
// console.log(Math.floor(-23.6));
// comment : floor is better than trunc . because it's works both for negative and positive

/// 👇👇👇👇👇👇👇👇👇 Rounding floating or decimal numbers
// console.log((2.345).toFixed(2)); // return 2.35 remember that toFixed always return a string not a number
Number((2.345).toFixed(2)); // this result will be a number
+(2.345).toFixed(2); // also return number. using '+' for convering a string to a number is very nice process

const randomInt = (max, min) =>
  // Math.round(Math.random() * (max - min) + 1) + min;
  Math.round(Math.random() * (max - min)) + min;
let done = false;
let i = 0;
while (i < 300 && !done) {
  let num = randomInt(10, 15);
  if (num === 10) {
    // console.log('yes the number is 10');
    done = true;
  } else {
    // console.log(num);
  }
  i++;
}

// /// Reminder operator : when we need to do something with 'n' th number element we can go with reminder operator
// we can calculate a number that is even or odd by using the reminder operator
const isEven = n => n % 2 === 0;
isEven(4); // return true
isEven(5); // return false

// ///////////////////////////////////////////////////////////////////////////////////////
//// Now the time for bigInt()
/*
In JavaScript number are save in 64 bit(where only 53 is use) in binery format that means largest can be 64 0 or 1. big than 64 0 or 1 javascript can not calculate or display it . the larges number with decimal 2**53 -1. in binary format this number makes with 64 0 or 1 . this is the largest number for javascript.Number can not display more than this number.
that's where bigInt comes to this place 
*/
// console.log(2 ** 53 - 1); // return 9007199254740991 // this is essentially the bigest number that javascript can safely represent
// console.log(Number.MAX_SAFE_INTEGER); // also return 9007199254740991

// console.log(23498014017401275017n); // here the n convert the number to bigInt
// console.log(23415n * 12839743174n); // Interesting fact that all the operator works for BigInt . But we can not operate bigint with normal number . it's thorwn an TypeError on the console
let numArr = [2353, 1234n];
// console.log(numArr[0] * numArr[1]); // throw typeError
// console.log(BigInt(numArr[0]) * numArr[1]);
20n > 15; // return true
20n === 20; // return false like '20'===20===20n
20n == 20; // return true like '20'==20==20n

/// all the math operation does not work here
// Math.sqrt(20n); // thrown an typeError into the console
10n / 3n; // return 3n it's cut the decimal part
10 / 3; // return 3.333333333

// ///////////////////////////////////////////////////////////////////////////////
// Date :
/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.*/
const dateNow = new Date();
// console.log(dateNow);
// console.log(new Date('1997 19 june 3')); // never use this. used the string which one's created by javascript
const future = new Date(2023, 1, 6, 12, 23, 36); // here new date(year,month,day,hour,min,sec) note that. month is 0 based

// as date is a obect there are bunch of method avilable
console.log(future);
future.getFullYear(); // return 2024
future.getMonth(); //return 1
future.getDay(); //return 1 not the day of a month . this return the day of a week
future.getDate();
// console.log(future.getTime());
// console.log(new Date(1675664616000));
future.getTime();
future.getHours();
future.getSeconds();
console.log(future.toISOString()); // return 2023-02-06T06:23:36.000Z this is the iso string which follow the some kind of international standard
// there are also set month , date ,time (for more look mdn)
future.setFullYear(2027);
console.log(future);
const sum = a => b => a + b;
console.log(sum(5)(6));
