var l = (function (exports) {
    'use strict';

    function ctd(target) {
      console.log('---');
      console.dir(target);

      if (target.nodeName) {
        console.log("At Nodename");
        return target;
      }

      if (typeof target === 'string' || target instanceof String) {
        var dom = document.getElementById(target);

        if (dom) {
          console.log("At String");
          return dom;
        }
      }

      throw new Error('PureLib cannot find element on page');
    }

    function addClass(target, className) {
      var dom = ctd(target);
      dom.classList.add(className);
    }
    function addClassToAll(target, selector, className) {
      var dom = ctd(target);
      var elem = dom.querySelectorAll(selector);

      for (var i = 0; i < elem.length; i++) {
        elem[i].classList.add(className);
      }
    }
    function closestEl(target, selector) {
      var dom = ctd(target);
      return dom.closest(selector);
    }
    function dataAttr(target, dataAttribute) {
      var dom = ctd(target);
      var attribute_name = 'data-' + dataAttribute;
      return dom.getAttribute([attribute_name]);
    }
    function dropdownDataAttr(target, dataAttribute) {
      var dom = ctd(target);
      var attribute_name = 'data-' + dataAttribute;
      var selected = dom.options[dom.selectedIndex];
      return selected.getAttribute(attribute_name);
    }
    function dropdownValue(target) {
      var dom = ctd(target);
      return dom.options[dom.selectedIndex].value;
    }
    function findBySelector(target, selector) {
      var parentDom = ctd(target);
      return parentDom.querySelector(selector);
    }
    function findAllBySelector(target, selector) {
      var dom = ctd(target);
      return dom.querySelectorAll(selector);
    }
    function getDistanceFromTop(targetContainer) {
      var containerDom = ctd(targetContainer);
      var yPosition = 0;

      while (containerDom) {
        yPosition += containerDom.offsetTop - containerDom.scrollTop + containerDom.clientTop;
        containerDom = containerDom.offsetParent;
      }

      return yPosition;
    }
    function getDom(target) {
      var dom = ctd(target);
      return dom;
    }
    function getMouseCoordinates(targetContainer, e) {
      var containerDom = ctd(targetContainer);
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
    function getTextValue(target) {
      var dom = ctd(target);
      return dom.textContent;
    }
    function hasClass(target, className) {
      var dom = ctd(target);
      return dom.classList.contains(className);
    }
    function hide(target) {
      var dom = ctd(target);
      dom.classList.add('hide');
    }
    function moveAfter(moveThisTarget, placeAfterTarget) {
      var moveThisDom = ctd(moveThisTarget);
      var placeAfterDom = ctd(placeAfterTarget);
      placeAfterDom.parentNode.insertBefore(moveThisDom, placeAfterDom.nextSibling);
    }
    function moveBefore(moveThisTarget, placeBeforeTarget) {
      var moveThisDom = ctd(moveThisTarget);
      var placeBeforeDom = ctd(placeBeforeTarget);
      placeBeforeDom.parentNode.insertBefore(moveThisDom, placeBeforeDom);
    }
    function moveInsideToBottom(moveThisTarget, placeInsideTarget) {
      var moveThisDom = ctd(moveThisTarget);
      var placeInsideDom = ctd(placeInsideTarget);
      placeInsideDom.appendChild(moveThisDom);
    }
    function moveInsideToTop(moveThisTarget, placeInsideTarget) {
      var moveThisDom = ctd(moveThisTarget);
      var placeInsideDom = ctd(placeInsideTarget);
      placeInsideDom.insertBefore(moveThisDom, placeInsideDom.firstChild);
    }
    function remove(target) {
      var dom = ctd(target);
      dom.parentNode.removeChild(dom);
    }
    function removeClass(target, className) {
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
    }
    function removeClassFromAll(target, selector, className) {
      var dom = ctd(target);
      var elem = dom.querySelectorAll(selector);

      for (var i = 0; i < elem.length; i++) {
        elem[i].classList.remove(className);
      }
    }
    function setDataAttr(target, dataAttribute, value) {
      var dom = ctd(target);
      var attribute_name = 'data-' + dataAttribute;
      dom.setAttribute(attribute_name, value);
    }
    function show(target) {
      var dom = ctd(target);
      dom.classList.remove('hide');
    }
    function updateHtml(target, htmlCode) {
      var dom = ctd(target);
      dom.innerHTML = htmlCode;
    }

    exports.addClass = addClass;
    exports.addClassToAll = addClassToAll;
    exports.closestEl = closestEl;
    exports.dataAttr = dataAttr;
    exports.dropdownDataAttr = dropdownDataAttr;
    exports.dropdownValue = dropdownValue;
    exports.findAllBySelector = findAllBySelector;
    exports.findBySelector = findBySelector;
    exports.getDistanceFromTop = getDistanceFromTop;
    exports.getDom = getDom;
    exports.getMouseCoordinates = getMouseCoordinates;
    exports.getTextValue = getTextValue;
    exports.hasClass = hasClass;
    exports.hide = hide;
    exports.moveAfter = moveAfter;
    exports.moveBefore = moveBefore;
    exports.moveInsideToBottom = moveInsideToBottom;
    exports.moveInsideToTop = moveInsideToTop;
    exports.remove = remove;
    exports.removeClass = removeClass;
    exports.removeClassFromAll = removeClassFromAll;
    exports.setDataAttr = setDataAttr;
    exports.show = show;
    exports.updateHtml = updateHtml;

    return exports;

}({}));
