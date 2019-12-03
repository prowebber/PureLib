
let pureLib = (function() {
    /**
     * Doc References: https://devdocs.io/jsdoc/tags-param
     *
     * !! Important - Do not place this below the "use strict" or it will break JetBrains auto-complete
     */

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

    function L(){}                          // Create an empty function

    /* Specify the methods */
    L.prototype = {

        /**
         * Add the specified CSS class to the specified DOM element
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @param className {string}        The class name to add (do not use leading periods '.' in class names)
         */
        'addClass': function(target, className){
            let dom = ctd(target);
            dom.classList.add(className);
        },

        /**
         * Add the specified class to all elements inside a DOM
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @param selector {string}         The selector query/text to match
         * @param className {string}        The class name to add (do not use leading periods '.' in class names)
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
         * @param target {Object|string}    DOM object or HTML element ID
         * @param selector {string}         The selector query/text to match
         * @returns {Object}                The DOM of the matched element
         */
        'closestEl': function (target, selector) {
            let dom = ctd(target);                                  // Get the DOM
            return dom.closest(selector);
        },

        /**
         * Get the data-attribute value for the specified DOM
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @param dataAttribute {string}    The data attribute to get the value of
         * @returns {string | null}         The attribute value
         */
        'dataAttr': function (target, dataAttribute) {
            let dom = ctd(target);                                  // Get the DOM
            let attribute_name = 'data-' + dataAttribute;
            return dom.getAttribute([attribute_name]);
        },

        /**
         * Get the specified data attribute for the selection option in an HTML dropdown menu
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @param dataAttribute {string}    The data attribute to get the value of
         * @returns {string | null}         The value of the data attribute
         */
        'dropdownDataAttr': function(target, dataAttribute){
            let dom = ctd(target);                                  // Get the DOM
            let attribute_name = 'data-' + dataAttribute;
            let selected = dom.options[dom.selectedIndex];          // Find the selected item in the dropdown
            return selected.getAttribute(attribute_name);           // Return the specified data attribute
        },

        /**
         * Get the text value for the selected option in an HTML dropdown menu
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @returns {string}                The text value
         */
        'dropdownTextValue': function (target) {
            let dom = ctd(target);                                  // Get the DOM
            let selected = dom.options[dom.selectedIndex];          // Find the selected item in the dropdown
            return selected.text;
        },

        /**
         * Get the value of the currently selected option in an HTML dropdown menu
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @returns {string}                The value of the selected element
         */
        'dropdownValue': function (target) {
            let dom = ctd(target);                                  // Get the DOM
            return dom.options[dom.selectedIndex].value;
        },

        /**
         * Return the DOM of the element matched within the parent (equivalent of jQuery find)
         *
         * @param parentDom {Object|string} DOM object or HTML element ID to search within
         * @param selector {string}         The selector query/text to match
         * @returns {Object}                JavaScript DOM object
         */
        'findBySelector': function (parentTarget, selector) {
            let parentDom = ctd(parentTarget);                      // Get the DOM
            return parentDom.querySelector(selector);
        },


        /**
         * Return the DOM of all elements matched within the parent (equivalent of jQuery find)
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @param selector {string}         The selector query/text to match
         * @returns {Object}                JavaScript DOM object(s)
         */
        'findAllBySelector': function (target, selector) {
            let dom = ctd(target);                                  // Get the DOM
            return dom.querySelectorAll(selector);                  // Find all the matching elements inside the dom
        },


        /**
         * Get an element's distance from the top of the document
         *  - Iterates through all elements above the DOM to get an accurate value in px
         *
         * @param containerTarget {Object|string}   DOM object or HTML element ID of the container to measure from
         * @returns {number}                        The distance from top of the document to the top of the container in pixels
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
         * @param target {Object|string}        DOM object or HTML element ID
         * @returns {*|HTMLElement|undefined}
         */
        'getDom': function(target){
            return ctd(target);
        },


        /**
         * Get the value of an input
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @returns {*}			            The value of the input
         */
        'getInputValue': function(target){
            let dom = ctd(target);          // Get the DOM
            return dom.value;
        },


        /**
         * Returns the coordinates (in px) of the user's mouse on the screen relative to the container they are closest to
         *
         * @param containerTarget {Object|string}   DOM object or HTML element ID the coordinates will be measured from
         * @param e                                 JavaScript event data
         * @returns {Object}                        Object of coordinate values
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
         * @param target {Object|string}    DOM object or HTML element ID
         * @returns {string}                The text value inside that element
         */
        'getTextValue': function (target) {
            let dom = ctd(target);                                  // Get the DOM
            return dom.textContent;
        },


        /**
         * Determine if a class exists
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @param className {string}        The class to search for
         * @returns {boolean}               True if class exists; false otherwise
         */
        'hasClass': function (target, className) {
            let dom = ctd(target);                                  // Get the DOM

            // If the DOM exists, return a bool of the class existence; otherwise return false;
            return (dom != null) ? (dom.classList.contains(className)) : false;
        },

        /**
         * Hide an element from the screen
         *
         * @param target {Object|string}        DOM object or HTML element ID
         */
        'hide': function (target) {
            let dom = ctd(target);              // Get the DOM
            dom.classList.add('hide');          // Add the 'hide' class
        },

        /**
         * Find and hide all matching elements
         * - Add a css .hide class to each matching element
         *
         * @param selector {string}     The selector query/text to match
         */
        'hideAllBySelector': function(selector){
            let elem = document.querySelectorAll(selector);

            for (let i = 0; i < elem.length; i++) {             // Loop through each element
                elem[i].classList.add('hide');                  // Add the 'hide' class
            }
        },


        /**
         * Move an element after the end tag of another element
         *
         * @param moveThisTarget {Object|string}       DOM object or HTML element ID you want moved
         * @param placeAfterTarget {Object|string}     DOM object or HTML element ID you want the element moved to
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
         * @param moveThisTarget           DOM object or HTML element ID you want to move
         * @param placeBeforeTarget        DOM object or HTML element ID you want the element moved to
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
         * @param moveThisTarget       DOM object or HTML element ID you want to move
         * @param placeInsideTarget    DOM object or HTML element ID you want the element moved to
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
         * @param moveThisTarget       DOM object or HTML element ID you want to move
         * @param placeInsideTarget    DOM object or HTML element ID you want the element moved to
         */
        'moveInsideToTop': function (moveThisTarget, placeInsideTarget) {
            let moveThisDom = ctd(moveThisTarget);              // Get the DOM
            let placeInsideDom = ctd(placeInsideTarget);        // Get the DOM
            placeInsideDom.insertBefore(moveThisDom, placeInsideDom.firstChild);
        },


        /**
         * Removes an element from the DOM
         *
         * @param target {Object|string}    DOM object or HTML element ID
         */
        'remove': function (target) {
            let dom = ctd(target);                                  // Get the DOM
            dom.parentNode.removeChild(dom);
        },


        /**
         * Remove the specified class from a DOM element
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @param className     (string|array): string - The class to remove, Array - a list of classes to remove
         */
        'removeClass': function (target, className) {
            let dom = ctd(target);                                  // Get the DOM

            if(className.constructor === Array){                    // If it was passed an array of classes to remove
                for (let i = 0; i < className.length; i++) {        // Loop through each class name
                    dom.classList.remove(className[i]);          // Remove the class
                }
            }
        },


        /**
         * Remove the specified class from all elements inside a DOM
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @param selector {string}     The selector query/text to match
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
         * Resets a form, clears all field inputs
         *
         * @param target {Object|string}    DOM object or HTML element ID
         */
        'resetForm': function(target){
            let dom = ctd(target);                                  // Get the DOM
            this.getDom(dom).reset();
        },


        /**
         * Set/update a data-attribute value for a DOM element
         *
         * @param target {Object|string}    DOM object or HTML element ID
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
         * @param target {Object|string}    DOM object or HTML element ID
         */
        'show': function (target) {
            let dom = ctd(target);                                  // Get the DOM
            dom.classList.remove('hide');                           // Remove the 'hide' class
        },


        /**
         * Find and show all matching elements
         * - Remove a css .hide class from each matching element
         *
         * @param selector {string}  The selector syntax/query
         */
        'showAllBySelector': function(selector){
            let elem = document.querySelectorAll(selector);

            for (let i = 0; i < elem.length; i++) {             // Loop through each element
                elem[i].classList.remove('hide');               // Remove the 'hide' class
            }
        },


        /**
         * Replace the HTML inside the matching container
         *
         * @param target {Object|string}    DOM object or HTML element ID
         * @param htmlCode
         */
        'updateHtml': function (target, htmlCode) {
            let dom = ctd(target);                                  // Get the DOM
            dom.innerHTML = htmlCode;
        },


        /*
            Access validation commands
            @property validate
         */
        'validate': {

            /**
             * Check the data to see if it is valid JSON
             * @param data {string}
             * @returns {boolean}       True if Json; False otherwise
             */
            'isJson': function(data){
                try{
                    JSON.parse(data);
                }
                catch(e){
                    return false;
                }
                return true;
            }
        },
    };

    return L;
})();

let l = new pureLib();