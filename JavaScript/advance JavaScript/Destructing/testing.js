// JavaScript object destructing =>

function addNum(...num) {
  let add = 0;
  for (let i = 0; i < num.length; i++) {
    add = add + num[i];
  }
  return add;
}
console.log(addNum(2, 3, 4, 1));
