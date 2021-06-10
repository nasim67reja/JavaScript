'use strict';
//  Enhanced Object Literals means object can be available into another object and we can do it
// three ways. These are Given below
// Enhanced Object literals can be write in three ways

const students = {
  first: 'Sadiqul',
  second: 'Nahid',
  third: 'Mimfat',
  fourth: 'Labib',
  fifth: 'Sihab',
  six: 'Fahim',
  seven: 'Tonmoy',
  eight: 'Reshad',
  nine: 'Rafi',
  ten: 'Jotirmoy',
};

const classTen = {
  total: 10,
  section: 'Science',
  session: 2022,
  school: 'Amena Baki Residential Model High School',
  //   students: students,//Before Es6 we do like this
  //   but the anoying part is the property name would be same as the variable
  //  Now Es6 comes with vary easy way  we write like this
  students, //ES6 Enhanced object literals these property naem would be same with the
  //   upcoming object name
  //   test:function(){
  //     console.log(`${this.total} is exist in this`);
  //   }
  test() {
    console.log(`${this.total} is exist in this`);
  },
};
// console.log(classTen);
// console.log(classTen.test());

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
