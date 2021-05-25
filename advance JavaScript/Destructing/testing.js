//  JavaScript testing here =>
const studentList = ['Noyon', 'Nadvi', 'Ashik'];
let [first, second, third, fourth = 'none'] = studentList;
console.log(first, fourth);
[first, fourth] = [fourth, first];
console.log(first, fourth);
