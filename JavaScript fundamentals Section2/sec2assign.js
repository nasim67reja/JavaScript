"use strict";

/////////////////////////////////////////////////////////////////===========>>>>>>>>😎😎 JavaScript Fundamentals – Part 2   ////////////////////////////////////////

// LECTURE: Functions

// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console
/////////////////////////// Solution ====>>
/*
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} people and it's capital city is ${capitalCity}`;
};
const bangladesh = describeCountry("Bangladesh", "16 lakh", "Dhaka");
const india = describeCountry("India", "100 lakh", "New dilli");
const pakistan = describeCountry("Pakistan", "20 lakh", "Islamabad");

console.log(`${bangladesh}
${india}
${pakistan}`);
*/

///////////////////////////////////////       LECTURE: Function Declarations vs. Expressions

// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

/////////////////////////// Solution ====>>
/*
function percentageOfWorld1(countryName, population) {
  const worldPopulation = 7900;
  const percentage = 100 * (population / worldPopulation);
  return `${countryName} has ${population} million people, so it's about ${percentage.toFixed(
    2
  )} of the world population`;
}
const china = percentageOfWorld1("China", 1441);
const bnagladesh = percentageOfWorld1("Bangladesh", 30);
const turkey = percentageOfWorld1("Turkey", 70);
console.log(`${china}
${bnagladesh}
${turkey}`);
*/
///////////// function expression
/*
const percentageOfWorld2 = function (countryName, population) {
  const worldPopulation = 7900;
  const percentage = 100 * (population / worldPopulation);
  return `${countryName} has ${population} million people, so it's about ${percentage.toFixed(
    2
  )} of the world population`;
};
*/
/////////////// Arrow function ==>
/*
const percentageOfWorld3 = (countryName, population) => {
  const worldPopulation = 7900;
  const percentage = 100 * (population / worldPopulation);
  return `${countryName} has ${population} million people, so it's about ${percentage.toFixed(
    2
  )} of the world population`;
};
*/

// LECTURE: Functions Calling Other Functions

// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

/////////////////////// Solution ===>>
/*
const percentageOfWorld1 = (population) => (population / 7900) * 100;

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people. Which is about ${percentage.toFixed(
    2
  )} % of the world`;
};
console.log(describePopulation("Bangladesh", 20));
*/

////// 😎😋😎 Array ==>
// LECTURE: Introduction to Arrays

// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values
/*
const populations = [100, 1441, 123, 245];
console.log(populations.length === 4 ? true : false);
const percentageOfWorld1 = (population) => (population / 7900) * 100;
const percentage = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentage);
*/

// LECTURE: Basic Array Operations (Methods)

// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
/*
const neighbours = ["India", "Mayanmar", "Nepal"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
const existCountry = neighbours.includes("Germany")
  ? `yeh! a central European country`
  : `Probably not a central European country :D`;
console.log(existCountry);

const nepalIndex = neighbours.indexOf("Nepal");
neighbours[nepalIndex] = "Vutan";
console.log(neighbours);
*/
