# PureLib

## Overview
PureLib is a lightweight and simple JavaScript library created to replace the usage of jQuery across web 
applications.  PureLib only contains commonly used JavaScript actions and does not support outdated/uncommon browsers.
This significantly reduces file size and load time.


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
| `dom`           | JavaScript DOM object                             |
| `e`             | JavaScript event listener                         |
| `parentDom`     | JavaScript DOM object                             |
| `selector`      | (string) string containing DOM selectors to match |

### Editing via DOM _(l.dom)_
These functions expect to receive a DOM value as an argument.  Call in JavaScript with `l.dom.{command(args)}`.

| Command                                           | Action                                                                              |
|:--------------------------------------------------|:------------------------------------------------------------------------------------|
| `addClass(dom, className)`                        | Add the specified CSS class to the specified DOM element                            |
| `addClassToAll(dom, selector, className)`         | Add the specified CSS class to all matched elements inside the DOM                  |
| `closestEl(dom, selector)`                        | Traverse up DOM tree and return first element that matches the selector             |
| `dataAttr(dom, dataAttribute)`                    | Get the data-attribute value for the specified DOM                                  |
| `dropdownDataAttr(dom, dataAttribute)`            | Get the data-attribute value for the selected value in HTML select input            |
| `dropdownValue(dom)`                              | Get the value of the currently selected HTML select input                           |
| `findAllBySelector(dom, selector)`                | Search the descendants of the _parentDom_ and return all DOMs that match _selector_ |
| `findBySelector(parentDom, selector)`             | Search the descendants of the _parentDom_ and return the first _selector_ match DOM |
| `getDistanceFromTop(containerDom)`                | Get the Y-position in pixels from the specified DOM to the top of the document      |
| `getMouseCoordinates(containerDom, e)`            | Return all mouse coordinates in pixels relative to the specified container          |
| `getTextValue(dom)`                               | Return the text content within the specified _DOM_                                  |
| `hasClass(dom, className)`                        | Return TRUE if the DOM contains the specified CSS class                             |
| `hide(dom)`                                       | Add the `hide` CSS class to the element (hiding the element)                        |
| `ifExists(dom)`                                   | Return TRUE if the DOM exists                                                       |
| `moveAfter(moveThisDom, placeAfterDom)`           | Moves the specified DOM after the end tag of the specified DOM                      |
| `moveBefore(moveThisDom, placeBeforeDom)`         | Moves the specified DOM before the starting tag of the specified DOM                |
| `moveInsideToBottom(moveThisDom, placeInsideDom)` | Moves the specified DOM before the end tag of the specified DOM                     |
| `moveInsideToTop(moveThisDom, placeInsideDom)`    | Moves the specified DOM after the starting tag of the specified DOM                 |
| `remove(dom)`                                     | Removes the specified element from the DOM                                          |
| `removeClass(dom, className)`                     | Removes the specified CSS class from the DOM                                        |
| `removeClassFromAll(dom, selector, className)`    | Removes the specified CSS class from all the elements                               |
| `setDataAttribute(dom, dataAttribute, value)`     | Set/update a data attribute value for the specified DOM element                     |
| `show(dom)`                                       | Remove the `hide` CSS class from the element (shows the element)                    |
| `updateHtml(dom, htmlCode)`                       | Replaces the HTML inside the DOM                                                    |

