'use strict';

console.log(this);

const nasim = {
  name: 'nasim',
  hello: function () {
    console.log(this);
  },
};
console.log(nasim.hello());
