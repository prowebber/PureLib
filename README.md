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
* Do not use leading hashes before HTML IDs (use `nav_footer` instead of `#nav_footer`)
* Do not use leading periods before CSS class names (use `green` instead of `.green`)

### Editing via DOM _(l.dom)_
These functions expect to receive a DOM value as an argument.  Call in JavaScript with `l.dom.{command(args)}`.

| Command                                           | Action                                                                              |
|:--------------------------------------------------|:------------------------------------------------------------------------------------|
| `addClass(target, className)`                     | Add the specified CSS class to the specified DOM element                            |
| `addClassToAll(target, selector, className)`      | Add the specified CSS class to all matched elements inside the DOM                  |
| `closestEl(target, selector)`                     | Traverse up DOM tree and return first element that matches the selector             |
| `dataAttr(target, dataAttribute)`                 | Get the data-attribute value for the specified DOM                                  |
| `dropdownDataAttr(target, dataAttribute)`         | Get the data-attribute value for the selected value in HTML select input            |
| `dropdownValue(target,)`                          | Get the value of the currently selected HTML select input                           |
| `findAllBySelector(target, selector)`             | Search the descendants of the _parentDom_ and return all DOMs that match _selector_ |
| `findBySelector(parentDom, selector)`             | Search the descendants of the _parentDom_ and return the first _selector_ match DOM |
| `getDistanceFromTop(containerDom)`                | Get the Y-position in pixels from the specified DOM to the top of the document      |
| `getMouseCoordinates(containerDom, e)`            | Return all mouse coordinates in pixels relative to the specified container          |
| `getTextValue(target,)`                           | Return the text content within the specified _DOM_                                  |
| `hasClass(target, className)`                     | Return TRUE if the DOM contains the specified CSS class                             |
| `hide(target,)`                                   | Add the `hide` CSS class to the element (hiding the element)                        |
| `ifExists(target,)`                               | Return TRUE if the DOM exists                                                       |
| `moveAfter(moveThisDom, placeAfterDom)`           | Moves the specified DOM after the end tag of the specified DOM                      |
| `moveBefore(moveThisDom, placeBeforeDom)`         | Moves the specified DOM before the starting tag of the specified DOM                |
| `moveInsideToBottom(moveThisDom, placeInsideDom)` | Moves the specified DOM before the end tag of the specified DOM                     |
| `moveInsideToTop(moveThisDom, placeInsideDom)`    | Moves the specified DOM after the starting tag of the specified DOM                 |
| `remove(target,)`                                 | Removes the specified element from the DOM                                          |
| `removeClass(target, className)`                  | Removes the specified CSS class from the DOM                                        |
| `removeClassFromAll(target, selector, className)` | Removes the specified CSS class from all the elements                               |
| `setDataAttribute(target, dataAttribute, value)`  | Set/update a data attribute value for the specified DOM element                     |
| `show(target)`                                    | Remove the `hide` CSS class from the element (shows the element)                    |
| `updateHtml(target, htmlCode)`                    | Replaces the HTML inside the DOM                                                    |


## Tips

### Show Autocomplete Code Documentation in JetBrains
1. Go to the IDE `Settings` and navigate to `Languages & Frameworks`->`JavaScript`->`Libraries`
2. Click 'Add...' to add a 3rd party library
3. Name the library 'PureLib' and select the full-size `purelib.js` file in the '/build' directory
4. Save and apply the settings