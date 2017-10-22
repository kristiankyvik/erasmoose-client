'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _reactApollo = require('react-apollo');

var _ErrorMessage = require('./ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/patrickvonplaten/unirank/app-client/components/UniList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allUnis($first: Int!, $skip: Int!) {\n    allUnis(first: $first, skip: $skip) {\n      _id\n      name\n      votes\n      url\n      website\n      country\n    },\n    _allUnisMeta {\n      count\n    }\n  }\n'], ['\n  query allUnis($first: Int!, $skip: Int!) {\n    allUnis(first: $first, skip: $skip) {\n      _id\n      name\n      votes\n      url\n      website\n      country\n    },\n    _allUnisMeta {\n      count\n    }\n  }\n']);

var POSTS_PER_PAGE = 32;

function UniList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      allUnis = _ref$data.allUnis,
      _allUnisMeta = _ref$data._allUnisMeta,
      loadMorePosts = _ref.loadMorePosts;

  if (error) return _react2.default.createElement(_ErrorMessage2.default, { message: 'Error loading entries.', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  });
  if (allUnis && allUnis.length) {
    return _react2.default.createElement(Unis, { _allUnisMeta: _allUnisMeta, allUnis: allUnis, loading: loading, loadMorePosts: loadMorePosts, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    });
  }
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Loading');
}

