/**
 * Convert To DOM
 *
 * @param target
 * @returns {Element|HTMLDocument}
 */
function ctd(target){
    // Return the DOM element if it is a DOM element
    if(target instanceof Element || target instanceof HTMLDocument){
        return target;
    }

    // If it is a string, check to see if it is an element ID
    if(typeof target === 'string' || target instanceof String){             // If it is a string
        let dom = document.getElementById(target);                          // Check to see if the string is an ID in the application
        if(dom){                                                            // If the ID belongs to a DOM element
            return dom;                                                     // Return the DOM
        }
    }
}


export function hide(target){
    let dom = ctd(target);
}