/**
 * Convert To DOM
 *
 * @param target
 * @returns {Element|HTMLDocument}
 */
function ctd(target) {
    console.log('---');
    console.dir(target);

    // Return the DOM element if it is a DOM element
    if(target.nodeName){
        console.log("At Nodename");
        return target;
    }
    // if (target instanceof Element || target instanceof HTMLDocument || target instanceof HTMLFormElement) {
    //     return target;
    // }

    // If it is a string, check to see if it is an element ID
    if (typeof target === 'string' || target instanceof String) {           // If it is a string
        let dom = document.getElementById(target);                          // Check to see if the string is an ID in the application
        if (dom) {                                                          // If the ID belongs to a DOM element
            console.log("At String");
            return dom;                                                     // Return the DOM
        }
    }

    throw new Error('PureLib cannot find element on page');                           // Stop execution if DOM cannot be found
}


/**
 * Add the specified CSS class to the specified DOM element
 *
 * @param dom           DOM to add a class to
 * @param className     The class name to add
 */
export function addClass(target, className){
    let dom = ctd(target);
    dom.classList.add(className);
}

/**
 * Add the specified class to all elements inside a DOM
 *
 * @param dom           The DOM the elements are inside
 * @param selector      The selector text to match
 * @param className     The class to add
 */
export function addClassToAll(target, selector, className){
    let dom = ctd(target);
    let elem = dom.querySelectorAll(selector);              // Find all the matching elements inside the dom

    for (let i = 0; i < elem.length; i++) {                 // Loop through each element
        elem[i].classList.add(className);                   // Add the class
    }
}


/**
 * Finds the closest element via the specified selector and returns the element's DOM
 *  - Searches up the DOM tree
 *
 * @param dom           The DOM of the starting point
 * @param selector      e.g. images, .classname, #id
 * @returns {*}         The DOM of the matched element
 */
export function closestEl(target, selector){
    let dom = ctd(target);
    return dom.closest(selector);
}


/**
 * Get the data-attribute value for the specified DOM
 *
 * @param dom                               The DOM to target
 * @param dataAttribute                     The data attribute to get the value of
 * @returns {(string | null) | string}      The data value
 */
