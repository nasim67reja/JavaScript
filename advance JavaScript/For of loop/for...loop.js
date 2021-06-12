// The for...of statement creates a loop iterating over iterable objects,
// including: built-in String, Array, array-like objects (e.g., arguments or NodeList),
// TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook
// with statements to be executed for the value of each distinct property of the object.
// for (variable of iterable) {
//   statement;
// }
const students = ['tonmoy', 'sadiqul', 'mimfat', 'nahid', 'fahim'];
for (const student of students) {
  // console.log(student);
}
for (const student of students.entries()) {
  // Entries method gives the into format with index
  // console.log(`${student[0] + 1} : ${student[1]}`);
}
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of weekdays) {
//   console.log(day);
// }
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
// console.log(Object.keys(openingHours));
// console.log(Object.values(openingHours));

for (const day of Object.values(openingHours)) {
  console.log(day);
}
