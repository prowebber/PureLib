let pureLib = (function() {

    function ctd(target) {
        // If this is a DOM object, return the DOM
        if (target.nodeName)  return target;

        // If this is a string reference
        if (typeof target === 'string' || target instanceof String) {
            let dom = document.getElementById(target);                  // See if the string is an element's HTML ID
            if (dom) {                                                  // If the string is an element's HTML ID; return the DOM
                return dom;
            }
        }

        // If the target cannot be found
        throw new Error('PureLib cannot find element on page');
    }

    function L(){}

    /* Specify the methods */
    L.prototype = {

        /**
         * Add the specified CSS class to the specified DOM element
         *
         * @param dom           DOM to add a class to
         * @param className     The class name to add
         */
        'addClass': function(target, className){
            let dom = ctd(target);
            dom.classList.add(className);
        },

        /**
         * Add the specified class to all elements inside a DOM
         *
         * @param dom           The DOM the elements are inside
         * @param selector      The selector text to match
         * @param className     The class to add
         */
        'addClassToAll': function(target, selector, className){
            let dom = ctd(target);                                  // Get the DOM
            let elem = dom.querySelectorAll(selector);              // Find all the matching elements inside the dom

            for (let i = 0; i < elem.length; i++) {                 // Loop through each element
                elem[i].classList.add(className);                   // Add the class
            }
        },

        /**
         * Finds the closest element by the specified selector and returns the element's DOM
         *  - Searches up the DOM tree
         *
         * @param dom           The DOM of the starting point
         * @param selector      e.g. images, .classname, #id
         * @returns {*}         The DOM of the matched element
         */
        'closestEl': function (target, selector) {
            let dom = ctd(target);                                  // Get the DOM
            return dom.closest(selector);
        },

        /**
         * Get the data-attribute value for the specified DOM
         *
         * @param dom                               The DOM to target
         * @param dataAttribute                     The data attribute to get the value of
         * @returns {(string | null) | string}      The data value
         */
        'dataAttr': function (target, dataAttribute) {
            let dom = ctd(target);                                  // Get the DOM
            let attribute_name = 'data-' + dataAttribute;
            return dom.getAttribute([attribute_name]);
        },

        /**
         * Get the specified data attribute for the selection option in an HTML dropdown menu
         *
         * @param target                DOM object, HTML
         * @param dataAttribute         The name of the data attribute
         * @returns {string | null}     The value of the data attribute
         */
        'dropdownDataAttr': function(target, dataAttribute){
            let dom = ctd(target);                                  // Get the DOM
            let attribute_name = 'data-' + dataAttribute;
            let selected = dom.options[dom.selectedIndex];          // Find the selected item in the dropdown
            return selected.getAttribute(attribute_name);           // Return the specified data attribute
        },

        /**
         * Get the value of the currently selected option in an HTML dropdown menu
         *
         * @param dom               The DOM element to match
         * @returns {string}        The value of the selected element
         */
        'dropdownValue': function (target) {
            let dom = ctd(target);                                  // Get the DOM
            return dom.options[dom.selectedIndex].value;
        },

        /**
         * Return the DOM of the element matched within the parent (equivalent of jQuery find)
         *
         * @param parentDom         The element DOM to start with
         * @param selector          The class/tag/ID to find
         * @returns {*}
         */
        'findBySelector': function (parentTarget, selector) {
            let parentDom = ctd(parentTarget);                      // Get the DOM
            return parentDom.querySelector(selector);
        },


        /**
         * Return the DOM of all elements matched within the parent (equivalent of jQuery find)
         *
         * @param dom           The DOM the elements are inside
         * @param selector      The selector text to match
         * @param className     The class to add
         */
        'findAllBySelector': function (target, selector) {
            let dom = ctd(target);                                  // Get the DOM
            return dom.querySelectorAll(selector);                  // Find all the matching elements inside the dom
        },


        /**
         * Get an element's distance from the top of the document
         *  - Iterates through all elements above the DOM to get an accurate value in px
         *
         * @param containerDom          The container to measure
         * @returns {number}            The distance from top
         */
        'getDistanceFromTop': function(containerTarget){
            let containerDom = ctd(containerTarget);
            let yPosition = 0;

            // Loop through the parent nodes until you reach the top of the page (since the offset top will stop a parents with position relative/absolute)
            while(containerDom){
                yPosition += (containerDom.offsetTop - containerDom.scrollTop + containerDom.clientTop);
                containerDom = containerDom.offsetParent;
            }

            return yPosition;
        },

        /**
         * Return the DOM of an element
         * @param target
         * @returns {*|HTMLElement|undefined}
         */
        'getDom': function(target){
            return ctd(target);
        },

        /**
         * Returns the coordinates (in px) of the user's mouse on the screen relative to the container they are closest to
         *
         * @param containerDom                          The DOM of the container
         * @param e                                     JavaScript event data
         * @returns {{top: number, left: number}}
         */
        'getMouseCoordinates': function (containerTarget, e) {
            let containerDom = ctd(containerTarget);
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
        },


        /**
         * Gets the text value of an element (e.g. <div>Test</div> would return 'test')
         *
         * @param dom               The dom of the element
         * @returns {string}        The text value inside that element
         */
        'getTextValue': function (target) {
            let dom = ctd(target);                                  // Get the DOM
            return dom.textContent;
        },


        /**
         * Determine if a class exists
         *
         * @param dom               The DOM of the element
         * @param className         The class to search for
         * @returns {boolean}       True if class exists; false otherwise
         */
        'hasClass': function (target, className) {
            let dom = ctd(target);                                  // Get the DOM

            // If the DOM exists, return a bool of the class existence; otherwise return false;
            return (dom != null) ? (dom.classList.contains(className)) : false;
        },

        /**
         * Hide an element from the screen
         *
         * @param dom    The specified DOM
         */
        'hide': function (target) {
            let dom = ctd(target);                                  // Get the DOM
            dom.classList.add('hide');                              // Add the 'hide' class
        },


        /**
         * Move an element after the end tag of another element
         *
         * @param moveThisDom           The element you want to move
         * @param placeAfterDom         Where you want to place the new element
         */
        'moveAfter': function (moveThisTarget, placeAfterTarget) {
            let moveThisDom = ctd(moveThisTarget);              // Get the DOM
            let placeAfterDom = ctd(placeAfterTarget);          // Get the DOM
            placeAfterDom.parentNode.insertBefore(moveThisDom, placeAfterDom.nextSibling);
        },


        /**
         * Move an element before the starting tag of another element
         *  - Before: <div>##Target##</div>
         *  - After:  ##Target##<div></div>
         *
         * @param moveThisDom           The element you want to move
         * @param placeBeforeDom        Where you want to place the new element
         */
        'moveBefore': function (moveThisTarget, placeBeforeTarget) {
            let moveThisDom = ctd(moveThisTarget);              // Get the DOM
            let placeBeforeDom = ctd(placeBeforeTarget);        // Get the DOM
            placeBeforeDom.parentNode.insertBefore(moveThisDom, placeBeforeDom);
        },


        /**
         * Move an element before the ending tag of another element (AKA - append)
         * - Before: <div>##Target##Content</div>
         * - After:  <div>Content##Target##</div>
         *
         * @param moveThisDom       The element to move (DOM)
         * @param placeInsideDom    Where you want to place the element (DOM)
         */
        'moveInsideToBottom': function (moveThisTarget, placeInsideTarget) {
            let moveThisDom = ctd(moveThisTarget);              // Get the DOM
            let placeInsideDom = ctd(placeInsideTarget);        // Get the DOM
            placeInsideDom.appendChild(moveThisDom);
        },


        /**
         * Move an element after the starting tag of another element (AKA - prepend)
         * - Before: <div>Content##Target##</div>
         * - After:  <div>##Target##Content</div>
         *
         * @param moveThisDom       The element to move (DOM)
         * @param placeInsideDom    Where you want to place the element (DOM)
         */
        'moveInsideToTop': function (moveThisTarget, placeInsideTarget) {
            let moveThisDom = ctd(moveThisTarget);              // Get the DOM
            let placeInsideDom = ctd(placeInsideTarget);        // Get the DOM
            placeInsideDom.insertBefore(moveThisDom, placeInsideDom.firstChild);
        },


        /**
         * Removes an element from the DOM
         *
         * @param dom               The DOM of the element to remove
         */
        'remove': function (target) {
            let dom = ctd(target);                                  // Get the DOM
            dom.parentNode.removeChild(dom);
        },


        /**
         * Remove the specified class from a DOM element
         *
         * @param dom           The DOM of the element
         * @param className     (string|array): string - The class to remove, Array - a list of classes to remove
         */
        'removeClass': function (target, className) {
            let dom = ctd(target);                                  // Get the DOM
            if(Array.isArray(className)){                           // If it was passed an array of classes to remove
                for(const cName of className){                      // Iterate through each item
                    dom.classList.remove(cName);                    // Remove the class
                }
            }
            else{                                                   // If a string
                dom.classList.remove(className);
            }
        },


        /**
         * Remove the specified class from all elements inside a DOM
         *
         * @param dom           The DOM the elements are inside
         * @param selector      The selector text to match
         * @param className     The class to remove
         */
        'removeClassFromAll': function (target, selector, className) {
            let dom = ctd(target);                                  // Get the DOM
            let elem = dom.querySelectorAll(selector);              // Find all the matching elements inside the dom

            for (let i = 0; i < elem.length; i++) {                 // Loop through each element
                elem[i].classList.remove(className);                // Remove the class
            }
        },


        /**
         * Set/update a data-attribute value for a DOM element
         *
         * @param dom               The DOM element to target
         * @param dataAttribute     The data attribute name
         * @param value             The value to assign
         */
        'setDataAttr': function (target, dataAttribute, value) {
            let dom = ctd(target);                                  // Get the DOM
            dom.setAttribute('data-' + dataAttribute, value);
        },


        /**
         * Show an element (if it was previously hidden)
         *
         * @param dom        The specified DOM
         */
        'show': function (target) {
            let dom = ctd(target);                                  // Get the DOM
            dom.classList.remove('hide');                           // Remove the 'hide' class
        },


        /**
         * Replace the HTML inside the matching container
         *
         * @param dom
         * @param htmlCode
         */
        'updateHtml': function (target, htmlCode) {
            let dom = ctd(target);                                  // Get the DOM
            dom.innerHTML = htmlCode;
        }
    };

    return L;
})();

let l = new pureLib();
