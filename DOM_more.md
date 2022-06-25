# DOM (Document Object Model)

![image](https://user-images.githubusercontent.com/79841341/175767585-84fc5fff-e223-4a90-8341-adc02b38f136.png)

Document object is our entry point into the world of the DOM. It contains representations of all the content n a page, plus tons of useful methods and properties.

![image](https://user-images.githubusercontent.com/79841341/175768147-cbd962fa-5ce5-4941-ae80-1d906763ea9d.png)

![image](https://user-images.githubusercontent.com/79841341/175768913-af89a7ef-dc94-4884-adb3-63b84b86f754.png)

## innerHTML, textContent, innerText:
- textContent and innerText are very similar, except textContent is showing all text including the one with display of none.
- innerHTML has the html syntax, which browser can understand to execute.

## Attributes
- We can use getAttribute and setAttribute to retrieve and set attribute of element

## Changing styles
- Element has style attribute, which manipulate inline styles of elements.
- The issue is that style attribute only gives inline style, thus we do not know the styles of the element. To overcome that issue, we use window.getComputedStyle to retrieve the actual styles of any elements after website rendering.
- It is, however, not a good practice to change inline style directly; therefore, using classList would be the better option.
  - add, remove, contains, toggle can be used with classList

## Travering Parent/Child/Sibling
- Parent: parentElement
- Child: children
- Sibling: nextElementSibling and previousElementSibling

## Append & AppendChild
- document.createElement to create new element. We then can assign the value to the new element.
  - Ie. We can assign textContent = 'a string'
  - or we can use append

- appendChild can be use to append a child to the target element
- insertAdjacentElement, before, after can be used to add sibling to the target element
