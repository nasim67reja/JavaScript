'use strict';

// 👉👉👉👉👉 1.Call() method =========>>>>
/*
The call() method is a predefined javascript method. with call(), an object can use a method 
beolnging to another object. means an object property can use another object property
*/
const nasim = {
  name: 'Nasim Reja',
  occupasion: 'Programming',
  age: 24,
  email: 'nasim******@gmail.com',
};
const alex = {
  name: 'Alex',
  occupasion: 'Cricketer',
  age: 27,
  email: 'alex******@gmail.com',
};

const aboutUs = [
  {
    name: 'Nasim Reja',
    occupasion: 'Programming',
    age: 24,
    email: 'nasim******@gmail.com',
  },
  {
    name: 'Alex',
    occupasion: 'Cricketer',
    age: 27,
    email: 'alex******@gmail.com',
  },
];

function infrmPerson(country) {
  return `I am ${this.name}.I live in ${country} and I am ${this.age} year old.\
I love ${this.occupasion} and my email id is ${this.email}`;
}

// console.log(window.infrmPerson.call(aboutUs[0], 'Bangladesh'));

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

console.log(
  resturantFood.totalBill.call(resturantDrinks, 'Nasim', 'hot coffee', 3)
);
// 👉👉👉👉👉👉 2.apply() method
/*
apply method is like of call method but here many argument takes as a list
*/
// console.log(
//   resturantFood.totalBill.apply(resturantDrinks, ['Nasim', 'hot coffee', 3])
// ); //   same output will be thrown in the console like the previous on (call() method)
