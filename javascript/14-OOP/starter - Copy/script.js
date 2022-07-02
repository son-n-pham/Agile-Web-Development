'use strict';

const Person = function(firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;

	// // Never do as it negative impact to performance
	// // Because each instance will have this method
	// // Alternate solution is to use Prototype
	// this.calcAge = function() {
	// 	console.log(2037 - this.birthYear);
	// };
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is create
// 2. function is called, this={}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

////////////////////////////////////////
// Prototype
Person.prototype.calcAge = function() {
	console.log(2037 - this.birthYear);
};

jonas.calcAge();
console.log(jonas);

Person.prototype.species = "Human";

console.log(jonas);
console.log(jonas.__proto__);

console.dir(Person.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #1


// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
const Car = function(make, speed) {
	this.make = make;
	this.speed = speed;
};

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
Car.prototype.accelerate = function() {
	this.speed += 10;
	console.log(this.speed);
};

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
Car.prototype.brake = function() {
	this.speed -= 5;
	console.log(this.speed);
};

// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
const car1 = new Car("BMW", 120);
car1.accelerate();
car1.brake();

// DATA CAR 2: 'Mercedes' going at 95 km/h
const car2 = new Car("Mercedez", 95);
car2.accelerate();
car2.brake();

/////////////////////////////////////////////
// ES6 Class

// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// Method will added to the prototyp property
	calcAge() {
		console.log(2037 - this.birthYear);
	};

	// Getter
	get age() {
		return 2037 - this.birthYear;
	}


	// Set a property that already exist
	// We have to add _
	// Then we need to create the get
	set fullName(name) {
		if (name.includes(" ")) this._fullName = name;
		else alert(`${name} is not a full name.`)
	}
	get fullName() {
		return this._fullName
	}


	// Static method
	static hey() {
		console.log("Hello there!");
		console.log(this);
	}
};

const jessica = new PersonCl("Jessica Davis", 1982);
jessica.calcAge();
console.log(jessica);

PersonCl.hey();


/////////////////////////////////////////////////////
// Static Method


////////////////////////////////////////////////////
// Object.create

const PersonProto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.birthYear = 1982;
steven.calcAge();

// Link the new object to the __proto__ which links to PersonProto.prototype
const sarah = Object.create(PersonProto)
sarah.init("Sara", 1979);
sarah.calcAge();