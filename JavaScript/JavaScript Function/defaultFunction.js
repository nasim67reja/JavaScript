function sum(...num) {
  return num;
}

// console.log(sum(4, 5, 3, 4, 2));
function sum2([...num1]) {
  return num1;
}
// console.log(sum2([2, 3, 4, 5]));

function callSomething(thing = something()) {
  return thing;
}

let numberOfTimesCalled = 0;
function something() {
  console.log(numberOfTimesCalled);
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}
console.log(callSomething());
console.log(callSomething());
