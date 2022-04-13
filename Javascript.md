# Javascript

This is just for reviewing some of Javascript syntax

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
