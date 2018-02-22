webpackHotUpdate(0,{

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _tweetList = __webpack_require__(28);

var _tweetList2 = _interopRequireDefault(_tweetList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this;
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var tweetlist = _tweetList2.default.map(function (t, id) {
        return _react2.default.createElement(
          'div',
          { 'data-id': '{{id}}' },
          t.author,
          ', ',
          t.content
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        tweetlist
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tweets = [{ author: 'abhi', content: 'test first tweet' }, { author: 'bobby', content: 'test bobby first tweet' }, { author: 'suri', content: 'test suri first tweet' }, { author: 'nihar', content: 'test nihar first tweet' }, { author: 'tim', content: 'test tim first tweet' }, { author: 'barry', content: 'test barry first tweet' }];

exports.default = tweets;

/***/ })

})