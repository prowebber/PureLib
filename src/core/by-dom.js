/***********************************************************
 *  All DOM related functions
 ***********************************************************/


/**
 * Add a class to the specified DOM
 *
 * @param dom           DOM to add a class to
 * @param className     The class name to add
 */
export function addClass(dom, className){
    dom.classList.add(className);
}

/**
 * Add the specified class to all elements inside a DOM
 *
 * @param dom           The DOM the elements are inside
 * @param selector      The selector text to match
 * @param className     The class to add
 */
export function addClassToAll(dom, selector, className){
    let elem = dom.querySelectorAll(selector);              // Find all the matching elements inside the dom

    for (let i = 0; i < elem.length; i++) {                 // Loop through each element
        elem[i].classList.add(className);                   // Add the class
    }
}

/**
 * Show an element (if it was previously hidden)
 *
 * @param dom        The specified DOM
 */
export function show(dom) {
    dom.classList.remove('hide');
}


/**
 * Finds the closest element via the specified selector and returns the element's DOM
 *  - Searches up the DOM tree
 *
 * @param dom           The DOM of the starting point
 * @param selector      e.g. images, .classname, #id
 * @returns {*}         The DOM of the matched element
 */
export function closestEl(dom, selector){
    return dom.closest(selector);
}

/**
 * Get the data-attribute value for the specified DOM
 *
 * @param dom                               The DOM to target
 * @param dataAttribute                     The data attribute to get the value of
 * @returns {(string | null) | string}      The data value
 */
export function data(dom, dataAttribute){
    let attribute_name = 'data-' + dataAttribute;
    return dom.getAttribute([attribute_name]);
}

/**
 * Get the specified data attribute for the selection option in an HTML dropdown menu
 *
 * @param dom                    The DOM of the dropdown menu element
 * @param dataAttribute         The name of the data attribute
 * @returns {string | null}     The value of the data attribute
 */
export function dropdownDataAttribute(dom, dataAttribute){
    let attribute_name = 'data-' + dataAttribute;
    let selected = dom.options[dom.selectedIndex];          // Find the selected item in the dropdown
    return selected.getAttribute(attribute_name);           // Return the specified data attribute
}

/**
 * Get the value of the currently selected option in an HTML dropdown menu
 *
 * @param dom               The DOM element to match
 * @returns {string}        The value of the selected element
 */
export function dropdownValue(dom){
    return dom.options[dom.selectedIndex].value;
}

/**
 * Return the DOM of the element matched within the parent (equivalent of jQuery find)
 *
 * @param parentDom         The element DOM to start with
 * @param selector          The class/tag/ID to find
 * @returns {*}
 */
export function findBySelector(parentDom, selector){
    return parentDom.querySelector(selector);
}

/**
 * Return the DOM of all elements matched within the parent (equivalent of jQuery find)
 *
 * @param dom           The DOM the elements are inside
 * @param selector      The selector text to match
 * @param className     The class to add
 */
export function findAllBySelector(dom, selector){
    return dom.querySelectorAll(selector);              // Find all the matching elements inside the dom
}

/**
 * Get an element's distance from the top of the document
 *  - Iterates through all elements above the DOM to get an accurate value in px
 *
 * @param containerDom          The container to measure
 * @returns {number}            The distance from top
 */
export function getDistanceFromTop(containerDom){
    let yPosition = 0;

    // Loop through the parent nodes until you reach the top of the page (since the offset top will stop a parents with position relative/absolute)
    while(containerDom){
        yPosition += (containerDom.offsetTop - containerDom.scrollTop + containerDom.clientTop);
        containerDom = containerDom.offsetParent;
    }

    return yPosition;
}

/**
 * Returns the coordinates (in px) of the user's mouse on the screen relative to the container they are closest to
 *
 * @param containerDom                          The DOM of the container
 * @param e                                     JavaScript event data
 * @returns {{top: number, left: number}}
 */
export function getMouseCoordinates(containerDom, e){
    let client = containerDom.getBoundingClientRect();

    let xPosition = 0;
    let yPosition = 0;

    let coordinates = {
        'container': {
            'top': containerDom.offsetTop,                  // The distance of the nearest container from the top of the page in px
            'left': containerDom.offsetLeft,                // The distance of the nearest container from the left of the page in px
        },
        'doc': {
            'top': e.pageY,                                 // The distance of the user's cursor from the top of the page in px
            'left': e.pageX                                 // The distance of the user's cursor from the left of the page in px
        },
        'client': {
            'top': client.top,
            'left': client.left,
            'height': client.height,
        },
        'window': {
            'top': window.pageYOffset,
            'left': window.pageXOffset,
        },
        'computed':{
            'top': yPosition,
            'left': xPosition,
        }
    };

    // Loop through the parent nodes until you reach the top of the page (since the offset top will stop a parents with position relative/absolute)
    while(containerDom){
        xPosition += (containerDom.offsetLeft - containerDom.scrollLeft + containerDom.clientLeft);
        yPosition += (containerDom.offsetTop - containerDom.scrollTop + containerDom.clientTop);
        containerDom = containerDom.offsetParent;
    }

    coordinates.computed.top = yPosition;
    coordinates.computed.left = xPosition;

    return coordinates;
}


/**
 * Gets the text value of an element (e.g. <div>Test</div> would return 'test')
 *
 * @param dom               The dom of the element
 * @returns {string}        The text value inside that element
 */
export function getTextValue(dom){
    return dom.textContent;
}