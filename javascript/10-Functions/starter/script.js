'use strict';

// const flight = 'LH234';
// const jonas = {
// 	name: 'Jonas Schmedtmann',
// 	passport: 27897897987,
// };

// const checkIn = function(flightNum, passenger) {
// 	flightNum = 'LH999';
// 	passenger.name = 'Mr.' + passenger.name;

// 	if (passenger.passport === 27897897987) {
// 		alert('Check in');
// 	} else {
// 		alert('Wrong passport');
// 	}
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function(person) {
// 	person.passport = Math.trunc(Math.random() * 1000000000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);

////////////////////////////////
// HIGHER-ORDER FUNCTION

// const oneWord = function(str) {
// 	return str.replace(/ /g, '').toLowerCase();	
// };

// const upperFirstWord = function(str) {
// 	const [first, ...others] = str.split(' ');
// 	return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function(str, fn) {
// 	console.log(`Original string: ${str}`);
// 	console.log(`Transformed string: ${fn(str)}`);

// 	console.log(`Transform by: ${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);

// const high5 = () => {
// 	console.log('💪');
// };

// document.body.addEventListener('click', high5);


////////////////////////////////////////
// FUNCTION RETURNING FUNCTION
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// // const greet = (greeting) => {
// // 	return (name) => {
// // 		console.log(`${greeting} ${name}`);
// // 	}
// // };

// // const greet = function(greeting) {
// // 	return function(name) {
// // 		console.log(`${greeting} ${name}`);
// // 	}
// // };

// const greeterHey = greet('Hey');
// greeterHey('Son')

//////////////////////////////////////////
// The call and apply methods
// const lufthansa = {
// 	airline: 'lufthansa',
// 	iataCode: 'LH',
// 	booking: [],
// 	// Method
// 	book(flightNum, name) {
// 		console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// 		);
// 		this.booking.push({flight: `${this.iataCode}${flightNum}`, name});
// 	},
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
// 	name: 'Eurowings',
// 	iataCode: 'EW',
// 	booking: [],
// 	// Method
// 	// book(flightNum, name) {
// 	// 	console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// 	// 	);
// };

// const book = lufthansa.book;

// // Using call to call the object first, then assign parameters for the method
// book.call(eurowings, 23, 'Sarah Williams', {name: 'airline'});

// // Using apply
// const flightData = [583, 'George Cooper'];
// book.apply(eurowings, flightData);

// book.call(lufthansa, ...flightData);


// ///////////////////////////////////////////////
// // Using bind to bind the function to object
// const bookEW = book.bind(eurowings);
// bookEW(23, "Steven Williams");

// // Using bind to bind the function to object and 1st parameter of the object method
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Bob Williams");
// console.log(eurowings);

// // Using bind with eventListener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
// 	console.log(this);

// 	this.planes++;
// 	console.log(this.planes);
// };

// // Without bind, lufthansa.buyPlane here is a normal function and has this of addEventListener, thus not working. For it to work, we use bind to bind that function with lufthansa, which is equivalent to manually define the this keyword for the normal function lufthansa.buyPlane
// document.querySelector(".buy").addEventListener('click', lufthansa.buyPlane.bind(lufthansa))


// // Partial application
// const addTax = (rate, value) => value + value*rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); //Using null or addTax will give the same result
// console.log(addVAT(1000));

// // Function return a function
// const addTax1 = function(rate) {
// 	return function(value) {
// 		return value + value*rate;
// 	}
// };

// const addVAT1 = addTax1(0.23);
// console.log(addVAT1(1000));


//////////////////////////////////////
// CODING CHALLENGE 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

// // Let's build a simple poll app!

// // A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// // Here are your tasks:

// // 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// //   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
// //         What is your favourite programming language?
// //         0: JavaScript
// //         1: Python
// //         2: Rust
// //         3: C++
// //         (Write option number)
// 	registerNewAnswer() {
// 		const inputNum = Number(prompt(`What is your favourite programming languages?\n
// 		${this.options[0]}\n
// 		${this.options[1]}\n
// 		${this.options[2]}\n
// 		${this.options[3]}\n
// 		(Write option number)`));

// //   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 		(typeof inputNum === 'number') && (0 <= inputNum )&& (inputNum < this.answers.length) && (this.answers[inputNum]++);

// 		// console.log(this.answers);

// 		this.displayResults('string');
// 		this.displayResults('array');
// 	},
	
// 	// Create a method displayResults for task 3
// 	displayResults(type) {
// 		if (type === 'array') console.log(this.answers);
// 		if (type === 'string') console.log(`Pools results are ${this.answers.join(', ')}`);
// 	}
// };

// // 2. Call this method whenever the user clicks the "Answer poll" button.
// document
// 	.querySelector('.poll')
// 	.addEventListener('click', poll.registerNewAnswer.bind(poll));


// // 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// // 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// // HINT: Use many of the tools you learned about in this and the last section 😉

// // BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// // BONUS TEST DATA 1: [5, 2, 3]
// // BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
// const a1 = [5, 2, 3];
// poll.displayResults.call({answers: a1}, 'string');


// // GOOD LUCK 😀


//////////////////////////////////////
// CLOSURE

// const secureBooking = function() {
// 	let passengerCount = 0;
// 	return function() {
// 		passengerCount++;
// 		console.log(`${passengerCount} passengers`);
// 	}
// }

// const booker = secureBooking();

let f;

const g = function() {
	const a=23;
	f = function() {
		console.log(a*2);
	};
};

g();
f();