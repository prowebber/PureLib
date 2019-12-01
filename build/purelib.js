var steven = (function (exports) {
    'use strict';

    function addClass(dom, className) {
      dom.classList.add(className);
    }
    function show(dom) {
      dom.classList.remove('hide');
    }
    function holda() {
      console.log("at holda");
    }

    var byDom = /*#__PURE__*/Object.freeze({
        __proto__: null,
        addClass: addClass,
        show: show,
        holda: holda
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
