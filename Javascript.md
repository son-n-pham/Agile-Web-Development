# Javascript

This is just for reviewing some of Javascript syntax

## Variable
var keyword is used to declare a new variable
```javascript
var aVariable = 1
console.log(aVariable)
```

## Function
- function keyword is used to declare a new function

## Comparators

Type | Meanings
--- | ---
\=== | Equal and consider types
\!== | Not equal
\> | More than
\< | Less than
\== | Equal but not consider types

## Combining comparators

Type | Meanings
--- | ---
\&& | and
\|\| | or
\! | not

## Arrays
- Array can store elements with different type
- includes function is used to check if the item in an array

```javascript
var myArray = [1,"a", 3, false]
console.log(myArray[2]) // This return 3
console.log(myArray.includes(3)) // This returns true
console.log(myArray.includes(10)) // This returns false
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
