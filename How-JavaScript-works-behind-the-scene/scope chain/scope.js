'use strict';

let myName = 'nasim';
if (myName === 'nasim') {
  var accessable = 'reja';
  const notaccseable = 'h';
  let notaccseable2 = 'j';
  myName = accessable;
}
// console.log(notaccseable, notaccseable2, accessable, myName);
// ReferenceError,ReferenceError,'reja','reja'
// Hence prove that const & let is block scope

function demo() {
  var notaccseable = 'data';
}
console.log(notaccseable); // ReferenceError because var is function scope
