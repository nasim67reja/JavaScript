'use strict';

/*
function.call(this,argu1,arug2 .... arguN)
function.apply(this,[argu1,argu2....,arguN])
const variable = function.bind(this,argu1,....,arguN)
the difference between call and bind , here in bind don't execute or call the function just return a function
which ones you have to store in a variable as javascript has a first class function

Well, ask yourself these questions:

1. Do I need to store this function in a variable for later use? If so, use bind()

2. Do I need to pass this function as an argument? If so, use bind()

3. Do I need to call this function right now? If so, use call()
*/
// 👉👉👉👉👉 1.Call() method =========>>>>
/*
The call() method is a predefined javascript method. with call(), an object can use a method 
beolnging to another object. means an object property can use another object property
*/ const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log('Eurowings ', eurowings);

const resturantFood = {
  item1: 'Burger',
  priceItem1: 250,
  item2: 'Pizza',
  priceItem2: 180,
  totalBill(name, foodName, quantity) {
    return `Hi ${name},\nYou have ordered ${quantity} ${foodName}\
 And your total bill is ${
   foodName === this.item1
     ? this.priceItem1 * quantity
     : this.priceItem2 * quantity
 } taka only`;
  },
};

// const totalInform = resturantFood.totalBill('Nasim', 'Burger', '3');
// console.log(totalInform);
// const totalInform = resturantFood.totalBill;
// console.log(totalInform.call(resturantFood, 'Nasim', 'Burger', 3));
const resturantDrinks = {
  item1: 'Cold drinks',
  priceItem1: 60,
  item2: 'hot coffee',
  priceItem2: 40,
  item3: 'cold coffee',
  priceItem3: 50,
};

// console.log(
//   resturantFood.totalBill.call(resturantDrinks, 'Nasim', 'hot coffee', 3)
// );
// 👉👉👉👉👉👉 2.apply() method
/*
apply method is like of call method but here many argument takes as a list
*/
// console.log(
//   resturantFood.totalBill.apply(resturantDrinks, ['Nasim', 'hot coffee', 3])
// ); //   same output will be thrown in the console like the previous on (call() method)

// ////////// 👉👉👉👉👉👉 bind() method

/* Just like the call mehtod bind also allows us to manually  set the this keyword for any funcntion call
 now the difference  the bind does  not imediatly call the function instead it returns  a new function where
the this keyword is bound  so its set to whatever a value we pass into bind*/
//  The bind() method creates a new function that, when called, has its this keyword set to the provided value,
//  with a given sequence of arguments preceding any provided when the new function is called.

function userInformation(bankName, password) {
  if (this.password === password)
    return `Hello ${this.name} ${this.accountNum}\
  ${this.totalBalance}`;
  else return ` wrong password`;
}
const user = [
  {
    name: 'Nasim Reja',
    accountNum: 2021100,
    totalBalance: 2000000,
    password: 1,
    userInformation, // yuserInformation function include here
  },
  {
    name: 'Kevin Taylor',
    accountNum: 20211001,
    totalBalance: 210020302,
    password: 2,
  },
  {
    name: 'Denial Weber',
    accountNum: 2021102,
    totalBalance: 2321000,
    password: 2,
    aboutme() {
      console.log(`hi ${this.name}`);
    },
  },
];
const [user1, user2, user3] = user;
const user1InformationBind = user1.userInformation.bind(user1, 'Gramen-Bank🙌');
/*
 specifying  parts of the argument before hint is actually a common pattern called partial aplications
so essentially partial aplication means that a part of the argument of the original funciton are already appiled
 predefiened argument*/
const user2InformationBind = user1.userInformation.bind(user2, 'Jonota-Bank');
const user3InformationBind = user1.userInformation.bind(user3, 'Islami-Bank');
// console.log(user1InformationBind(1));

//  there are other place exist where we can use bind method. yes this is eventhandler function

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', user3.aboutme.bind(user3)); // here bind is necessary otherwise this refers to the button
// btn.addEventListener('click', user1.userInformation); // here bind is necessary otherwise this refers to the button

// // 😊😊😊😊 Another example of Partial applications  (partial applications means pre define/set functions)
const studentFee = (fee, anualFee, cls) =>
  cls > 8 ? fee + anualFee + anualFee * 0.2 : fee + anualFee;
const monthlyFeeOfStudent = studentFee.bind(null, 250, 120); // here null refers to this syntax
// console.log(monthlyFeeOfStudent(8)); //370
// console.log(studentFee(250, 120, 9)); // 394
const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addTaxval = addTax(0.23);
// console.log('the answer: ' + addTaxval(200));

// ///////////////////////////👉👉👉👉👉 Another example of call method
const student = {
  fname: 'Nasim',
  id: 1806096,
  faculty: 'Fisheries',
  about() {
    console.log(
      `This is ${this.fname}.My id is ${this.id}.I am belongs to ${this.faculty}`
    );
  },
};
const student1 = {
  fname: 'xxx',
  faculty: 'cse',
};
student.about.call(student1);

// understand the this keyword
function nasim1() {
  console.log(this);
}
console.log(this);
nasim1();
console.log(nasim1);