var Unis = function (_React$Component) {
  (0, _inherits3.default)(Unis, _React$Component);

  function Unis(props) {
    (0, _classCallCheck3.default)(this, Unis);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Unis.__proto__ || (0, _getPrototypeOf2.default)(Unis)).call(this, props));

    _this._handleCardClick = function (e, index) {
      _this.setState({
        showModal: true,
        index: index
      });
    };

    _this._handleModalLeftClick = function (e) {
      var index = _this.state.index <= 0 ? allUnis.length - 1 : _this.state.index - 1;
      _this.setState({ index: index });
    };

    _this._handleModalRightClick = function (e) {
      var index = _this.state.index >= allUnis.length ? 0 : _this.state.index + 1;
      _this.setState({ index: index });
    };

    _this._handleModalCloseClick = function (e) {
      _this.setState({ showModal: false });
    };

    _this._handleGlobalKeyPress = function (e) {
      if (!_this.state.showModal) return;
      if (e.keyCode === 37) {
        _this._handleModalLeftClick();
      } else if (e.keyCode === 39) {
        _this._handleModalRightClick();
      }
    };

    _this.searchInput = null;
    _this.modal = null;
    _this.state = {
      data: [],
      allData: [],
      showModal: false,
      index: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Unis, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener("keydown", this._handleGlobalKeyPress, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this._handleGlobalKeyPress, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          allUnis = _props.allUnis,
          _allUnisMeta = _props._allUnisMeta,
          loading = _props.loading,
          loadMorePosts = _props.loadMorePosts;

      var areMorePosts = allUnis.length < _allUnisMeta.count;
      return _react2.default.createElement('section', {
        className: 'jsx-747285922' + ' ' + 'tc',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-747285922' + ' ' + 'flex justify-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', { style: { width: 1080 }, className: 'jsx-747285922' + ' ' + 'flex flex-wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, allUnis.map(function (uni, index) {
        return _react2.default.createElement(_Card2.default, {
          key: uni._id,
          uni: uni,
          _handleCardClick: function _handleCardClick(evt) {
            return _this2._handleCardClick(evt, index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        });
      }))), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
          return loadMorePosts();
        }, className: 'jsx-747285922' + ' ' + 'ur-btn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', _react2.default.createElement(_Modal2.default, {
        ref: function ref(el) {
          _this2.modal = el;
        },
        showModal: this.state.showModal,
        uni: allUnis[this.state.index],
        _handleModalRightClick: this._handleModalRightClick,
        _handleModalLeftClick: this._handleModalLeftClick,
        _handleModalCloseClick: this._handleModalCloseClick,
        _handleGlobalClick: this._handleGlobalClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '747285922',
        css: 'section.jsx-747285922{padding-bottom:20px;}li.jsx-747285922{display:block;margin-bottom:10px;}div.jsx-747285922{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-747285922{font-size:14px;margin-right:10px;text-decoration:none;padding-bottom:0;border:0;}span.jsx-747285922{font-size:14px;margin-right:5px;}ul.jsx-747285922{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Rm9CLEFBR2lDLEFBR04sQUFJSyxBQUlKLEFBT0EsQUFJTixTQUNDLEtBbkJTLENBUUQsQUFPRCxJQUtuQixDQXZCQSxZQW1CQSxDQWZBLEFBUXVCLHFCQUNKLGlCQUNSLFNBQ1gsYUFSZSwwRUFDZiIsImZpbGUiOiJjb21wb25lbnRzL1VuaUxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhdHJpY2t2b25wbGF0ZW4vdW5pcmFuay9hcHAtY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAzMjtcblxuZnVuY3Rpb24gVW5pTGlzdCAoeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBhbGxVbmlzLCBfYWxsVW5pc01ldGEgfSwgbG9hZE1vcmVQb3N0cyB9KSB7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBlbnRyaWVzLicgLz5cbiAgaWYgKGFsbFVuaXMgJiYgYWxsVW5pcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFVuaXMgX2FsbFVuaXNNZXRhPXtfYWxsVW5pc01ldGF9IGFsbFVuaXM9e2FsbFVuaXN9IGxvYWRpbmc9e2xvYWRpbmd9IGxvYWRNb3JlUG9zdHM9e2xvYWRNb3JlUG9zdHN9IC8+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY2xhc3MgVW5pcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2VhcmNoSW5wdXQgPSBudWxsO1xuICAgIHRoaXMubW9kYWwgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGFsbERhdGE6IFtdLFxuICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgIGluZGV4OiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUdsb2JhbEtleVByZXNzLCBmYWxzZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVHbG9iYWxLZXlQcmVzcywgZmFsc2UpO1xuICB9XG5cbiAgX2hhbmRsZUNhcmRDbGljayA9IChlLCBpbmRleCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIHNob3dNb2RhbDogdHJ1ZSxcbiAgICAgIGluZGV4XG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlTW9kYWxMZWZ0Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5pbmRleCA8PSAwID8gYWxsVW5pcy5sZW5ndGggLSAxIDogdGhpcy5zdGF0ZS5pbmRleCAtIDE7ICAgICBcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGluZGV4IH0pO1xuICB9XG5cbiAgX2hhbmRsZU1vZGFsUmlnaHRDbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4ID49IGFsbFVuaXMubGVuZ3RoID8gMCA6IHRoaXMuc3RhdGUuaW5kZXggKyAxOyAgICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBpbmRleCB9KTtcbiAgfVxuXG4gIF9oYW5kbGVNb2RhbENsb3NlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgX2hhbmRsZUdsb2JhbEtleVByZXNzID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd01vZGFsKSByZXR1cm47XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU1vZGFsTGVmdENsaWNrKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgICB0aGlzLl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2soKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWxsVW5pcywgX2FsbFVuaXNNZXRhLCBsb2FkaW5nLCBsb2FkTW9yZVBvc3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFyZU1vcmVQb3N0cyA9IGFsbFVuaXMubGVuZ3RoIDwgX2FsbFVuaXNNZXRhLmNvdW50O1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0Y1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAxMDgwIH19IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICB7YWxsVW5pcy5tYXAoKHVuaSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgICAgIGtleT17dW5pLl9pZH1cbiAgICAgICAgICAgICAgICB1bmk9e3VuaX1cbiAgICAgICAgICAgICAgICBfaGFuZGxlQ2FyZENsaWNrPXsoZXZ0KSA9PiB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soZXZ0LCBpbmRleCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2FyZU1vcmVQb3N0cyA/IDxidXR0b24gY2xhc3NOYW1lPVwidXItYnRuXCIgb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT4ge2xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnU2hvdyBNb3JlJ30gPC9idXR0b24+IDogJyd9XG4gICAgICAgIDxNb2RhbCBcbiAgICAgICAgICByZWY9eyhlbCkgPT4geyB0aGlzLm1vZGFsID0gZWw7IH19XG4gICAgICAgICAgc2hvd01vZGFsPXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cbiAgICAgICAgICB1bmk9e2FsbFVuaXNbdGhpcy5zdGF0ZS5pbmRleF19XG4gICAgICAgICAgX2hhbmRsZU1vZGFsUmlnaHRDbGljaz17dGhpcy5faGFuZGxlTW9kYWxSaWdodENsaWNrfVxuICAgICAgICAgIF9oYW5kbGVNb2RhbExlZnRDbGljaz17dGhpcy5faGFuZGxlTW9kYWxMZWZ0Q2xpY2t9XG4gICAgICAgICAgX2hhbmRsZU1vZGFsQ2xvc2VDbGljaz17dGhpcy5faGFuZGxlTW9kYWxDbG9zZUNsaWNrfVxuICAgICAgICAgIF9oYW5kbGVHbG9iYWxDbGljaz17dGhpcy5faGFuZGxlR2xvYmFsQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgYWxsVW5pcyA9IGdxbGBcbiAgcXVlcnkgYWxsVW5pcygkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgYWxsVW5pcyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgX2lkXG4gICAgICBuYW1lXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICB3ZWJzaXRlXG4gICAgICBjb3VudHJ5XG4gICAgfSxcbiAgICBfYWxsVW5pc01ldGEge1xuICAgICAgY291bnRcbiAgICB9XG4gIH1cbmBcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChVbmlMaXN0KVxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxVbmlzLCB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IDAsXG4gICAgICBmaXJzdDogUE9TVFNfUEVSX1BBR0VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiBkYXRhLmFsbFVuaXMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsVW5pczogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFVuaXMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxVbmlzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoVW5pTGlzdClcbiJdfQ== */\n/*@ sourceURL=components/UniList.js */'
      }));
    }
  }]);

  return Unis;
}(_react2.default.Component);

