# Convention

| Version   | Original  | Minified  |
|-----------|----------:|-----------|
| v1.2      | 21.2 KB   | 3.20 KB   |
| v1.2a     | 20.9 KB   | 3.22 KB   |


### Original
```
*   |-- addClass            ** Add the specified CSS class to the target Element
*	|-- addClassToAll       ** Add the specified CSS class to all Elements that match the selector
*	|-- closestEl           ** Starting at the target, traverse up the parents until it finds the matching Element
*   |-- cssValue            ** Get the CSS property value for the target Element
*   |-- dataAttr            ** Get a data-attribute value from the target Element
|-- dropdownDataAttr    ** Get a data-attribute value for the currently selected option in an HTML dropdown/select
|-- dropdownTextValue   ** Get the text value for the currently selected option in an HTML dropdown/select
|-- dropdownValue       ** Get the field value of the currently selected option in an HTML dropdown/select
|-- findBySelector      ** Traverse through children and return the first Element that matches the selector
|-- findAllBySelector   ** Traverse through children and return all Elements that matches the selector
|-- getCoords           ** Get the coordinates of an Element relative to the page
|-- getDistanceFromTop  ** Get the distance in pixels from the target to the top of the document
|-- getDom              ** Return the DOM Object of an element
*   |-- getInputValue       ** Return the value of an HTML input field
|-- getKeyCode          ** Return the 'key code' for pressed keys/keyboard actions
*   |-- getTextValue        ** Gets the text value of an Element (e.g. <div>Test</div> would return 'test')
*   |-- hasClass            ** Return True if the specified CSS class exists in the target Element
*   |-- hide                ** Hide an element from the screen
*   |-- hideAllBySelector   ** Find and hide all elements that match the selector
|-- isEmpty             ** Returns True if a Object, Array, or String are empty
|-- moveAfter           ** Move an Element after the closing HTML tag of another Element
|-- moveBefore          ** Move an Element before the opening HTML tag of another Element
|-- moveInsideToBottom  ** Move an Element before the closing HTML tag of another Element
|-- moveInsideToTop     ** Move an Element after the opening HTML tag of another Element
|-- remove              ** Removes the target Element from the DOM
*   |-- removeClass         ** Remove the specified CSS class(es) from the target Element
*   |-- removeClassFromAll  ** Remove the specified CSS class from all Elements that match a selector
*   |-- resetForm           ** Resets the specified HTML form, clears all field inputs
|-- setDataAttr         ** Set/update a data-attribute value for the specified target Element
*   |-- show                ** Show the target Element (if it was previously hidden)
*   |-- showAllBySelector   ** Find and show all Elements that match the selector
|-- updateHtml          ** Replace the HTML inside the target Element
|-- val
|   |-- isKey           ** Return true if the value is a Key in an Object
|   |-- inArray         ** Return True if the specified value exists in an array
|-- validate
|   |-- isJson          ** Returns True if the data is valid Json; False otherwise
```

### Proposed
```
NEW SELECTOR                                            PREVIOUS SELECTOR
|-- closest                                             closest
	|-- elem(selector).addClass(className)                  addClass
	|-- elem(selector).getCss(cssName)                      cssValue
|-- elem(selector).getDataAttr(attrName)                dataAttr
|-- elem(selector).getInputVal()                        getInputValue
|-- elem(selector).getTextVal()                         getTextValue
|-- elem(selector).hasClass()                           hasClass
|-- elem(selector).hide()                               hide
|-- elem(selector).removeClass()                        removeClass
|-- elem(selector).show()                               show
|-- multiElem(selector).hide()                          hideAllBySelector
|-- multiElem(selector).removeClass()                   removeClassFromAll
|-- multiElem(selector).show()                          showAllBySelector
|-- reset(selector)                                     resetForm - modify to reset fields as well
```