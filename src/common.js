/**
 * This contains functions that are used within Purelib
 */


/**
 *
 * @param target {Element|String}
 * @param checkExists {boolean}    True if you want to return false if the DOM does NOT exist
 * @returns {HTMLElement|{nodeName}|*}
 */
export function ctd(target, checkExists= false) {
    if(typeof checkExists === "undefined") checkExists = false;     // Set to false if not specified in argument

    // If this is an Element, return the DOM
    if (target && target.nodeName)  return target;

    // If this is a string reference
    if (typeof target === 'string' || target instanceof String) {
        let dom = document.getElementById(target);                  // See if the string is an element's HTML ID
        if (dom) {                                                  // If the string is an element's HTML ID; return the DOM
            return dom;
        }
    }


    // If the target cannot be found
    if(checkExists){                                                // If checking to see if the target exists
        return false;                                               // Return False since it was not found
    }
    else{                                                           // If attempting to fetch the target
        throw new Error('PureLib cannot find element on page');     // Throw an error
    }
}