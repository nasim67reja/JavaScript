// function sum(...num) {
//   return num;
// }

// // console.log(sum(4, 5, 3, 4, 2));
// function sum2([...num1]) {
//   return num1;
// }
// // console.log(sum2([2, 3, 4, 5]));

// function callSomething(thing = something()) {
//   return thing;
// }

// let numberOfTimesCalled = 0;
// function something() {
//   console.log(numberOfTimesCalled);
//   numberOfTimesCalled += 1;
//   return numberOfTimesCalled;
// }
// console.log(callSomething());
// console.log(callSomething());

const orderFood = function (name, quantity = 1) {
  // here the specified 1 is the default value. by default it was undefined
  return `Your have ordered ${quantity} ${name} \n☺Thanks for being with us`;
};
// console.log(orderFood('Pizza', 2));
// console.log(orderFood('Burger'));
const receiveDataFromUser = function (
  name,
  data = `Thanks ${name} for being with us` // we can use previously defined parameter
) {
  return `${name}\n${data}`;
};
console.log(receiveDataFromUser('Nasim', 'I love your services'));
