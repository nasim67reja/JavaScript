//  1 . Basic Object Destructuring :
const student = {
  fName: 'Nasim',
  id: 1806096,
  session: 2018,
  department: 'Fisheries',
};

const { fName, id, session, department } = student;
// Note that the variables in the object on the left hand side
// should have the same name as a property key in the object person.
// If the names are different, we'll get undefined

// 2 . Variables declared before being assigned:
const marks = {
  bangla: 78,
  english: 82,
  math: 95,
};
let bangla, english, math;
({ bangla, english, math } = marks);
///////The ( ) around the assignment statement is required syntax
//   when using the object literal destructuring assignment without a declaration.
// This is because the {} on the left hand side is considered a block and not an object literal.

//  3.Using a new Variable Name:
// If we want to assign values of an object to a new variable instead of using the name of the property, we can do this:
const product = {
  productName: 'Furniture',
  quantity: 5,
  madeOf: 'wood',
};
const { productName: Name, quantity, madeOf: by } = product;

// 4.Using Default Values :
// Default values can also be used in object destructuring, just in case a variable is undefined in an object it wants to extract data from:
const market = {
  cricketBat: 300,
  football: 400,
  badminton: 120,
};
const { cricketBat: bat, football, badminton: racket, ball = -1 } = market;

// 5. Computed Property Name :
const wordTranslator = {
  play: 'khela',
  rain: 'bristy',
  eat: 'khawa',
};
let userInput = 'play';
let { [userInput]: foo, rain, eat } = wordTranslator; // little bit problem here
// console.log(foo);

// 6. Combining Arrays with Objects :
////////////Arrays can also be used with objects in object destructuring:
const infoNasim = {
  Nationality: 'Bangladesh',
  Religion: 'Muslim',
  Ocupation: ['Programmar', 'Student'],
};
const {
  Nationality,
  Religion,
  Ocupation: [first, second],
} = infoNasim;
// const [first, second] = Ocupation;
// console.log(first, second);

// 7. Nesting in Object Destructing :
const person = {
  name: 'Sarah',
  place: {
    country: 'Nigeria',
    city: 'Lagos',
  },
  friends: ['Annie', 'Becky'],
};

const {
  name,
  place: { country, city },
  friends: [f, s],
} = person;
console.log(f, s);

/// 8 . Rest in Object Destructuring
// The rest syntax can also be used to pick up property keys
// that are not already picked up by the destructuring pattern. Those keys and their values are copied into a new object:
const me = {
  Name1: 'Nasim',
  country: 'Bangladesh',
  job: 'Developer',
  dream: ['programmer', 'cyber security specialist'],
};
const { Name1, ...others } = me;
// ///Here, the remaining properties whose keys
// where not part of the variable names listed were assigned to the variable others.
//  The rest syntax here is ...others.others can be renamed to whatever variable you want.
