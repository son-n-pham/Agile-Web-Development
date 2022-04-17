'use strict';
const jonas = {
  year: 1991,
  name: 'jonas',
  calcAge: function () {
    console.log(`${this.name} is with year ${this.year}.`);
  },
  greet: () => console.log(`greet: ${this.name}`),
  greet1: function () {
    console.log(`greet1: ${this.name}`);
  },
};

// jonas.calcAge();

// const matilda = {
//   name: 'matilda',
//   year: 2000,
// };

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();

jonas.greet();
jonas.greet1();
