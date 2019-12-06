# PureLib

## Overview
PureLib is a lightweight and simple JavaScript library created to replace the usage of jQuery (or any heavy DOM manipulation library)
across web applications.  It is designed to reduce code by providing minified functions that act as shortcuts to commonly used JS
commands.  Since file size and performance are the main goals of PureLib, it does not support outdated browsers.

#### Features
* Babel Polyfill supports top 95% ±1% of browsers. [See the list of supported browsers here](https://browserl.ist/?q=last+1+version%2C+not+dead%2C+%3E+0.2%25)
* Provides 30 shortcuts to commonly used JavaScript actions
* Final script is 1.5KB in size
* Can reference functions by HTML ID or by JavaScript DOM object


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

| Command                                           | Action                                                                             |
|:--------------------------------------------------|:-----------------------------------------------------------------------------------|
| `addClass(target, className)`                     | Add the specified CSS class to the specified DOM element                           |
| `addClassToAll(target, selector, className)`      | Add the specified CSS class to all matched elements inside the DOM                 |
| `closestEl(target, selector)`                     | Traverse up DOM tree and return first element that matches the selector            |
| `dataAttr(target, dataAttribute)`                 | Get the data-attribute value for the specified DOM                                 |
| `dropdownDataAttr(target, dataAttribute)`         | Get the data-attribute value for the selected option in a HTML select dropdown     |
| `dropdownTextValue(target)`                       | Get the text value of the selected option in an HTML dropdown menu                 |
| `dropdownValue(target)`                           | Get the value of the currently selected HTML dropdown option                       |
| `findAllBySelector(target, selector)`             | Search the descendants of an element and return the DOM of all matching elements   |
| `findBySelector(parentDom, selector)`             | Search the descendants of an element and return the first matching DOM             |
| `getDistanceFromTop(containerDom)`                | Get the Y-position in pixels from the specified DOM to the top of the document     |
| `getDom(target)`                                  | Return the DOM of the target.  Returns _FALSE_ the DOM does not exist on the page. |
| `getMouseCoordinates(containerDom, e)`            | Return all mouse coordinates in pixels relative to the specified container         |
| `getTextValue(target)`                            | Return the text content within the specified _DOM_                                 |
| `hasClass(target, className)`                     | Return TRUE if the DOM contains the specified CSS class                            |
| `hide(target,)`                                   | Add the `hide` CSS class to the element (hiding the element)                       |
| `moveAfter(moveThisDom, placeAfterDom)`           | Moves the specified DOM after the end tag of the specified DOM                     |
| `moveBefore(moveThisDom, placeBeforeDom)`         | Moves the specified DOM before the starting tag of the specified DOM               |
| `moveInsideToBottom(moveThisDom, placeInsideDom)` | Moves the specified DOM before the end tag of the specified DOM                    |
| `moveInsideToTop(moveThisDom, placeInsideDom)`    | Moves the specified DOM after the starting tag of the specified DOM                |
| `remove(target,)`                                 | Removes the specified element from the DOM                                         |
| `removeClass(target, className)`                  | Removes the specified CSS class from the DOM                                       |
| `removeClassFromAll(target, selector, className)` | Removes the specified CSS class from all the elements                              |
| `setDataAttribute(target, dataAttribute, value)`  | Set/update a data attribute value for the specified DOM element                    |
| `show(target)`                                    | Remove the `hide` CSS class from the element (shows the element)                   |
| `updateHtml(target, htmlCode)`                    | Replaces the HTML inside the DOM                                                   |

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

| Name        | Type                                 | Info                                                                  |
|:------------|:-------------------------------------|:----------------------------------------------------------------------|
| `target`    | _Element object_ or HTML ID _string_ | The target element. Use a string to match the HTML ID of an element.  |
| `className` | _string_                             | The class name to add (do not use leading periods '.' in class names) |

#### Example
```js
// Add the CSS class .animate to an element with the ID 'sidebar_footer'
l.addClass('sidebar_footer', 'animate');

// Add the CSS class .animate to an element object
let target = l.getDom('sidebar_footer');    // Get the element
l.removeClass(target, 'animate');
```
