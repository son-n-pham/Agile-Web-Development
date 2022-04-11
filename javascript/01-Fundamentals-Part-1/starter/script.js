// console.log(40 + 8 + 23 - 10);

// console.log(typeof true)

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y)

// const firstName = "Son";
// const job = "engineer";
// const birthYear = 1982;
// const year = 2037;

// // FROM ES6
// // This is to have a combined string easily
// const son = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(son)

// // This can be used to generate new string
// const aString = `This is a simple string`;

// // This can be used to have new line easily
// const aStringWithMultipleLines = `String
// with
// multiple
// lines`;

// console.log(Boolean(0));
// console.log(Boolean('Son'));
// console.log(Boolean(NaN));

const hasDriverLicense = true;
const hasGoodVision = true;

// return true
console.log(hasDriverLicense && hasGoodVision);

// return true
console.log(hasDriverLicense || hasGoodVision);

// return false
console.log(!hasDriverLicense);

let age = 23;
if (age >= 23) { console.log('I like to drink wine'); } else { console.log('I like to drink water'); }

// This return variable drink of wine
const drink = age >= 18 ? 'wine' : 'water';