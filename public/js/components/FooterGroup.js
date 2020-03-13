define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    template: '<div class="footer">test footer</div>',

    beforeCreate() {
      loadCss({
        content: ''
      });
    },

    data() {
      return {};
    }

  };
  _exports.default = _default;
});