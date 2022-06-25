# DOM (Document Object Model)

## DOM
![image](https://user-images.githubusercontent.com/79841341/175767585-84fc5fff-e223-4a90-8341-adc02b38f136.png)

Document object is our entry point into the world of the DOM. It contains representations of all the content n a page, plus tons of useful methods and properties.

![image](https://user-images.githubusercontent.com/79841341/175768147-cbd962fa-5ce5-4941-ae80-1d906763ea9d.png)

![image](https://user-images.githubusercontent.com/79841341/175768913-af89a7ef-dc94-4884-adb3-63b84b86f754.png)

### innerHTML, textContent, innerText:
- textContent and innerText are very similar, except textContent is showing all text including the one with display of none.
- innerHTML has the html syntax, which browser can understand to execute.

### Attributes
- We can use getAttribute and setAttribute to retrieve and set attribute of element

### Changing styles
- Element has style attribute, which manipulate inline styles of elements.
- The issue is that style attribute only gives inline style, thus we do not know the styles of the element. To overcome that issue, we use window.getComputedStyle to retrieve the actual styles of any elements after website rendering.
- It is, however, not a good practice to change inline style directly; therefore, using classList would be the better option.
  - add, remove, contains, toggle can be used with classList

### Travering Parent/Child/Sibling
- Parent: parentElement
- Child: children
- Sibling: nextElementSibling and previousElementSibling

### append & appendChild
- document.createElement to create new element. We then can assign the value to the new element.
  - Ie. We can assign textContent = 'a string'
  - or we can use append
- appendChild can be use to append a child to the target element
- insertAdjacentElement, before, after can be used to add sibling to the target element

### remove and removeChild
- remove can remove the target element
- removeChild remove the child of the target element.

## DOM Events

### Inline events
- Adding attribute onclick into element in html

### onclick property

### addEventListener

Reference of events:
https://developer.mozilla.org/en-US/docs/Web/Events

addEventListener is the most popular and preferred as:
- More then one function can be add to an element
- It has additional options to make it more useful
- We can use removeEventListener

### Form events & preventDefault
- As the default, action of form redirect to new page. To prevent that default, we use event.preventDefault. Below is the example code.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Basics</title>
</head>

<body>
    <h1>Form Events</h1>

    <form action="/dogs" id="tweetForm">
        <input type="text" name="username" placeholder="username">
        <input type="text" name="tweet" placeholder="tweet">
        <button>Post Tweet</button>
    </form>

    <h2>Tweets:</h2>
    <ul id="tweets">

    </ul>

    <!-- <script src="app.js"></script> -->
    <script>
        const username = document.querySelector('input[name="username"]');
        const tweet = document.querySelector('input[name="tweet"]');
        const postBtn = document.querySelector('button');

        // Select ul for output
        const tweetOutput = document.querySelector('#tweets');

        // eventListener
        postBtn.addEventListener('click', (e) => {
            // Prevent action of form to redirect to new page
            e.preventDefault();

            // Extract data from inputs
            const usernameInput = username.value;
            const tweetInput = tweet.value;

            // Create new li element
            const newLi = document.createElement("li");
            newLi.innerHTML = `<h3>${usernameInput}: ${tweetInput}`;

            // Append new li as the new child to ul element
            tweetOutput.appendChild(newLi);

            // Reset values of inputs back to blank
            username.value = "";
            tweet.value = "";
        });

    </script>
</body>

</html>
```
