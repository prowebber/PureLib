"use strict";

var pureLib = function () {
  /**
   * Doc References: https://devdocs.io/jsdoc/tags-param
   *
   * !! Important - Do not place this below the "use strict" or it will break JetBrains auto-complete
   */
  function ctd(target) {
    // If this is a DOM object, return the DOM
    if (target.nodeName) return target; // If this is a string reference

    if (typeof target === 'string' || target instanceof String) {
      var dom = document.getElementById(target); // See if the string is an element's HTML ID

      if (dom) {
        // If the string is an element's HTML ID; return the DOM
        return dom;
      }
    } // If the target cannot be found


    throw new Error('PureLib cannot find element on page');
  }

  function L() {} // Create an empty function

  /* Specify the methods */


  L.prototype = {
    /**
     * Add the specified CSS class to the specified DOM element
     *
     * @param target        DOM object or HTML element ID
     * @param className     The class name to add
     */
    'addClass': function addClass(target, className) {
      var dom = ctd(target);
      dom.classList.add(className);
    },

    /**
     * Add the specified class to all elements inside a DOM
     *
     * @param target        DOM object or HTML element ID
     * @param selector      The selector text to match
     * @param className     The class to add
     */
    'addClassToAll': function addClassToAll(target, selector, className) {
      var dom = ctd(target); // Get the DOM

      var elem = dom.querySelectorAll(selector); // Find all the matching elements inside the dom

      for (var i = 0; i < elem.length; i++) {
        // Loop through each element
        elem[i].classList.add(className); // Add the class
      }
    },

    /**
     * Finds the closest element by the specified selector and returns the element's DOM
     *  - Searches up the DOM tree
     *
     * @param target        DOM object or HTML element ID
     * @param selector      e.g. images, .classname, #id
     * @returns {*}         The DOM of the matched element
     */
    'closestEl': function closestEl(target, selector) {
      var dom = ctd(target); // Get the DOM

      return dom.closest(selector);
    },

    /**
     * Get the data-attribute value for the specified DOM
     *
     * @param target        DOM object or HTML element ID
     * @param dataAttribute                     The data attribute to get the value of
     * @returns {(string | null) | string}      The data value
     */
    'dataAttr': function dataAttr(target, dataAttribute) {
      var dom = ctd(target); // Get the DOM

      var attribute_name = 'data-' + dataAttribute;
      return dom.getAttribute([attribute_name]);
    },

    /**
     * Get the specified data attribute for the selection option in an HTML dropdown menu
     *
     * @param target                DOM object, HTML
     * @param dataAttribute         The name of the data attribute
     * @returns {string | null}     The value of the data attribute
     */
    'dropdownDataAttr': function dropdownDataAttr(target, dataAttribute) {
      var dom = ctd(target); // Get the DOM

      var attribute_name = 'data-' + dataAttribute;
      var selected = dom.options[dom.selectedIndex]; // Find the selected item in the dropdown

      return selected.getAttribute(attribute_name); // Return the specified data attribute
    },

    /**
     * Get the text value for the selected option in an HTML dropdown menu
     *
     * @param id        The ID of the dropdown menu element
     * @returns {*}     The text value
     */
    'dropdownTextValue': function dropdownTextValue(target) {
      var dom = ctd(target); // Get the DOM

      var selected = dom.options[dom.selectedIndex]; // Find the selected item in the dropdown

      return selected.text;
    },

    /**
     * Get the value of the currently selected option in an HTML dropdown menu
     *
     * @param target        DOM object or HTML element ID
     * @returns {string}        The value of the selected element
     */
    'dropdownValue': function dropdownValue(target) {
      var dom = ctd(target); // Get the DOM

      return dom.options[dom.selectedIndex].value;
    },

    /**
     * Return the DOM of the element matched within the parent (equivalent of jQuery find)
     *
     * @param parentDom         The element DOM to start with
     * @param selector          The class/tag/ID to find
     * @returns {*}
     */
    'findBySelector': function findBySelector(parentTarget, selector) {
      var parentDom = ctd(parentTarget); // Get the DOM

      return parentDom.querySelector(selector);
    },

    /**
     * Return the DOM of all elements matched within the parent (equivalent of jQuery find)
     *
     * @param target        DOM object or HTML element ID
     * @param selector      The selector text to match
     */
    'findAllBySelector': function findAllBySelector(target, selector) {
      var dom = ctd(target); // Get the DOM

      return dom.querySelectorAll(selector); // Find all the matching elements inside the dom
    },

    /**
     * Get an element's distance from the top of the document
     *  - Iterates through all elements above the DOM to get an accurate value in px
     *
     * @param containerDom          The container to measure
     * @returns {number}            The distance from top
     */
    'getDistanceFromTop': function getDistanceFromTop(containerTarget) {
      var containerDom = ctd(containerTarget);
      var yPosition = 0; // Loop through the parent nodes until you reach the top of the page (since the offset top will stop a parents with position relative/absolute)

      while (containerDom) {
        yPosition += containerDom.offsetTop - containerDom.scrollTop + containerDom.clientTop;
        containerDom = containerDom.offsetParent;
      }

      return yPosition;
    },

    /**
     * Return the DOM of an element
     * @param target
     * @returns {*|HTMLElement|undefined}
     */
    'getDom': function getDom(target) {
      return ctd(target);
    },

    /**
     * Get the value of an input
     *
     * @param target	    The ID of the input element
     * @returns {*}			The value of the input
     */
    'getInputValue': function getInputValue(target) {
      var dom = ctd(target); // Get the DOM

      return dom.value;
    },

    /**
     * Returns the coordinates (in px) of the user's mouse on the screen relative to the container they are closest to
     *
     * @param containerDom                          The DOM of the container
     * @param e                                     JavaScript event data
     * @returns {{top: number, left: number}}
     */
    'getMouseCoordinates': function getMouseCoordinates(containerTarget, e) {
      var containerDom = ctd(containerTarget);
      var client = containerDom.getBoundingClientRect();
      var xPosition = 0;
      var yPosition = 0;
      var coordinates = {
        'container': {
          'top': containerDom.offsetTop,
          // The distance of the nearest container from the top of the page in px
          'left': containerDom.offsetLeft // The distance of the nearest container from the left of the page in px

        },
        'doc': {
          'top': e.pageY,
          // The distance of the user's cursor from the top of the page in px
          'left': e.pageX // The distance of the user's cursor from the left of the page in px

        },
        'client': {
          'top': client.top,
          'left': client.left,
          'height': client.height
        },
        'window': {
          'top': window.pageYOffset,
          'left': window.pageXOffset
        },
        'computed': {
          'top': yPosition,
          'left': xPosition
        }
      }; // Loop through the parent nodes until you reach the top of the page (since the offset top will stop a parents with position relative/absolute)

      while (containerDom) {
        xPosition += containerDom.offsetLeft - containerDom.scrollLeft + containerDom.clientLeft;
        yPosition += containerDom.offsetTop - containerDom.scrollTop + containerDom.clientTop;
        containerDom = containerDom.offsetParent;
      }

      coordinates.computed.top = yPosition;
      coordinates.computed.left = xPosition;
      return coordinates;
    },

    /**
     * Gets the text value of an element (e.g. <div>Test</div> would return 'test')
     *
     * @param target            DOM object or HTML element ID
     * @returns {string}        The text value inside that element
     */
    'getTextValue': function getTextValue(target) {
      var dom = ctd(target); // Get the DOM

      return dom.textContent;
    },

    /**
     * Determine if a class exists
     *
     * @param target            DOM object or HTML element ID
     * @param className         The class to search for
     * @returns {boolean}       True if class exists; false otherwise
     */
    'hasClass': function hasClass(target, className) {
      var dom = ctd(target); // Get the DOM
      // If the DOM exists, return a bool of the class existence; otherwise return false;

      return dom != null ? dom.classList.contains(className) : false;
    },

    /**
     * Hide an element from the screen
     *
     * @param target        DOM object or HTML element ID
     */
    'hide': function hide(target) {
      var dom = ctd(target); // Get the DOM

      dom.classList.add('hide'); // Add the 'hide' class
    },

    /**
     * Find and hide all matching elements
     * - Add a css .hide class to each matching element
     *
     * @param selector {string}  The selector syntax/query
     */
    'hideAllBySelector': function hideAllBySelector(selector) {
      var elem = document.querySelectorAll(selector);

      for (var i = 0; i < elem.length; i++) {
        // Loop through each element
        elem[i].classList.add('hide'); // Add the 'hide' class
      }
    },

    /**
     * Move an element after the end tag of another element
     *
     * @param moveThisDom           The element you want to move
     * @param placeAfterDom         Where you want to place the new element
     */
    'moveAfter': function moveAfter(moveThisTarget, placeAfterTarget) {
      var moveThisDom = ctd(moveThisTarget); // Get the DOM

      var placeAfterDom = ctd(placeAfterTarget); // Get the DOM

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
    'moveBefore': function moveBefore(moveThisTarget, placeBeforeTarget) {
      var moveThisDom = ctd(moveThisTarget); // Get the DOM

      var placeBeforeDom = ctd(placeBeforeTarget); // Get the DOM

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
    'moveInsideToBottom': function moveInsideToBottom(moveThisTarget, placeInsideTarget) {
      var moveThisDom = ctd(moveThisTarget); // Get the DOM

      var placeInsideDom = ctd(placeInsideTarget); // Get the DOM

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
    'moveInsideToTop': function moveInsideToTop(moveThisTarget, placeInsideTarget) {
      var moveThisDom = ctd(moveThisTarget); // Get the DOM

      var placeInsideDom = ctd(placeInsideTarget); // Get the DOM

      placeInsideDom.insertBefore(moveThisDom, placeInsideDom.firstChild);
    },

    /**
     * Removes an element from the DOM
     *
     * @param target        DOM object or HTML element ID
     */
    'remove': function remove(target) {
      var dom = ctd(target); // Get the DOM

      dom.parentNode.removeChild(dom);
    },

    /**
     * Remove the specified class from a DOM element
     *
     * @param target        DOM object or HTML element ID
     * @param className     (string|array): string - The class to remove, Array - a list of classes to remove
     */
    'removeClass': function removeClass(target, className) {
      var dom = ctd(target); // Get the DOM

      if (Array.isArray(className)) {
        // If it was passed an array of classes to remove
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = className[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var cName = _step.value;
            // Iterate through each item
            dom.classList.remove(cName); // Remove the class
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        // If a string
        dom.classList.remove(className);
      }
    },

    /**
     * Remove the specified class from all elements inside a DOM
     *
     * @param target        DOM object or HTML element ID
     * @param selector      The selector text to match
     * @param className     The class to remove
     */
    'removeClassFromAll': function removeClassFromAll(target, selector, className) {
      var dom = ctd(target); // Get the DOM

      var elem = dom.querySelectorAll(selector); // Find all the matching elements inside the dom

      for (var i = 0; i < elem.length; i++) {
        // Loop through each element
        elem[i].classList.remove(className); // Remove the class
      }
    },

    /**
     * Resets a form, clears all field inputs
     *
     * @param id        The HTML tag ID of the form
     */
    'resetForm': function resetForm(target) {
      var dom = ctd(target); // Get the DOM

      this.getDom(dom).reset();
    },

    /**
     * Set/update a data-attribute value for a DOM element
     *
     * @param target            DOM object or HTML element ID
     * @param dataAttribute     The data attribute name
     * @param value             The value to assign
     */
    'setDataAttr': function setDataAttr(target, dataAttribute, value) {
      var dom = ctd(target); // Get the DOM

      dom.setAttribute('data-' + dataAttribute, value);
    },

    /**
     * Show an element (if it was previously hidden)
     *
     * @param target        DOM object or HTML element ID
     */
    'show': function show(target) {
      var dom = ctd(target); // Get the DOM

      dom.classList.remove('hide'); // Remove the 'hide' class
    },

    /**
     * Find and show all matching elements
     * - Remove a css .hide class from each matching element
     *
     * @param selector {string}  The selector syntax/query
     */
    'showAllBySelector': function showAllBySelector(selector) {
      var elem = document.querySelectorAll(selector);

      for (var i = 0; i < elem.length; i++) {
        // Loop through each element
        elem[i].classList.remove('hide'); // Remove the 'hide' class
      }
    },

    /**
     * Replace the HTML inside the matching container
     *
     * @param target        DOM object or HTML element ID
     * @param htmlCode
     */
    'updateHtml': function updateHtml(target, htmlCode) {
      var dom = ctd(target); // Get the DOM

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
      'isJson': function isJson(data) {
        try {
          JSON.parse(data);
        } catch (e) {
          return false;
        }

        return true;
      }
    }
  };
  return L;
}();

var l = new pureLib();
