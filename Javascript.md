# Javascript

This is just for reviewing some of Javascript syntax

## Loading JS script

![image](https://user-images.githubusercontent.com/79841341/178311363-9adf5d6f-ed26-445e-b6b5-1395cd68bb4c.png)

![image](https://user-images.githubusercontent.com/79841341/178311390-45820547-0769-419d-9231-4344cf6dcbd5.png)

## Variable
var keyword is used to declare a new variable
```javascript
var aVariable = 1
console.log(aVariable)
```

var vs let vs const
- let is used for mutate variable or declare undefined variable
- const is used to declare a constant (Immutable variable). const cannot declared undefined constant.
- var should be avoided. It works very similar to let
- We can have variable without these 3 keywords, but it create global variable and we should avoid this way.

## Value

### 7 Primitive Data Types
![image](https://user-images.githubusercontent.com/79841341/162580797-1429cce1-daa1-4011-8075-832e6c054bc4.png)

Need to remember that the typeof of null is object, which is a legacy bug.

### Template Literals for String

```js
const firstName = "Son";
const job = "engineer";
const birthYear = 1982;
const year = 2037;

// FROM ES6
// This is to have a combined string easily
const son = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(son)

// This can be used to generate new string
const aString = `This is a simple string`;

// This can be used to have new line easily
const aStringWithMultipleLines = `String
with
multiple
lines`;
```

### Truthy and Falsy Values

#### 5 falsy values
- 0, '', undefined, null, NaN
- They will be false when being converted to boolean

## Comparators

Type | Meanings
--- | ---
\=== | Equal and consider types
\!== | Not equal
\> | More than
\< | Less than
\== | Equal but not consider types

\=== vs \==
- \=== is strict and does not employ coerce
- \== is loose and employ coerce
- For clean code, try to use \=== all the time

```js
// This returns True
'18' == 18;

// This return False
'18' === 18;
```

## Combining comparators

Type | Meanings
--- | ---
\&& | and
\|\| | or
\! | not

## Conditional (Ternary) Operator

This is to write if-else in one line of code

```js
let age = 23;
// The below is equal if (age>=23) { console.log('I like to drink wine'); } else { console.log('I like to drink water'); }
age >= 23 ? console.log('I like to drink wine') : console.log('I like to drink water');

// This return variable drink of wine
const drink = age >= 18 ? 'wine' : 'water';
```

## Function

![image](https://user-images.githubusercontent.com/79841341/174612679-dccbd0a0-29ba-4284-a236-78d329ae6c0d.png)

### Declare function

There are various ways

```js
'use strict';

// Function Declaration
function calcAge1(birthYear, currentYear) {
	return currentYear - birthYear;
}

// Function Expression
const calcAge2 = function (birthYear, currentYear) {
	return currentYear - birthYear;
}

// Arrow Function. Arrow function, however, does not have this keyword
const calcAge3 = (birthYear, currentYear) => currentYear - birthYear;

// Arrow Function with {}
const calcAge4 = (birthYear, currentYear) => {
	return currentYear - birthYear;
}

let birthYear = 1982;
let currentYear = 2022;

// These give the same results
console.log(calcAge1(birthYear, currentYear));
console.log(calcAge2(birthYear, currentYear));
console.log(calcAge3(birthYear, currentYear));
console.log(calcAge4(birthYear, currentYear));
```

### this Keyword

- Simply speaking, "this" is the user using the function.
- Never use arrow function as methods in objects because "this" in arrow function does not refer to those objects as the owner, but the more global owner. It, however, can be used inside other function to trace back the owner of that other function.

![image](https://user-images.githubusercontent.com/79841341/163572822-e104c2f5-6b28-4a36-bbf3-70592bd6e882.png)

### Closures

![image](https://user-images.githubusercontent.com/79841341/174729793-a24dc691-0cea-4dfa-b9bf-e836ee4a2cba.png)

![image](https://user-images.githubusercontent.com/79841341/174729809-24e6e07d-efad-46a0-9177-f04596c7135e.png)


## Arrays
- Array can store elements with different type
- includes function is used to check if the item in an array

```js
let myArray = [1,"a", 3, false]
let years = new Array(2009, 2001, 2022);
console.log(myArray[2]) // This return 3
console.log(myArray.includes(3)) // This returns true
console.log(myArray.includes(10)) // This returns false
```

![image](https://user-images.githubusercontent.com/79841341/176363944-62b3f7e8-d77e-4c46-ba9f-a176769fc062.png)

Map can access current item, current index and the whole array

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.map((mov, i, arr) => console.log(`Item ${i} of ${arr} is: ${mov}`))
```


## Objects

### Declare Objects
It is similar to dictionary in Python.

```js
// Declare an object
const jonas = {
	firstName: 'Jonas',
	lastName: 'Hello',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven'],

	// Function calcAge in object jonas
	calcAge: function () {
		return 2037 - this.birthYear;
	},

	// This is not working
	// function calcAge2(birthYear) {
	// 	return 2037 - birthYear;
	// }
};
```

```js
const jonas = {
	firstName: 'Jonas',
	lastName: 'Hello',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven'],

	// Function calcAge in object jonas
	calcAge: function () {
		this.age = 2037 - this.birthYear
		return age;
	}
};

console.log(jonas.age);

console.log(jonas.calcAge());
};
```

## Insert Javascript into website

- Inline Javascript by onload

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Learning DOM</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body onload="alert('Hello');">
    <h1>Hello</h1>
</body>

</html>
```

- Use script tag at the end of body

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Learning DOM</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <h1>Hello</h1>

<script type="text/javascript">
    alert("Hello");
</script>

</body>

</html>
```

- Use script src tag to use outer javascript file. The following uses index.js in javascript folder

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Learning DOM</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <h1>Hello</h1>

<script src="./javascript/index.js" charset="utf-8"></script>

</body>

</html>

```

# DOM (Document Object Model)

![image](https://user-images.githubusercontent.com/79841341/162627160-0e6351e0-fcd5-4654-8ccc-b3ae4baa1d03.png)

DOM cast webpage into individual object that we can manipulate.

![image](https://user-images.githubusercontent.com/79841341/155874530-bada8aa9-3851-4922-b834-62fb5d5e75e5.png)

Below is an example of accessing an element, assign it to a variable, then modify the attribute of that element through its variable.

```javascript
// This was run in Chrome console

// Assign an html element to myVariable variable
var myVariable = document.firstElementChild.lastElementChild.firstElementChild;

// Update the innerHTML attribute to "Goodbye"
myVariable.innerHTML="Goodbye"
```

document.querySelector() can be used to find element by selector.

```javascript
// Select element "input" by querySelector, then click on the element.
document.querySelector("input").click();
```

Elements in DOM have properties and methods. Methods and functions are similar but methods are going with objects

## Selecting HTML elements with Javascript

### document.getElementsByTagName -> Return an array

```javascript
// Get all li elements
document.getElementsByTagName("li");
```

### document.getElementsByClassName -> Return an array

```javascript
// Get all elements with a specific class name of "btn"
document.getElementsByClassName("btn");
```

### document.getElementById
Similar to the 2 above but search by Id. However, an element, not array, is returned because there is only 1 Id in a HTML.

### document.querySelector and document.querySelectorAll
- Search element by selector similar to CSS's selector

### Difference between getElement and querySelector
- getElement returns HTMLCollection which are updated when the elements are changed.
- querySelect returns NodeList, which are not updated when the elements are changed.

![image](https://user-images.githubusercontent.com/79841341/162730428-7b775a19-a414-452b-b02c-fc371b60c353.png)

## Changing styles of HTML elements:

Style names can be found in the link below:
https://www.w3schools.com/jsref/dom_obj_style.asp

In general, we can manipulate a specifc style of an element. However, the most effective way is to add or remove class, whose styles are defined seperately.
- Firstly, we can use properties classList to have the list of classes with that element.
- Then, we can add class(es). Below is an example that class visibility is added.

```javascript
document.querySelector("li a").classList.add("visibility")
```

- And if class .visibility is defined as below, the selected item will be hidden.

```css
.visibility {
    visibility: hidden;
}
```

- By doing the above, all styles are in css file while code can be seperated in js file.
- In addition to "add", we can "remove" or "toggle" classes

## Changing Text and Text Content Properties

There are 2 properties, which are innerHTML and textContext.
- textContext recognize everything as text, including html and css syntax.
- innerHTML can recognize html, css syntax from the text when adding them together.

## Manipulating HTML element attributes

- Attributes are anything inside the tag except the tag name. Ie. In <a class="my_link" href=""></a>, attributes are class, href while tag name is a.
- "attributes" keyword can be used to have the list of all attributes of the element.
- "getAttribute" is to get the value of the given attributes in the list from "attributes" keyword. Syntax: ...getAttribute("href");
- "setAttribute" is to set the attribute. Syntax: ...setAttribute("href", "www.google.com")

## Working with classes

Below are the common methods to work with class in html element
- .classList.add()
- .classList.remove()
- .classList.toggle()
- .classList.contains()

## Coordinating in web browser

<a href="javascript/13-Advanced-DOM-Bankist/starter copy/index.html">Go to SmoothScrolling to learn more about Coordinating</a>

## Working with Events

<a href="javascript/13-Advanced-DOM-Bankist/starter copy/index.html">Go to WORKING WITH EVENTS, EVENT CAPTURING, BABBLING</a>

## Traverse DOM

<a href="javascript/13-Advanced-DOM-Bankist/starter copy/index.html">Go to DOMTraversing</a>

### Going downward:
- querySelector, childNodes, children ...

### Going upward:
- parentNode, parentElement
- closest: Opposite querySelector

### Going sideway
- previousElementSibling, nextElementSibling
- Not important: previousSibling, nextSibling
- To get all siblings, we can go upward to parent, then get all children.

## OOP (Object Oriented Programming)

![image](https://user-images.githubusercontent.com/79841341/177004316-c1436f94-51e2-40b5-94db-592357e14b70.png)

![image](https://user-images.githubusercontent.com/79841341/177004322-33f6d4ca-c3a1-4117-834d-277c5ccae456.png)

![image](https://user-images.githubusercontent.com/79841341/177028392-5f1091a0-c3cf-4c86-98f2-7cc0dd99516b.png)

<a href="javascript/14-OOP/starter - Copy/script.js">Code of OOP</a>

## AJAX (Asynchronous Javascrip And XML)

<a href="https://github.com/public-apis/public-apis">Public API Collection in GitHub</a>

![image](https://user-images.githubusercontent.com/79841341/177183348-64b134b6-85ea-476a-b87a-6a92295344c9.png)


### First AJAX with XMLHttpRequest

## Modern JavaScript Development

![image](https://user-images.githubusercontent.com/79841341/206881153-618081cc-b711-4c22-88ab-de6834f1cfb0.png)

## Modules

![image](https://user-images.githubusercontent.com/79841341/190144472-acc0d096-fbe3-4dbf-b0af-1e2a219becd8.png)

![image](https://user-images.githubusercontent.com/79841341/193451408-94c8680a-4932-40f1-82bc-8cf41081d9c6.png)

### Introduction to npm
- npm is Node Package Management
- Check if npm is installed and its version

```cli
npm -v
```

- Run npm init to initially the npm

```cli
npm init
```

- After the above, package.json was created. It stores all configuration of the project

![image](https://user-images.githubusercontent.com/79841341/193459854-198b8da8-9662-47fe-971a-a2f9bdded65a.png)

- When install package by npm, the package is updated into package.json file. At the same time, the package is downloaded into the node_modules folder. If we delete the whole node_modules folder, we just need to run "npm i" or "npm install" and packages mentioned in the package.json will be downloaded again.

### Bundling with Parcel and npm script
- Install Parcel, it is the dev-dependencies

```cli
npm i parcel --save-dev
```

![image](https://user-images.githubusercontent.com/79841341/193461485-d04f7d75-c13c-4dea-b9c1-abe0cfe43869.png)

- To run parcel, we use npx or npm script. Below is the npx command. Once running, parcel generate dist folder with index.html, js file ... and open the new webpage in the localhost:1234, which is similar to live-server.

```cli
npx parcel index.html
```

- The 2nd way to run parcel is using npm script, which is running script in package.json. To do so, we add "parcel index.html" into package.json first, then run the cli

```cli
npm run start
```

- When we have the final product, we can use Parcel to build the final version with "parcel build index.html". This will give the compacted version of html and js files. *Bug: Need to remove 'main':'script.js' for this parcel build to work*

![image](https://user-images.githubusercontent.com/79841341/193462497-0f7ea476-6843-45ed-9d5a-bd3c189806d5.png)

### Configuring Babel and Polyfilling
