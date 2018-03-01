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

var _Tweet = __webpack_require__(29);

var _Tweet2 = _interopRequireDefault(_Tweet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { tweets: _tweetList2.default };
    return _this;
  }

  _createClass(App, [{
    key: 'deleteParent',
    value: function deleteParent(id) {
      var newTweets = this.state.tweets.filter(function (x) {
        return x.id !== id;
      });
      this.setState({
        tweets: newTweets
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tweetlist = this.state.tweets.map(function (t, id) {
        return _react2.default.createElement(_Tweet2.default, { key: id, deleteParent: _this2.deleteParent.bind(_this2), content: t.content, author: t.author });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Total Tweets = ',
          this.state.tweets.length
        ),
        tweetlist
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ })

})