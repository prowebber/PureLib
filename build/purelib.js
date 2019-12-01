var steven = (function (exports) {
    'use strict';

    function addClass(dom, className) {
      dom.classList.add(className);
    }
    function addClassToAll(dom, selector, className) {
      var elem = dom.querySelectorAll(selector);

      for (var i = 0; i < elem.length; i++) {
        elem[i].classList.add(className);
      }
    }
    function show(dom) {
      dom.classList.remove('hide');
    }
    function closestEl(dom, selector) {
      return dom.closest(selector);
    }
    function data(dom, dataAttribute) {
      var attribute_name = 'data-' + dataAttribute;
      return dom.getAttribute([attribute_name]);
    }
    function dropdownDataAttribute(dom, dataAttribute) {
      var attribute_name = 'data-' + dataAttribute;
      var selected = dom.options[dom.selectedIndex];
      return selected.getAttribute(attribute_name);
    }
    function dropdownValue(dom) {
      return dom.options[dom.selectedIndex].value;
    }
    function findBySelector(parentDom, selector) {
      return parentDom.querySelector(selector);
    }
    function findAllBySelector(dom, selector) {
      return dom.querySelectorAll(selector);
    }
    function getDistanceFromTop(containerDom) {
      var yPosition = 0;

      while (containerDom) {
        yPosition += containerDom.offsetTop - containerDom.scrollTop + containerDom.clientTop;
        containerDom = containerDom.offsetParent;
      }

      return yPosition;
    }
    function getMouseCoordinates(containerDom, e) {
      var client = containerDom.getBoundingClientRect();
      var xPosition = 0;
      var yPosition = 0;
      var coordinates = {
        'container': {
          'top': containerDom.offsetTop,
          'left': containerDom.offsetLeft
        },
        'doc': {
          'top': e.pageY,
          'left': e.pageX
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
      };

      while (containerDom) {
        xPosition += containerDom.offsetLeft - containerDom.scrollLeft + containerDom.clientLeft;
        yPosition += containerDom.offsetTop - containerDom.scrollTop + containerDom.clientTop;
        containerDom = containerDom.offsetParent;
      }

      coordinates.computed.top = yPosition;
      coordinates.computed.left = xPosition;
      return coordinates;
    }
    function getTextValue(dom) {
      return dom.textContent;
    }

    var byDom = /*#__PURE__*/Object.freeze({
        __proto__: null,
        addClass: addClass,
        addClassToAll: addClassToAll,
        show: show,
        closestEl: closestEl,
        data: data,
        dropdownDataAttribute: dropdownDataAttribute,
        dropdownValue: dropdownValue,
        findBySelector: findBySelector,
        findAllBySelector: findAllBySelector,
        getDistanceFromTop: getDistanceFromTop,
        getMouseCoordinates: getMouseCoordinates,
        getTextValue: getTextValue
    });

    function test() {
      console.log("Test was run");
    }
    function two() {
      console.log("Function two");
    }

    exports.dom = byDom;
    exports.test = test;
    exports.two = two;

    return exports;

}({}));
