import {ctd} from './common';
import {val} from './value/index';
import {valid} from "./validate";


// Create an empty function to add modules to
export default function P(){
}


/**
 * Doc References: https://devdocs.io/jsdoc/tags-param
 * Version: 1.1
 */

P.prototype = {
    /**
     * Add the specified CSS class to the target Element
     *
     * @param target {Element|string}   Element or HTML element ID
     * @param className {String}        The class name to add (do not use leading periods '.' in class names)
     */
    'addClass': function(target, className){
        let dom = ctd(target);
        dom.classList.add(className);
    },


    /**
     * Add the specified CSS class to all Elements that match the selector
     *
     * @param target {Element}      Element or HTML element ID
     * @param selector {string}     The selector query/text to match
     * @param className {string}    The class name to add (do not use leading periods '.' in class names)
     */
    'addClassToAll': function(target, selector, className){
        let dom = ctd(target);                                  // Get the DOM
        let elem = dom.querySelectorAll(selector);              // Find all the matching elements inside the dom

        for (let i = 0; i < elem.length; i++) {                 // Loop through each element
            elem[i].classList.add(className);                   // Add the class
        }
    },

    /**
     * Starting at the target, traverse up the parents until it finds the matching Element
     *  - Searches up the DOM tree
     *  - Returns matching element
     *
     * @param target {Element|String}   Element or HTML element ID
     * @param selector {String}         The selector query/text to match
     * @returns {Object}                The DOM of the matched element
     */
    'closestEl': function (target, selector) {
        let dom = ctd(target, true);                                  // Get the DOM

        return (dom) ? dom.closest(selector) : false;
    },

    /**
     * Get the CSS property value for the target Element
     *
     * @param target {Object|string}    DOM object or HTML element ID
     * @param cssPropName {string}      The CSS property (e.g. 'display', 'background-color', etc.)
     */
    'cssValue': function(target, cssPropName){
        let dom = ctd(target);                                  // Get the DOM
        return window.getComputedStyle(dom).getPropertyValue(cssPropName);
    },

    /**
     * Get a data-attribute value from the target Element
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
     * Get a data-attribute value for the currently selected option in an HTML dropdown/select
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
     * Get the text value for the currently selected option in an HTML dropdown/select
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
     * Get the field value of the currently selected option in an HTML dropdown/select
     *
     * @param target {Object|string}    DOM object or HTML element ID
     * @returns {string}                The value of the selected element
     */
    'dropdownValue': function (target) {
        let dom = ctd(target);                                  // Get the DOM
        return dom.options[dom.selectedIndex].value;
    },

    /**
     * Traverse through children and return the first Element that matches the selector
     * - Traverses through child nodes
     * - Equivalent of jQuery find
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
     * Traverse through children and return all Elements that matches the selector
     * - Traverses through child nodes
     * - Equivalent of jQuery find
     *
     * @param parentTarget {Object|string}      DOM object or HTML element ID to search within
     * @param selector {string}                 The selector query/text to match
     * @returns {NodeList}                      NodeList containing matching Element nodes
     */
    'findAllBySelector': function (parentTarget, selector) {
        let dom = ctd(parentTarget);                            // Get the DOM
        return dom.querySelectorAll(selector);                  // Find all the matching elements inside the dom
    },

    /**
     * Get the distance in pixels from the target to the top of the document
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
     * Return the DOM Object of an element
     * @param target {Object|string}        DOM object or HTML element ID
     * @returns {*|HTMLElement|undefined}
     */
    'getDom': function(target){
        return ctd(target, true);
    },

    /**
     * Return the value of an HTML input field
     *
     * @param target {Object|string}    DOM object or HTML element ID
     * @returns {*}			            The value of the input
     */
    'getInputValue': function(target){
        let dom = ctd(target);          // Get the DOM
        return dom.value;
    },

    /**
     * Return the 'key code' for pressed keys/keyboard actions
     *
     * @param e {Object}  JavaScript event
     * @returns {string}  The keycode
     */
    'getKeyCode': function(e){
        let keyCode = null;
        if(e.key !== undefined) keyCode = e.key;
        else if(e.code !== undefined) keyCode = e.code;

        return keyCode;
    },

    /**
     * Gets the text value of an Element (e.g. <div>Test</div> would return 'test')
     *
     * @param target {Object|string}    DOM object or HTML element ID
     * @returns {string}                The text value inside that element
     */
    'getTextValue': function (target) {
        let dom = ctd(target);                                  // Get the DOM
        return dom.textContent;
    },


    /**
     * Return True if the specified CSS class exists in the target Element
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
     * Find and hide all elements that match the selector
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
     * Returns True if a Object, Array, or String are empty
     *
     * @param jsObject {Object|Array|String}   The JS Object you want to test
     * @returns {boolean}                       True if empty or does not exist; False if not empty
     */
    'isEmpty': function(jsObject){
        // If the jsObject is not empty OR if it exists
        if(!!jsObject){                                         // If the object exists
            if(jsObject.constructor === Array){                 // If it is an Array
                return !! jsObject.length;                      // Return true if empty
            }
            else if(jsObject.constructor === Object){           // If it is an Object
                return Object.keys(jsObject).length === 0;      // Return True if empty
            }
            else if(typeof jsObject === 'string'){
                return (!jsObject || 0 === jsObject.length);    // Return true if there is not a string or if the string has zero length
            }
        }
        return true;                                           // Default
    },


    /**
     * Move an Element after the closing HTML tag of another Element
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
     * Move an Element before the opening HTML tag of another Element
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
     * Move an Element before the closing HTML tag of another Element
     * - AKA: append
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
     * Move an Element after the opening HTML tag of another Element
     * - AKA: prepend
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
     * Removes the target Element from the DOM
     *
     * @param target {Object|string}    DOM object or HTML element ID
     */
    'remove': function (target) {
        let dom = ctd(target);                                  // Get the DOM
        dom.parentNode.removeChild(dom);
    },


    /**
     * Remove the specified CSS class(es) from the target Element
     *
     * @param target {Element|String}       Element or HTML element ID
     * @param className {String|Array}      String - The class to remove; Array - a list of classes to remove
     */
    'removeClass': function (target, className) {
        let dom = ctd(target);                                  // Get the DOM

        if(className.constructor === Array){                    // If it was passed an array of classes to remove
            dom.classList.remove(...className);                 // Remove all classes using a spread operator
        }
        else{
            dom.classList.remove(className);                    // Remove the class
        }
    },


    /**
     * Remove the specified CSS class from all Elements that match a selector
     *
     * @param target {Object|string}        DOM object or HTML element ID
     * @param selector {string}             The selector query/text to match
     * @param className {String|Array}      String - The class to remove; Array - a list of classes to remove
     */
    'removeClassFromAll': function (target, selector, className) {
        let dom = ctd(target);                                  // Get the DOM
        let elem = dom.querySelectorAll(selector);              // Find all the matching elements inside the dom

        for (let i = 0; i < elem.length; i++) {                 // Loop through each element
            this.removeClass(elem[i], className);               // Remove the class
        }
    },


    /**
     * Resets the specified HTML form, clears all field inputs
     *
     * @param target {Object|string}    DOM object or HTML element ID
     */
    'resetForm': function(target){
        let dom = ctd(target);                                  // Get the DOM
        this.getDom(dom).reset();
    },


    /**
     * Set/update a data-attribute value for the specified target Element
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
     * Show the target Element (if it was previously hidden)
     *
     * @param target {Object|string}    DOM object or HTML element ID
     */
    'show': function (target) {
        let dom = ctd(target);                                  // Get the DOM
        dom.classList.remove('hide');                           // Remove the 'hide' class
    },


    /**
     * Find and show all Elements that match the selector
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
     * Replace the HTML inside the target Element
     *
     * @param target {Object|string}    DOM object or HTML element ID
     * @param htmlCode
     */
    'updateHtml': function (target, htmlCode) {
        let dom = ctd(target);                                  // Get the DOM
        dom.innerHTML = htmlCode;
    },

    'val': val,                 // Value related methods
    'validate': valid,          // Validation related methods
};