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

var _jsxFileName = '/Users/kristiankyvik/code/erasmoose/app-client/components/UniList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allUnis($first: Int!, $skip: Int!) {\n    allUnis(first: $first, skip: $skip) {\n      _id\n      name\n      votes\n      url\n      website\n      country\n    },\n    _allUnisMeta {\n      count\n    }\n  }\n'], ['\n  query allUnis($first: Int!, $skip: Int!) {\n    allUnis(first: $first, skip: $skip) {\n      _id\n      name\n      votes\n      url\n      website\n      country\n    },\n    _allUnisMeta {\n      count\n    }\n  }\n']);

var POSTS_PER_PAGE = 20;

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
        className: 'jsx-643234570' + ' ' + 'tc',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('a', {
        href: 'https://kyvikbcn.typeform.com/to/FsuJQm',
        'data-mode': 'drawer_right',
        target: '_blank', className: 'jsx-643234570' + ' ' + 'typeform-share button ur-btn mv3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Add review'), _react2.default.createElement('div', {
        className: 'jsx-643234570' + ' ' + 'flex justify-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('div', { style: { width: 1080 }, className: 'jsx-643234570' + ' ' + 'flex flex-wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
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
            lineNumber: 84
          }
        });
      }))), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
          return loadMorePosts();
        }, className: 'jsx-643234570' + ' ' + 'ur-btn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
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
          lineNumber: 93
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '643234570',
        css: 'section.jsx-643234570{padding-bottom:20px;}li.jsx-643234570{display:block;margin-bottom:10px;}div.jsx-643234570{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-643234570{font-size:14px;margin-right:10px;text-decoration:none;padding-bottom:0;border:0;}span.jsx-643234570{font-size:14px;margin-right:5px;}ul.jsx-643234570{margin:0;padding:0;}.ur-btn.jsx-643234570{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;cursor:default;background-color:#ED6863;width:auto;height:45px;line-height:38px;padding:5px 20px 0 20px;font-size:25px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;text-align:center;font-weight:bold;font-family:"Source Sans Pro",sans-serif;max-width:610px;overflow:hidden;-moz-transition:background-color ease-out 100ms 0ms;-webkit-transition:background-color ease-out 100ms 0ms;-o-transition:background-color ease-out 100ms 0ms;-webkit-transition:background-color ease-out 100ms 0ms;transition:background-color ease-out 100ms 0ms;color:#8d1510;-webkit-box-shadow:0 3px 12px 0 rgba(0,0,0,0.1);-moz-box-shadow:0 3px 12px 0 rgba(0,0,0,0.1);box-shadow:0 3px 12px 0 rgba(0,0,0,0.1);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR29CLEFBR2lDLEFBR04sQUFJSyxBQUlKLEFBT0EsQUFJTixBQUkwQixTQUh6QixLQW5CUyxDQVFELEFBT0QsSUFLbkIsQ0F2QkEsWUFtQkEsQ0FmQSxBQVF1QixFQWNhLG1CQWJqQixlQWNJLEVBYlosU0FDWCxVQWFpQixHQXJCRixZQXNCWSx5QkFDZCxXQUNDLFlBQ0ssY0F4Qm5CLEdBeUIwQix3QkFDVCxlQUNHLGtCQUNRLDBCQUNILHVCQUNMLGtCQUNELGlCQUN3Qix5Q0FDekIsZ0JBQ0EsZ0JBQ29DLG9EQUNHLHVEQUNMLGtEQUNILHNHQUNqQyxjQUNrQyxnREFDSCw2Q0FDTCx3Q0FDMUMiLCJmaWxlIjoiY29tcG9uZW50cy9VbmlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvZXJhc21vb3NlL2FwcC1jbGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQT1NUU19QRVJfUEFHRSA9IDIwO1xuXG5mdW5jdGlvbiBVbmlMaXN0ICh7IGRhdGE6IHsgbG9hZGluZywgZXJyb3IsIGFsbFVuaXMsIF9hbGxVbmlzTWV0YSB9LCBsb2FkTW9yZVBvc3RzIH0pIHtcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIGVudHJpZXMuJyAvPlxuICBpZiAoYWxsVW5pcyAmJiBhbGxVbmlzLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VW5pcyBfYWxsVW5pc01ldGE9e19hbGxVbmlzTWV0YX0gYWxsVW5pcz17YWxsVW5pc30gbG9hZGluZz17bG9hZGluZ30gbG9hZE1vcmVQb3N0cz17bG9hZE1vcmVQb3N0c30gLz5cbiAgICApXG4gIH1cbiAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxufVxuXG5jbGFzcyBVbmlzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZWFyY2hJbnB1dCA9IG51bGw7XG4gICAgdGhpcy5tb2RhbCA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgYWxsRGF0YTogW10sXG4gICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlR2xvYmFsS2V5UHJlc3MsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUdsb2JhbEtleVByZXNzLCBmYWxzZSk7XG4gIH1cblxuICBfaGFuZGxlQ2FyZENsaWNrID0gKGUsIGluZGV4KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgc2hvd01vZGFsOiB0cnVlLFxuICAgICAgaW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVNb2RhbExlZnRDbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4IDw9IDAgPyBhbGxVbmlzLmxlbmd0aCAtIDEgOiB0aGlzLnN0YXRlLmluZGV4IC0gMTsgICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogaW5kZXggfSk7XG4gIH1cblxuICBfaGFuZGxlTW9kYWxSaWdodENsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuaW5kZXggPj0gYWxsVW5pcy5sZW5ndGggPyAwIDogdGhpcy5zdGF0ZS5pbmRleCArIDE7ICAgICBcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGluZGV4IH0pO1xuICB9XG5cbiAgX2hhbmRsZU1vZGFsQ2xvc2VDbGljayA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG4gIH1cblxuICBfaGFuZGxlR2xvYmFsS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zaG93TW9kYWwpIHJldHVybjtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgdGhpcy5faGFuZGxlTW9kYWxMZWZ0Q2xpY2soKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU1vZGFsUmlnaHRDbGljaygpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhbGxVbmlzLCBfYWxsVW5pc01ldGEsIGxvYWRpbmcsIGxvYWRNb3JlUG9zdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gYWxsVW5pcy5sZW5ndGggPCBfYWxsVW5pc01ldGEuY291bnQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRjXCI+XG4gICAgICAgIDxhIFxuICAgICAgICAgIGNsYXNzTmFtZT1cInR5cGVmb3JtLXNoYXJlIGJ1dHRvbiB1ci1idG4gbXYzXCIgXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8va3l2aWtiY24udHlwZWZvcm0uY29tL3RvL0ZzdUpRbVwiIFxuICAgICAgICAgIGRhdGEtbW9kZT1cImRyYXdlcl9yaWdodFwiIFxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgQWRkIHJldmlld1xuICAgICAgICA8L2E+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAxMDgwIH19IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICB7YWxsVW5pcy5tYXAoKHVuaSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgICAgIGtleT17dW5pLl9pZH1cbiAgICAgICAgICAgICAgICB1bmk9e3VuaX1cbiAgICAgICAgICAgICAgICBfaGFuZGxlQ2FyZENsaWNrPXsoZXZ0KSA9PiB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soZXZ0LCBpbmRleCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2FyZU1vcmVQb3N0cyA/IDxidXR0b24gY2xhc3NOYW1lPVwidXItYnRuXCIgb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT4ge2xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnU2hvdyBNb3JlJ30gPC9idXR0b24+IDogJyd9XG4gICAgICAgIDxNb2RhbCBcbiAgICAgICAgICByZWY9eyhlbCkgPT4geyB0aGlzLm1vZGFsID0gZWw7IH19XG4gICAgICAgICAgc2hvd01vZGFsPXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cbiAgICAgICAgICB1bmk9e2FsbFVuaXNbdGhpcy5zdGF0ZS5pbmRleF19XG4gICAgICAgICAgX2hhbmRsZU1vZGFsUmlnaHRDbGljaz17dGhpcy5faGFuZGxlTW9kYWxSaWdodENsaWNrfVxuICAgICAgICAgIF9oYW5kbGVNb2RhbExlZnRDbGljaz17dGhpcy5faGFuZGxlTW9kYWxMZWZ0Q2xpY2t9XG4gICAgICAgICAgX2hhbmRsZU1vZGFsQ2xvc2VDbGljaz17dGhpcy5faGFuZGxlTW9kYWxDbG9zZUNsaWNrfVxuICAgICAgICAgIF9oYW5kbGVHbG9iYWxDbGljaz17dGhpcy5faGFuZGxlR2xvYmFsQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVyLWJ0biB7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUQ2ODYzO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDAgMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYxMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAxMDBtcyAwbXM7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMTAwbXMgMG1zO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAxMDBtcyAwbXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDEwMG1zIDBtcztcbiAgICAgICAgICAgIGNvbG9yOiAjOGQxNTEwO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxMnB4IDAgcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDNweCAxMnB4IDAgcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTJweCAwIHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgYWxsVW5pcyA9IGdxbGBcbiAgcXVlcnkgYWxsVW5pcygkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgYWxsVW5pcyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgX2lkXG4gICAgICBuYW1lXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICB3ZWJzaXRlXG4gICAgICBjb3VudHJ5XG4gICAgfSxcbiAgICBfYWxsVW5pc01ldGEge1xuICAgICAgY291bnRcbiAgICB9XG4gIH1cbmBcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChVbmlMaXN0KVxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxVbmlzLCB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IDAsXG4gICAgICBmaXJzdDogUE9TVFNfUEVSX1BBR0VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiBkYXRhLmFsbFVuaXMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsVW5pczogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFVuaXMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxVbmlzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoVW5pTGlzdClcbiJdfQ== */\n/*@ sourceURL=components/UniList.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwiRXJyb3JNZXNzYWdlIiwiQ2FyZCIsIk1vZGFsIiwiUmVhY3QiLCJQT1NUU19QRVJfUEFHRSIsIlVuaUxpc3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiYWxsVW5pcyIsIl9hbGxVbmlzTWV0YSIsImxvYWRNb3JlUG9zdHMiLCJsZW5ndGgiLCJVbmlzIiwicHJvcHMiLCJfaGFuZGxlQ2FyZENsaWNrIiwiZSIsImluZGV4Iiwic2V0U3RhdGUiLCJzaG93TW9kYWwiLCJfaGFuZGxlTW9kYWxMZWZ0Q2xpY2siLCJzdGF0ZSIsIl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2siLCJfaGFuZGxlTW9kYWxDbG9zZUNsaWNrIiwiX2hhbmRsZUdsb2JhbEtleVByZXNzIiwia2V5Q29kZSIsInNlYXJjaElucHV0IiwibW9kYWwiLCJhbGxEYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFyZU1vcmVQb3N0cyIsImNvdW50Iiwid2lkdGgiLCJtYXAiLCJ1bmkiLCJfaWQiLCJldnQiLCJlbCIsIl9oYW5kbGVHbG9iYWxDbGljayIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJmZXRjaE1vcmUiLCJ1cGRhdGVRdWVyeSIsInByZXZpb3VzUmVzdWx0IiwiZmV0Y2hNb3JlUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQUs7O0FBQ2QsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7Ozs7Ozs7QUFFUCxJQUFNLGlCQUFOLEFBQXVCOztBQUV2QixTQUFBLEFBQVMsY0FBNkU7dUJBQWxFLEFBQWtFO01BQTFELEFBQTBELG9CQUExRCxB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LFVBQUEsQUFBVSxzQkFBaEI7O0FBZ0JBO0FBQ0EsQUFDQTs0Q0FBZSxBQUFROzs7WUFFUixBQUNILEFBQ047YUFKMEIsQUFDckIsQUFDSSxBQUVGLEFBR1g7QUFMYSxBQUNUO0FBRkssQUFDUDtTQUtLLHNCQUFBO1FBQUEsQUFBRyxhQUFILEFBQUc7O1lBQVksQUFFcEI7cUJBQWUseUJBQU0sQUFDbkI7b0JBQU8sQUFBSzs7a0JBRUYsS0FBQSxBQUFLLFFBRk8sQUFDVCxBQUNVLEFBRXJCO0FBSFcsQUFDVDt1QkFFVyxxQkFBQSxBQUFDLHVCQUF3QztnQkFBdEIsQUFBc0Isd0JBQXRCLEFBQXNCLEFBQ3BEOztnQkFBSSxDQUFKLEFBQUssaUJBQWlCLEFBQ3BCO3FCQUFBLEFBQU8sQUFDUjtBQUNEO3lDQUFPLEFBQWMsSUFBZCxBQUFrQjtBQUV2QjtrRUFBYSxlQUFiLEFBQTRCLDJDQUFZLGdCQUYxQyxBQUFPLEFBQWtDLEFBRXZDLEFBQXdELEFBRTNEO0FBSjBDLEFBQ3ZDLGFBREs7QUFSWCxBQUFPLEFBQWUsQUFjdkI7QUFkdUIsQUFDcEIsU0FESztBQUhKLEFBQWU7QUFBQSxBQUNwQjtBQVJXLEFBQWlCO0FBQUEsQUFDOUIsQ0FEYSxFQUFmLEFBQWUsQUEwQloiLCJmaWxlIjoiVW5pTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL2VyYXNtb29zZS9hcHAtY2xpZW50In0=