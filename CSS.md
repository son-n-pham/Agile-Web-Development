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

## Position:
- Static: Default
- Relative: Position relative to where it would be. Its moving does not affect on the locations of adjacent elements.
- Absolute: Position relative to its parent. When using absolute, we take the element out of the flow of the document
- Fixed: Item with fixed position will stay on where it is while the screen is scrolled down.

These position are called in css with the keyword "position".

```css
div{
  position: absolute;
  top: 0;
}
```


