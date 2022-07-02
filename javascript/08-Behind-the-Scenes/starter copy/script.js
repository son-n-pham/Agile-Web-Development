'use strict';
// const jonas = {
//   year: 1991,
//   name: 'jonas',
//   calcAge: function () {
//     console.log(`${this.name} is with year ${this.year}.`);
//   },
//   greet: () => console.log(`greet: ${this.name}`),
//   greet1: function () {
//     console.log(`greet1: ${this.name}`);
//   },
// };

// // jonas.calcAge();

// // const matilda = {
// //   name: 'matilda',
// //   year: 2000,
// // };

// // matilda.calcAge = jonas.calcAge;

// // matilda.calcAge();

// jonas.greet();
// jonas.greet1();

console.log(this)


const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAge(1991);

function calcAgeDecl(birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAgeDecl(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAgeArrow(1991);

