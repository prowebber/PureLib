# PureLib

## Overview
PureLib is a lightweight and simple JavaScript library created to replace the usage of jQuery (or any heavy DOM manipulation library)
across web applications.  It is designed to reduce code by providing minified functions that act as shortcuts to commonly used JS
commands.  Since file size and performance are the main goals of PureLib, it does not support outdated browsers.

#### Features
* Babel Polyfill supports top 95% ±1% of browsers. [See the list of supported browsers here](https://browserl.ist/?q=last+1+version%2C+not+dead%2C+%3E+0.2%25)
* Provides 30 shortcuts to commonly used JavaScript actions
* Final script is 1.5KB in size
* Target items by passing the [Element object](https://developer.mozilla.org/en-US/docs/Web/API/Element) or the [HTML ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) to the function.


## Usage
1. Download and include the following files in the web application:
   * `purelib.min.js`
   * `purelib.css`
2. Use the commands below to access the functions.

#### Arguments

| Argument        | Type                                              |
|:----------------|:--------------------------------------------------|
| `className`     | (string) CSS class name                           |
| `containerDom`  | JavaScript DOM object                             |
| `dataAttribute` | (string) name of the data attribute element       |
| `target`        | JavaScript DOM object _or_ HTML element ID        |
| `e`             | JavaScript event listener                         |
| `parentDom`     | JavaScript DOM object                             |
| `selector`      | (string) string containing DOM selectors to match |


### Notes
* Make sure the query selectors are valid [CSS Selector strings](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
* Do not use leading hashes before HTML IDs (use `nav_footer` instead of `#nav_footer`)
* Do not use leading periods before CSS class names (use `green` instead of `.green`)

### PureLib Commands
These functions expect to receive a DOM value or HTML ID as an argument.

**Examples**
```js

// Add the CSS class .animate to an element by HTML ID
l.addClass('sidebar_footer', 'animate');

// Add the CSS class .animate to an element by JavaScript DOM
let sideBarDom = l.getDom('sidebar_footer');
l.removeClass(sideBarDom, 'animate');

```

| Command                       | Action                                                                                  |
|:------------------------------|:----------------------------------------------------------------------------------------|
| `addClass(a, b)`              | Add the specified CSS class to the target Element                                       |
| `addClassToAll(a, b, c)`      | Add the specified CSS class to all Elements that match the selector                     |
| `closestEl(a, b)`             | Starting at the target, traverse up the parents until it finds the matching Element     |
| `cssValue(a, b)`              | Get the CSS property value for the target Element                                       |
| `dataAttr(a, b)`              | Get a data-attribute value from the target Element                                      |
| `dropdownDataAttr(a, b)`      | Get a data-attribute value for the currently selected option in an HTML dropdown/select |
| `dropdownTextValue(a)`        | Get the text value for the currently selected option in an HTML dropdown/select         |
| `dropdownValue(a)`            | Get the field value of the currently selected option in an HTML dropdown/select         |
| `findBySelector(a, b)`        | Traverse through children and return the first Element that matches the selector        |
| `findAllBySelector(a, b`      | Traverse through children and return all Elements that matches the selector             |
| `getDistanceFromTop(a)`       | Get the distance in pixels from the target to the top of the document                   |
| `getDom(a)`                   | Return the DOM Object of an element                                                     |
| `getInputValue(a)`            | Return the value of an HTML input field                                                 |
| `getKeyCode(a)`               | Return the 'key code' for pressed keys/keyboard actions                                 |
| `getTextValue(a)`             | Gets the text value of an Element (e.g. `<div>Test</div>` would return 'test')          |
| `hasClass(a, b)`              | Return True if the specified CSS class exists in the target Element                     |
| `hide(a)`                     | Hide an element from the screen                                                         |
| `hideAllBySelector(a)`        | Find and hide all elements that match the selector                                      |
| `inArray(a, b)`               | Returns True if the specified value exists in an array                                  |
| `isEmpty(a)`                  | Returns True if a Object, Array, or String are empty                                    |
| `moveAfter(a, b)`             | Move an Element after the closing HTML tag of another Element                           |
| `moveBefore(a, b)`            | Move an Element before the opening HTML tag of another Element                          |
| `moveInsideToBottom(a, b)`    | Move an Element before the closing HTML tag of another Element                          |
| `moveInsideToTop(a, b)`       | Move an Element after the opening HTML tag of another Element                           |
| `remove(a)`                   | Removes the target Element from the DOM                                                 |
| `removeClass(a, b)`           | Remove the specified CSS class(es) from the target Element                              |
| `removeClassFromAll(a, b, c)` | Remove the specified CSS class from all Elements that match a selector                  |
| `resetForm(a)`                | Resets the specified HTML form, clears all field inputs                                 |
| `setDataAttr(a, b, c)`        | Set/update a data-attribute value for the specified target Element                      |
| `show(a)`                     | Show the target Element (if it was previously hidden)                                   |
| `showAllBySelector(a)`        | Find and show all Elements that match the selector                                      |
| `updateHtml(a, b)`            | Replace the HTML inside the target Element                                              |
| `validate.isJson(a)`          | Returns True if the data is valid Json                                                  |


## Examples

### Query Selectors
Below are examples of syntax to use for query selector strings.  You can see more [documentation here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

| CSS Selector Syntax | Description                                     |
|:--------------------|:------------------------------------------------|
| `.page-content`     | Find all elements by class name                 |
| `#nav_header`       | Find element by HTML ID                         |
| `input`             | Find elements by HTML tag (e.g. `<input>` tags) |
| `input.search`      | Finds all `<input class='search'>` elements     |



## Other

### Show Autocomplete Code Documentation in JetBrains
1. Go to the IDE `Settings` and navigate to `Languages & Frameworks`->`JavaScript`->`Libraries`
2. Click 'Add...' to add a 3rd party library
3. Name the library 'PureLib' and select the full-size `purelib.js` file in the '/build' directory
4. Save and apply the settings

## Function Examples

### addClass(target, className)
Adds the specified CSS class to the target element.

#### Arguments

| Name        | Type                             | Details                                                                          |
|:------------|:---------------------------------|:---------------------------------------------------------------------------------|
| `target`    | {_Element object_} or {_string_} | The target element. Passing a {_string_} will find and target the element by ID. |
| `className` | _string_                         | The class name to add (do not use leading periods '.' in class names)            |

#### Example
```js
// Add the CSS class .animate to an element with the ID 'sidebar_footer'
l.addClass('sidebar_footer', 'animate');

// Add the CSS class .animate to an element object
let target = l.getDom('sidebar_footer');    // Get the element
l.removeClass(target, 'animate');
```
