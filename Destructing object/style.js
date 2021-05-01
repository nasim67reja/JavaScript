// //////////////////////////////////////😍😍😍😍 Destructing Arrays 🤠🤠🤠🤠🤠 ////////////////////////////////////////////////////

// /// note 🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔
//  we can find here information about destructing array and object
// /////   https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/
///////    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
/////(imp)   https://codingnconcepts.com/javascript/array-destructuring/
///////    https://www.javatpoint.com/es6-array-destructuring
/////🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔

// /// what we learn here are given below. these six topic are we going to learn here
// //////////// basic array destructing system :
///   (1). genral rule (2).skip element (3).  Assigning  rest of an array  4.Destructuring Assignment with Functions   5. Using Default Values 6.Swapping Values using the Destructuring Assignment

// ////////////////////////////////////    what is destructing array  the answer is here //////////////////////////////
// Destructuring means to break down a complex structure into simpler parts. With the syntax of destructuring,
// you can extract smaller fragments from objects and arrays. It can be used for assignments and declaration of a variable.
// Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects.
// When destructuring an array, we use their positions (or index) in an assignment.
// Let us try to understand the array destructuring by using some illustrations:

const arr = [2, 3, 2, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// console.log(a, b, c);

//////////😀😀😀👿👿👿 kintu Es6 e new kicu features ashce jeta amader kaj sohoj kore dey ebong
////// etake amra destructing array bole thaki

/////  👉👉👉👉👉1. genral rule
const arr2 = [1, 2, 4, 5];
const [x, y, z, n] = arr2; //// evabe onek sohoje array theke proyojoniow data extract kora jay
// const [x, y, z, n] = [1, 2, 4, 5]  we can also do with the same result
// console.log(x, y, z);

// ////// amra cailei array theke j kno index er data bair kore nite pari samner gula bad diye jeta
///// evabe kora hoy ==>>
//  👉👉👉👉👉 2.skip element
const narr = [1, 2, 3, 4];
// /// suppose amader sudhu 3 number data ti proyojon tkhn amra eivabe korbo ==>>
const [, , three] = narr;
// console.log(three); it should be printed three in the console

//  👉👉👉👉👉 3. Assigning the rest of an array =======>>>>
// What if we want to assign some of the array to variables and the rest of the items in an array to a particular variable? In that case, we would do this:

const [a_, ...b_] = [1, 2, 3, 4, 5]; /// notice that exactly three dot
// console.log(a_, b_);  //// it should be printed 1 [2,3,4,5]

// ///👉👉👉👉👉 4.Destructuring Assignment with Functions   =======>>>>>
// We can also extract data from an array returned from a function. Let's say we have a function that returns an array like the example below:
function returnArr() {
  return [1, 2, 3, 4];
}
const [num1, num2, num3] = returnArr();

//////👉👉👉👉👉 5. Using Default Values       =======>>>>>
// Default values can be assigned to the variables just in case the value extracted from the array is undefined:
// const [num1_, num2_] = [1]; if we write like this num2_ should be undefined but if we write like this :
const [num1_ = 'notFound', num2_ = 'notFound'] = [1];
// console.log(num1_, num2_);

// 👉👉👉👉👉 6.Swapping Values using the Destructuring Assignment
// One more thing. We can use the destructuring assignment to swap the values of variables:
let fnum = 2;
let snum = 3;
/// before es6 we need temporay variable or XOR swap trick
/// temp newn = fnum
//  fnum = snum
// snum = newn
[fnum, snum] = [snum, fnum]; /// but es6 make it easier
// console.log(fnum, snum);

// 👉👉👉👉👉 7. Nested array destructing ===>>>
const nestedArr = [1, 2, 3, [12, 11, 21]];
const [firstNum, , , [Nfirst, Nsecond, Nthird]] = nestedArr;
// console.log(Nfirst, Nsecond, Nthird);
