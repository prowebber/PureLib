"use strict";

var pureLib = function () {
  function ctd(target) {
    if (target.nodeName) return target;

    if (typeof target === 'string' || target instanceof String) {
      var dom = document.getElementById(target);

      if (dom) {
        return dom;
      }
    }

    throw new Error('PureLib cannot find element on page');
  }

  function L() {}

  L.prototype = {
    'addClass': function addClass(target, className) {
      var dom = ctd(target);
      dom.classList.add(className);
    },
    'addClassToAll': function addClassToAll(target, selector, className) {
      var dom = ctd(target);
      var elem = dom.querySelectorAll(selector);

      for (var i = 0; i < elem.length; i++) {
        elem[i].classList.add(className);
      }
    },
    'closestEl': function closestEl(target, selector) {
      var dom = ctd(target);
      return dom.closest(selector);
    },
    'dataAttr': function dataAttr(target, dataAttribute) {
      var dom = ctd(target);
      var attribute_name = 'data-' + dataAttribute;
      return dom.getAttribute([attribute_name]);
    },
    'dropdownDataAttr': function dropdownDataAttr(target, dataAttribute) {
      var dom = ctd(target);
      var attribute_name = 'data-' + dataAttribute;
      var selected = dom.options[dom.selectedIndex];
      return selected.getAttribute(attribute_name);
    },
    'dropdownValue': function dropdownValue(target) {
      var dom = ctd(target);
      return dom.options[dom.selectedIndex].value;
    },
    'findBySelector': function findBySelector(parentTarget, selector) {
      var parentDom = ctd(parentTarget);
      return parentDom.querySelector(selector);
    },
    'findAllBySelector': function findAllBySelector(target, selector) {
      var dom = ctd(target);
      return dom.querySelectorAll(selector);
    },
    'getDistanceFromTop': function getDistanceFromTop(containerTarget) {
      var containerDom = ctd(containerTarget);
      var yPosition = 0;

      while (containerDom) {
        yPosition += containerDom.offsetTop - containerDom.scrollTop + containerDom.clientTop;
        containerDom = containerDom.offsetParent;
      }

      return yPosition;
    },
    'getDom': function getDom(target) {
      return ctd(target);
    },
    'getMouseCoordinates': function getMouseCoordinates(containerTarget, e) {
      var containerDom = ctd(containerTarget);
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
    },
    'getTextValue': function getTextValue(target) {
      var dom = ctd(target);
      return dom.textContent;
    },
    'hasClass': function hasClass(target, className) {
      var dom = ctd(target);
      return dom != null ? dom.classList.contains(className) : false;
    },
    'hide': function hide(target) {
      var dom = ctd(target);
      dom.classList.add('hide');
    },
    'moveAfter': function moveAfter(moveThisTarget, placeAfterTarget) {
      var moveThisDom = ctd(moveThisTarget);
      var placeAfterDom = ctd(placeAfterTarget);
      placeAfterDom.parentNode.insertBefore(moveThisDom, placeAfterDom.nextSibling);
    },
    'moveBefore': function moveBefore(moveThisTarget, placeBeforeTarget) {
      var moveThisDom = ctd(moveThisTarget);
      var placeBeforeDom = ctd(placeBeforeTarget);
      placeBeforeDom.parentNode.insertBefore(moveThisDom, placeBeforeDom);
    },
    'moveInsideToBottom': function moveInsideToBottom(moveThisTarget, placeInsideTarget) {
      var moveThisDom = ctd(moveThisTarget);
      var placeInsideDom = ctd(placeInsideTarget);
      placeInsideDom.appendChild(moveThisDom);
    },
    'moveInsideToTop': function moveInsideToTop(moveThisTarget, placeInsideTarget) {
      var moveThisDom = ctd(moveThisTarget);
      var placeInsideDom = ctd(placeInsideTarget);
      placeInsideDom.insertBefore(moveThisDom, placeInsideDom.firstChild);
    },
    'remove': function remove(target) {
      var dom = ctd(target);
      dom.parentNode.removeChild(dom);
    },
    'removeClass': function removeClass(target, className) {
      var dom = ctd(target);

      if (Array.isArray(className)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = className[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var cName = _step.value;
            dom.classList.remove(cName);
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
        dom.classList.remove(className);
      }
    },
    'removeClassFromAll': function removeClassFromAll(target, selector, className) {
      var dom = ctd(target);
      var elem = dom.querySelectorAll(selector);

      for (var i = 0; i < elem.length; i++) {
        elem[i].classList.remove(className);
      }
    },
    'setDataAttr': function setDataAttr(target, dataAttribute, value) {
      var dom = ctd(target);
      dom.setAttribute('data-' + dataAttribute, value);
    },
    'show': function show(target) {
      var dom = ctd(target);
      dom.classList.remove('hide');
    },
    'updateHtml': function updateHtml(target, htmlCode) {
      var dom = ctd(target);
      dom.innerHTML = htmlCode;
    }
  };
  return L;
}();

var l = new pureLib();
