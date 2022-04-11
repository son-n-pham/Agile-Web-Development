// Use strict mode to have clean code, avoid bugs and easier to debug
'use strict';

// // Function Declaration
// function calcAge1(birthYear, currentYear) {
// 	return currentYear - birthYear;
// }

// // Function Expression
// const calcAge2 = function (birthYear, currentYear) {
// 	return currentYear - birthYear;
// }


// // Arrow Function
// const calcAge3 = (birthYear, currentYear) => currentYear - birthYear;

// // Arrow Function with {}
// const calcAge4 = (birthYear, currentYear) => {
// 	return currentYear - birthYear;
// }

// let birthYear = 1982;
// let currentYear = 2022;

// // These give the same results
// console.log(calcAge1(birthYear, currentYear));
// console.log(calcAge2(birthYear, currentYear));
// console.log(calcAge3(birthYear, currentYear));
// console.log(calcAge4(birthYear, currentYear));


// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'Hello',
// 	birthYear: 1991,
// 	job: 'teacher',
// 	friends: ['Michael', 'Peter', 'Steven'],

// 	// Function calcAge in object jonas
// 	calcAge: function () {
// 		this.age = 2037 - this.birthYear;
// 		return this.age;
// 	},
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);


const mark = {
	fullName: 'Mark Twain',
	mass: 78,
	height: 1.69,
	bmiCalc: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
};

const john = {
	fullName: 'Mark Twain',
	mass: 92,
	height: 1.95,
	bmiCalc: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
};

mark.bmiCalc();
john.bmiCalc();

if (mark.bmi >= john.bmi) {
	console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`);
} else {
	console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`);
};