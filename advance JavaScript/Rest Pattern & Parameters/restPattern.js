//  Rest Pattern looks exactly like the spread operator so it has the same syntax with three dots
// but it  actually  does the opposite of the spread operator
//  Remember we use spread operator to build new arrays or to pass  multiple values in to a funtion so ,those are the
// two use cases of the spread operator and in both cases we use  the spread operator to expand
//  an array in two individual elements
//  now the rest patterns uses the exact same syntax Hwever to collect multiple elements
//  and condentthem into an array . so that's really the opposite of spread
// The Spread operator use to  unpack an array while rest is to pack  element into an array

// Spread Operator: /// Three dots used in the right side
const classNIne = ['Fahim', 'Lafis', 'Toufiq', 'Rezwan'];
const claassTen = ['Sadikul', 'Nahid', 'Labib', 'Mimfat', 'Fahim', 'Sihab'];
let allStudents = [...classNIne, ...claassTen]; ////// Unpacking these array

//Rest Pattern: /// three dots are uesed in the left side
let [first, , , , second, ...restStudents] = allStudents; // Packing the rest element of the allstudents array
//  note : skip element are not packed
// console.log(first, second, restStudents);

// //// Another example :
function add(...num) {
  /// here ...num  does pack the element into a array
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
// console.log(add(2, 3, 4, 5));
const number = [3, 2, 4, 5];
// console.log(add(...number));  /// here ...number unpack the number array element
//  here ...num and ...number contain the exact same syntax but there funtionality are not same
//  once is spread syntax(...number) and once is rest pattern(...num)

//  Another example with Object. after 2018 es6 object also allowed spread and rest syntax
const cricketBat = {
  quantity1: 20,
  price1: 4000,
};
const football = {
  quantity2: 10,
  price2: 5000,
};
// ///////// left side rest Pattern  //// right side Spread operator
let { quantity1, ...others } = { ...cricketBat, ...football };
console.log(quantity1, others);

//  Spread operator  is used where we would  otherwise write values separate by comma
//  on the otherhand rest pattern is basically used where we would write variables names separate by commas
//   rest pattern used where variable exist with separate by comma besides spread operator used
//  where value exist with separate by comma
