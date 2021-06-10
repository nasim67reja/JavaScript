// The for...of statement creates a loop iterating over iterable objects,
// including: built-in String, Array, array-like objects (e.g., arguments or NodeList),
// TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook
// with statements to be executed for the value of each distinct property of the object.
// for (variable of iterable) {
//   statement;
// }
const students = ['tonmoy', 'sadiqul', 'mimfat', 'nahid', 'fahim'];
for (const student of students) {
  console.log(student);
}
for (const student of students.entries()) {
  // Entries method gives the into format with index
  console.log(`${student[0] + 1} : ${student[1]}`);
}

function updateLight(current) {
  return current === 'green'
    ? 'yellow'
    : current === 'yellow'
    ? 'red'
    : 'green';
}
