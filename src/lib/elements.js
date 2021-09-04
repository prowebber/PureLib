

/**
 * Get the target element via the query selector and the parent DOM
 *
 * @param selector {Element|String} The query selector of the target element
 * @param parent {Element|document} The parent element
 * @returns {HTMLElement|{nodeName}|*}
 */
function getTarget(selector, parent) {
    // If this is an Element, return the DOM
    if (target && target.nodeName)  return target;

    // Assume the user is trying to find a query selector after this point

    let dom = parent.querySelectorAll(target);

    if(dom) return dom;

    // If the target cannot be found
    throw new Error('PureLib cannot find element on page');         // Throw an error
}

/**
 * Called if the method can only be applied to a single element
 */
function throwTooManyElements(){
    throw new Error('Specify only one element');         // Throw an error
}


/**
 * Handles all element related calls
 * @param selector {Element} The target element's query selector
 * @param parent {Document|Element}
 */
export function elem(selector, parent = document){
    let targets = getTarget(selector, parent);              // Get the target element
    let isMultiElem = (targets.length > 1);                 // True if the target element is multiple elements

    /**
     * Add the specified CSS class to the target Element
     * @param className {String|Array} The CSS class {String} or classes {Array} to add
     */
    this.addClass = (className) => {

        // Convert string to array for easier logic
        if(typeof className === 'string') {
            className = [className];                        // Convert to an array
        }

        for(let elem of targets){                           // Loop through each target element
            for (let cssClass of className){                // Loop through each CSS class
                elem.classList.add(cssClass);               // Add the class to the target element
            }
        }
    };


    /**
     * Get the value of the specified CSS property for the target element
     * - E.g. 'width' returns '100px';
     *
     * @param cssPropName {String} The CSS property you want the value of (e.g. 'width', 'background-color', etc.
     * @returns {string}
     */
    this.getCssVal = (cssPropName) => {
        if(isMultiElem) throwTooManyElements();             // Don't continue if too many elements are called
        return window.getComputedStyle(targets[0]).getPropertyValue(cssPropName);
    };



}