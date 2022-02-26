# Class vs Id

Class | Id
--- | ---
can be used with many items | can be used with 1 item
1 item can have more than 1 classes | 1 item can have only 1 id

## pseudo class:
- It is class with colon ":"
- The most hover class is :hover
- pseudo class is used to apply css style to item according to its state. With the :hover pseudo class, the style is applied when we hover on that item.

```css
/* Change color of h1's font to red when hover on it */
h1:hover{
color: red
}
```

# CSS positioning

## Pre-defined rule:
- Content is everything: It is defining the height and width of the container
- Orders come from code
- Children sit on parents

## Position types:
- Static: Default
- Relative: Position relative to where it would be. Its moving does not affect on the locations of adjacent elements.
- Absolute: Position relative to its parent. When using absolute, we take the element out of the flow of the document. When using this, top, bottom, left, right can be used to specify the location of the element.
- Fixed: Item with fixed position will stay on where it is while the screen is scrolled down.

These position are called in css with the keyword "position".

```css
div{
  position: absolute;
  top: 0;
}
```

We can also use float, such as "float: left" to make the item float to the left and other elements in the same container can be wrap around to the right of the item.
- "clear" is antifloat keyword. For example, clear: left will ensure that no item is floating on the left of the item.

## Centering Element
- "text-align: center" can be used to set text in the middle of its container
- The above is not working if the container does not occupy the whole width of the page. If it is the case, "margin: auto" is the solution.
- Sometimes, some elements are inline with others. Thus we need to take some out by "position: absolute" for the targeted element to be in the center.


## CSS Z-Index and Stacking Order
- z-index can be used to move element in the z axis. 
- z-index value is usually 1, 0 or -1. 0 is the default value
- z-index can only work if position keyword with value not static is used on both this element and the adjacent element.
- Besides z-index, other order convention is applied as well.

# CSS Sizing
There are 3 options:
- px: static
- %: dynamic, 100% is equivalent to 16px, it is also depending on its parent similarly to em.
- em: 
  - dynamic, 1em equals to 16px
  - relative to its parent. If parent has font size of 2em and our item's font-size is set 2em, its actual font-size is 2\*2, which is 4em.
  - rem is the option to refer the item size to "root", and not depend on parent. Thus 1rem always equal to 16px.

