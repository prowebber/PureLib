# PureLib
PureLib is a lightweight and simple JavaScript library that contains "shortcuts" to commonly referenced JavaScript methods. 

#### Features
* Babel Polyfill supports top 95% ±1% of browsers. [See the list of supported browsers here](https://browserl.ist/?q=last+1+version%2C+not+dead%2C+%3E+0.2%25)
* Provides 30 shortcuts to commonly used JavaScript actions
* Final script is 1.5KB in size
* Target items by passing the [Element object](https://developer.mozilla.org/en-US/docs/Web/API/Element) or the [HTML ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) to the function.

## Installation
There are two ways to install PureLib for testing or use in production.

### Quick Installation
Download (or copy) the following files and include them in the header of the page.
* `dist/purelib.min.js` - Minified script
* `dist/purelib.min.css` - Minified CSS script

### Development Installation
You can clone or download PureLib for personal development (if desired).  The below details explain how to do this:

**File Structure** - PureLib organizes files using the following structure:
```
/archive
/dist          ** Contains the final compiled minified files
/src           ** Contains original source files
|--   /css     ** Contains any CSS files used by PureLib
```

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

| Command                         | Action                                                                                  |
|:--------------------------------|:----------------------------------------------------------------------------------------|
| `l.addClass(a, b)`              | Add one or more CSS classes to the target Element                                       |
| `l.addClassToAll(a, b, c)`      | Add one or more specified CSS classes to all Elements that match the selector           |
| `l.closestEl(a, b)`             | Starting at the target, traverse up the parents until it finds the matching Element     |
| ~~`cssValue(a, b)`~~            | Get the CSS property value for the target Element                                       |
| `l.dataAttr(a, b)`              | Get a data-attribute value from the target Element                                      |
| `l.dropdownDataAttr(a, b)`      | Get a data-attribute value for the currently selected option in an HTML dropdown/select |
| `l.dropdownTextValue(a)`        | Get the text value for the currently selected option in an HTML dropdown/select         |
| `l.dropdownValue(a)`            | Get the field value of the currently selected option in an HTML dropdown/select         |
| `l.findBySelector(a, b)`        | Traverse through children and return the first Element that matches the selector        |
| `l.findAllBySelector(a, b)`     | Traverse through children and return all Elements that matches the selector             |
| ~~`getCoords(a)`~~              | Returns the coordinates of the element relative to the page                             |
| ~~`getDistanceFromTop(a)`~~     | Get the distance in pixels from the target to the top of the document                   |
| `l.getDom(a)`                   | Return the DOM Object of an element                                                     |
| `l.getInputValue(a)`            | Return the value of an HTML input field                                                 |
| ~~`getKeyCode(a)`~~             | Return the 'key code' for pressed keys/keyboard actions                                 |
| ~~`getTextValue(a)`~~           | Gets the text value of an Element (e.g. `<div>Test</div>` would return 'test')          |
| `l.hasClass(a, b)`              | Return True if the specified CSS class exists in the target Element                     |
| `l.hide(target)`                | Hide an element from the screen                                                         |
| `l.hideAllBySelector(selector)` | Find and hide all elements that match the selector                                      |
| `inArray(a, b)`                 | Returns True if the specified value exists in an array                                  |
| `isEmpty(a)`                    | Returns True if a Object, Array, or String are empty                                    |
| `moveAfter(a, b)`               | Move an Element after the closing HTML tag of another Element                           |
| `moveBefore(a, b)`              | Move an Element before the opening HTML tag of another Element                          |
| `moveInsideToBottom(a, b)`      | Move an Element before the closing HTML tag of another Element                          |
| `moveInsideToTop(a, b)`         | Move an Element after the opening HTML tag of another Element                           |
| `remove(a)`                     | Removes the target Element from the DOM                                                 |
| `removeClass(a, b)`             | Remove the specified CSS class(es) from the target Element                              |
| `removeClassFromAll(a, b, c)`   | Remove the specified CSS class from all Elements that match a selector                  |
| `resetForm(a)`                  | Resets the specified HTML form, clears all field inputs                                 |
| `setDataAttr(a, b, c)`          | Set/update a data-attribute value for the specified target Element                      |
| `show(a)`                       | Show the target Element (if it was previously hidden)                                   |
| `showAllBySelector(a)`          | Find and show all Elements that match the selector                                      |
| `updateHtml(a, b)`              | Replace the HTML inside the target Element                                              |
| `validate.isJson(a)`            | Returns True if the data is valid Json                                                  |


### Command Changes
As PureLib is improved, some of the methods calls may be changed.  Below specifies commands that have been
changed and what they were changed to.

| Prev Command    | New Command         | Changed at Version |
|:----------------|:--------------------|:------------------:|
| `inArray(a, b)` | `val.inArray(a, b)` |        1.1         |


## Examples

### Query Selectors
Below are examples of syntax to use for query selector strings.  You can see more [documentation here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

| CSS Selector Syntax | Description                                     |
|:--------------------|:------------------------------------------------|
| `.page-content`     | Find all elements by class name                 |
| `#nav_header`       | Find element by HTML ID                         |
| `input`             | Find elements by HTML tag (e.g. `<input>` tags) |
| `input.search`      | Finds all `<input class='search'>` elements     |


## Commands
Below are examples of the PureLib commands.



### addClass(target, className)
Adds the specified CSS class to the target element.

| Name        | Type                          | Notes                                                                            |
|:------------|:------------------------------|:---------------------------------------------------------------------------------|
| `target`    | {_DOM Element_} or {_string_} | The target element. Passing a {_string_} will find and target the element by ID. |
| `className` | _string_                      | The class name to add (do not use leading periods '.' in class names)            |

```js
// Add the CSS class .animate to an element with the ID 'sidebar_footer'
l.addClass('sidebar_footer', 'animate');

// Add the CSS class .animate to an element object
let target = l.getDom('sidebar_footer');    // Get the element
l.removeClass(target, 'animate');
```


### val.isKey(obj, value)
Returns `true` if the value exists as a key in the specified Object.


| Name    | Type       | Notes                                     |
|:--------|:-----------|:------------------------------------------|
| `obj`   | {_Object_} | The object you want to search             |
| `value` | _string_   | The name of the key you are searching for |

```js
let animals = {
	'cat': 'Bart',
	'dog': 'Max'
};

let isCat = l.val.isKey(animals, 'cat');     // Returns true
let isHorse = l.val.isKey(animals, 'horse');   // Returns false
```


## Other

### Show Autocomplete Code Documentation in JetBrains
1. Go to the IDE `Settings` and navigate to `Languages & Frameworks`->`JavaScript`->`Libraries`
2. Click 'Add...' to add a 3rd party library
3. Name the library 'PureLib' and select the full-size `purelib.js` file in the '/build' directory
4. Save and apply the settings

## Function Examples