export function dataAttr(target, dataAttribute){
    let dom = ctd(target);
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
export function dropdownDataAttr(target, dataAttribute){
    let dom = ctd(target);
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
export function dropdownValue(target){
    let dom = ctd(target);
    return dom.options[dom.selectedIndex].value;
}


/**
 * Return the DOM of the element matched within the parent (equivalent of jQuery find)
 *
 * @param parentDom         The element DOM to start with
 * @param selector          The class/tag/ID to find
 * @returns {*}
 */
export function findBySelector(target, selector){
    let parentDom = ctd(target);
    return parentDom.querySelector(selector);
}


/**
 * Return the DOM of all elements matched within the parent (equivalent of jQuery find)
 *
 * @param dom           The DOM the elements are inside
 * @param selector      The selector text to match
 * @param className     The class to add
 */
export function findAllBySelector(target, selector){
    let dom = ctd(target);
    return dom.querySelectorAll(selector);              // Find all the matching elements inside the dom
}


/**
 * Get an element's distance from the top of the document
 *  - Iterates through all elements above the DOM to get an accurate value in px
 *
 * @param containerDom          The container to measure
 * @returns {number}            The distance from top
 */
export function getDistanceFromTop(targetContainer){
    let containerDom = ctd(targetContainer);
    let yPosition = 0;

    // Loop through the parent nodes until you reach the top of the page (since the offset top will stop a parents with position relative/absolute)
    while(containerDom){
        yPosition += (containerDom.offsetTop - containerDom.scrollTop + containerDom.clientTop);
        containerDom = containerDom.offsetParent;
    }

    return yPosition;
}

/**
 * Get the DOM of an element with the specified ID
 *
 * @param id                        The HTML tag ID to search for
 * @returns {HTMLElement | null}    The element's DOM
 */
export function getDom(target){
    let dom = ctd(target);
    return dom;
}


/**
 * Returns the coordinates (in px) of the user's mouse on the screen relative to the container they are closest to
 *
 * @param containerDom                          The DOM of the container
 * @param e                                     JavaScript event data
 * @returns {{top: number, left: number}}
 */
export function getMouseCoordinates(targetContainer, e){
    let containerDom = ctd(targetContainer);
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
export function getTextValue(target){
    let dom = ctd(target);
    return dom.textContent;
}


/**
 * Determine if a class exists
 *
 * @param dom               The DOM of the element
 * @param className         The class to search for
 * @returns {boolean}       True if class exists; false otherwise
 */
export function hasClass(target, className){
    let dom = ctd(target);
    return (dom.classList.contains(className));
}



/**
 * Hide an element from the screen
 * - Requires having the following CSS rule:
 * |--  .hide{display:none !important;}
 *
 * @param dom    The specified DOM
 */
export function hide(target){
    let dom = ctd(target);
    dom.classList.add('hide');                               // Add the 'hide' class
}


/**
 * Move an element after the end tag of another element
 *
 * @param moveThisDom           The element you want to move
 * @param placeAfterDom         Where you want to place the new element
 */
export function moveAfter(moveThisTarget, placeAfterTarget){
    let moveThisDom = ctd(moveThisTarget);
    let placeAfterDom = ctd(placeAfterTarget);

    placeAfterDom.parentNode.insertBefore(moveThisDom, placeAfterDom.nextSibling);
}


/**
 * Move an element before the starting tag of another element
 *  - Before: <div>##Target##</div>
 *  - After:  ##Target##<div></div>
 *
 * @param moveThisDom           The element you want to move
 * @param placeBeforeDom        Where you want to place the new element
 */
export function moveBefore(moveThisTarget, placeBeforeTarget){
    let moveThisDom = ctd(moveThisTarget);
    let placeBeforeDom = ctd(placeBeforeTarget);

    placeBeforeDom.parentNode.insertBefore(moveThisDom, placeBeforeDom);
}


/**
 * Move an element before the ending tag of another element (AKA - append)
 * - Before: <div>##Target##Content</div>
 * - After:  <div>Content##Target##</div>
 *
 * @param moveThisDom       The element to move (DOM)
 * @param placeInsideDom    Where you want to place the element (DOM)
 */
export function moveInsideToBottom(moveThisTarget, placeInsideTarget){
    let moveThisDom = ctd(moveThisTarget);
    let placeInsideDom = ctd(placeInsideTarget);

    placeInsideDom.appendChild(moveThisDom);
}


/**
 * Move an element after the starting tag of another element (AKA - prepend)
 * - Before: <div>Content##Target##</div>
 * - After:  <div>##Target##Content</div>
 *
 * @param moveThisDom       The element to move (DOM)
 * @param placeInsideDom    Where you want to place the element (DOM)
 */
export function moveInsideToTop(moveThisTarget, placeInsideTarget){
    let moveThisDom = ctd(moveThisTarget);
    let placeInsideDom = ctd(placeInsideTarget);

    placeInsideDom.insertBefore(moveThisDom, placeInsideDom.firstChild);
}


/**
 * Removes an element from the DOM
 *
 * @param dom               The DOM of the element to remove
 */
export function remove(target){
    let dom = ctd(target);
    dom.parentNode.removeChild(dom);
}


/**
 * Remove the specified class from a DOM element
 *
 * @param dom           The DOM of the element
 * @param className     (string|array): string - The class to remove, Array - a list of classes to remove
 */
export function removeClass(target, className){
    let dom = ctd(target);

    if(Array.isArray(className)){               // If it was passed an array of classes to remove
        for(const cName of className){          // Iterate through each item
            dom.classList.remove(cName);        // Remove the class
        }
    }
    else{                                       // If a string
        dom.classList.remove(className);
    }
}


/**
 * Remove the specified class from all elements inside a DOM
 *
 * @param dom           The DOM the elements are inside
 * @param selector      The selector text to match
 * @param className     The class to remove
 */
export function removeClassFromAll(target, selector, className){
    let dom = ctd(target);
    let elem = dom.querySelectorAll(selector);               // Find all the matching elements inside the dom

    for (let i = 0; i < elem.length; i++) {                 // Loop through each element
        elem[i].classList.remove(className);                // Remove the class
    }
}


/**
 * Set/update a data-attribute value for a DOM element
 *
 * @param dom               The DOM element to target
 * @param dataAttribute     The data attribute name
 * @param value             The value to assign
 */
export function setDataAttr(target, dataAttribute, value){
    let dom = ctd(target);
    let attribute_name = 'data-' + dataAttribute;

    dom.setAttribute(attribute_name, value);
}


/**
 * Show an element (if it was previously hidden)
 * |-- Requires the following css class:
 * |    |-- .hide{display:none !important;}
 *
 * @param dom        The specified DOM
 */
export function show(target){
    let dom = ctd(target);
    dom.classList.remove('hide');                            // Remove the 'hide' class
}


/**
 * Replace the HTML inside the matching container
 *
 * @param dom
 * @param htmlCode
 */
export function updateHtml(target, htmlCode){
    let dom = ctd(target);
    dom.innerHTML = htmlCode;
}