var allUnis = (0, _reactApollo.gql)(_templateObject);

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (UniList)
exports.default = (0, _reactApollo.graphql)(allUnis, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        return data.fetchMore({
          variables: {
            skip: data.allUnis.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }
            return (0, _assign2.default)({}, previousResult, {
              // Append the new posts results to the old one
              allUnis: [].concat((0, _toConsumableArray3.default)(previousResult.allUnis), (0, _toConsumableArray3.default)(fetchMoreResult.allUnis))
            });
          }
        });
      }
    };
  }
})(UniList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwiRXJyb3JNZXNzYWdlIiwiQ2FyZCIsIk1vZGFsIiwiUmVhY3QiLCJQT1NUU19QRVJfUEFHRSIsIlVuaUxpc3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiYWxsVW5pcyIsIl9hbGxVbmlzTWV0YSIsImxvYWRNb3JlUG9zdHMiLCJsZW5ndGgiLCJVbmlzIiwicHJvcHMiLCJfaGFuZGxlQ2FyZENsaWNrIiwiZSIsImluZGV4Iiwic2V0U3RhdGUiLCJzaG93TW9kYWwiLCJfaGFuZGxlTW9kYWxMZWZ0Q2xpY2siLCJzdGF0ZSIsIl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2siLCJfaGFuZGxlTW9kYWxDbG9zZUNsaWNrIiwiX2hhbmRsZUdsb2JhbEtleVByZXNzIiwia2V5Q29kZSIsInNlYXJjaElucHV0IiwibW9kYWwiLCJhbGxEYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFyZU1vcmVQb3N0cyIsImNvdW50Iiwid2lkdGgiLCJtYXAiLCJ1bmkiLCJfaWQiLCJldnQiLCJlbCIsIl9oYW5kbGVHbG9iYWxDbGljayIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJmZXRjaE1vcmUiLCJ1cGRhdGVRdWVyeSIsInByZXZpb3VzUmVzdWx0IiwiZmV0Y2hNb3JlUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQUs7O0FBQ2QsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7Ozs7Ozs7QUFFUCxJQUFNLGlCQUFOLEFBQXVCOztBQUV2QixTQUFBLEFBQVMsY0FBNkU7dUJBQWxFLEFBQWtFO01BQTFELEFBQTBELG9CQUExRCxB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Q1A7U0FLSyxzQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHOztZQUFZLEFBRXBCO3FCQUFlLHlCQUFNLEFBQ25CO29CQUFPLEFBQUs7O2tCQUVGLEtBQUEsQUFBSyxRQUZPLEFBQ1QsQUFDVSxBQUVyQjtBQUhXLEFBQ1Q7dUJBRVcscUJBQUEsQUFBQyx1QkFBd0M7Z0JBQXRCLEFBQXNCLHdCQUF0QixBQUFzQixBQUNwRDs7Z0JBQUksQ0FBSixBQUFLLGlCQUFpQixBQUNwQjtxQkFBQSxBQUFPLEFBQ1I7QUFDRDt5Q0FBTyxBQUFjLElBQWQsQUFBa0I7QUFFdkI7a0VBQWEsZUFBYixBQUE0QiwyQ0FBWSxnQkFGMUMsQUFBTyxBQUFrQyxBQUV2QyxBQUF3RCxBQUUzRDtBQUowQyxBQUN2QyxhQURLO0FBUlgsQUFBTyxBQUFlLEFBY3ZCO0FBZHVCLEFBQ3BCLFNBREs7QUFISixBQUFlO0FBQUEsQUFDcEI7QUFSVyxBQUFpQjtBQUFBLEFBQzlCLENBRGEsRUFBZixBQUFlLEFBMEJaIiwiZmlsZSI6IlVuaUxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhdHJpY2t2b25wbGF0ZW4vdW5pcmFuay9hcHAtY2xpZW50In0=