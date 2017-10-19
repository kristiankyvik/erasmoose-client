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

var _jsxFileName = '/Users/kristiankyvik/code/serverless-graphql-apollo/app-client/components/UniList.js';

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
        css: 'section.jsx-643234570{padding-bottom:20px}li.jsx-643234570{display:block;margin-bottom:10px}div.jsx-643234570{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}a.jsx-643234570{font-size:14px;margin-right:10px;text-decoration:none;padding-bottom:0;border:0}span.jsx-643234570{font-size:14px;margin-right:5px}ul.jsx-643234570{margin:0;padding:0}.ur-btn.jsx-643234570{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;cursor:default;background-color:#ED6863;width:auto;height:45px;line-height:38px;padding:5px 20px 0 20px;font-size:25px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;text-align:center;font-weight:bold;font-family:"Source Sans Pro",sans-serif;max-width:610px;overflow:hidden;-moz-transition:background-color ease-out 100ms 0ms;-webkit-transition:background-color ease-out 100ms 0ms;-o-transition:background-color ease-out 100ms 0ms;-webkit-transition:background-color ease-out 100ms 0ms;transition:background-color ease-out 100ms 0ms;color:#8d1510;-webkit-box-shadow:0 3px 12px 0 rgba(0,0,0,0.1);-moz-box-shadow:0 3px 12px 0 rgba(0,0,0,0.1);box-shadow:0 3px 12px 0 rgba(0,0,0,0.1)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR29CLEFBR2lDLEFBR04sQUFJSyxBQUlKLEFBT0EsQUFJTixBQUkwQixTQUh6QixLQW5CUyxDQVFELEFBT0QsSUFLbkIsQ0F2QkEsWUFtQkEsQ0FmQSxBQVF1QixFQWNhLG1CQWJqQixlQWNJLEVBYlosU0FDWCxVQWFpQixHQXJCRixZQXNCWSx5QkFDZCxXQUNDLFlBQ0ssY0F4Qm5CLEdBeUIwQix3QkFDVCxlQUNHLGtCQUNRLDBCQUNILHVCQUNMLGtCQUNELGlCQUN3Qix5Q0FDekIsZ0JBQ0EsZ0JBQ29DLG9EQUNHLHVEQUNMLGtEQUNILHNHQUNqQyxjQUNrQyxnREFDSCw2Q0FDTCx3Q0FDMUMiLCJmaWxlIjoiY29tcG9uZW50cy9VbmlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby9hcHAtY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAyMDtcblxuZnVuY3Rpb24gVW5pTGlzdCAoeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBhbGxVbmlzLCBfYWxsVW5pc01ldGEgfSwgbG9hZE1vcmVQb3N0cyB9KSB7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBlbnRyaWVzLicgLz5cbiAgaWYgKGFsbFVuaXMgJiYgYWxsVW5pcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFVuaXMgX2FsbFVuaXNNZXRhPXtfYWxsVW5pc01ldGF9IGFsbFVuaXM9e2FsbFVuaXN9IGxvYWRpbmc9e2xvYWRpbmd9IGxvYWRNb3JlUG9zdHM9e2xvYWRNb3JlUG9zdHN9IC8+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY2xhc3MgVW5pcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2VhcmNoSW5wdXQgPSBudWxsO1xuICAgIHRoaXMubW9kYWwgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGFsbERhdGE6IFtdLFxuICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgIGluZGV4OiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUdsb2JhbEtleVByZXNzLCBmYWxzZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVHbG9iYWxLZXlQcmVzcywgZmFsc2UpO1xuICB9XG5cbiAgX2hhbmRsZUNhcmRDbGljayA9IChlLCBpbmRleCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIHNob3dNb2RhbDogdHJ1ZSxcbiAgICAgIGluZGV4XG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlTW9kYWxMZWZ0Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5pbmRleCA8PSAwID8gYWxsVW5pcy5sZW5ndGggLSAxIDogdGhpcy5zdGF0ZS5pbmRleCAtIDE7ICAgICBcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGluZGV4IH0pO1xuICB9XG5cbiAgX2hhbmRsZU1vZGFsUmlnaHRDbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4ID49IGFsbFVuaXMubGVuZ3RoID8gMCA6IHRoaXMuc3RhdGUuaW5kZXggKyAxOyAgICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBpbmRleCB9KTtcbiAgfVxuXG4gIF9oYW5kbGVNb2RhbENsb3NlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgX2hhbmRsZUdsb2JhbEtleVByZXNzID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd01vZGFsKSByZXR1cm47XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU1vZGFsTGVmdENsaWNrKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgICB0aGlzLl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2soKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWxsVW5pcywgX2FsbFVuaXNNZXRhLCBsb2FkaW5nLCBsb2FkTW9yZVBvc3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFyZU1vcmVQb3N0cyA9IGFsbFVuaXMubGVuZ3RoIDwgX2FsbFVuaXNNZXRhLmNvdW50O1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0Y1wiPlxuICAgICAgICA8YSBcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0eXBlZm9ybS1zaGFyZSBidXR0b24gdXItYnRuIG12M1wiIFxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2t5dmlrYmNuLnR5cGVmb3JtLmNvbS90by9Gc3VKUW1cIiBcbiAgICAgICAgICBkYXRhLW1vZGU9XCJkcmF3ZXJfcmlnaHRcIiBcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIEFkZCByZXZpZXdcbiAgICAgICAgPC9hPiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMTA4MCB9fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAge2FsbFVuaXMubWFwKCh1bmksIGluZGV4KSA9PlxuICAgICAgICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgICAgICBrZXk9e3VuaS5faWR9XG4gICAgICAgICAgICAgICAgdW5pPXt1bml9XG4gICAgICAgICAgICAgICAgX2hhbmRsZUNhcmRDbGljaz17KGV2dCkgPT4gdGhpcy5faGFuZGxlQ2FyZENsaWNrKGV2dCwgaW5kZXgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthcmVNb3JlUG9zdHMgPyA8YnV0dG9uIGNsYXNzTmFtZT1cInVyLWJ0blwiIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlUG9zdHMoKX0+IHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1Nob3cgTW9yZSd9IDwvYnV0dG9uPiA6ICcnfVxuICAgICAgICA8TW9kYWwgXG4gICAgICAgICAgcmVmPXsoZWwpID0+IHsgdGhpcy5tb2RhbCA9IGVsOyB9fVxuICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XG4gICAgICAgICAgdW5pPXthbGxVbmlzW3RoaXMuc3RhdGUuaW5kZXhdfVxuICAgICAgICAgIF9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsUmlnaHRDbGlja31cbiAgICAgICAgICBfaGFuZGxlTW9kYWxMZWZ0Q2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsTGVmdENsaWNrfVxuICAgICAgICAgIF9oYW5kbGVNb2RhbENsb3NlQ2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsQ2xvc2VDbGlja31cbiAgICAgICAgICBfaGFuZGxlR2xvYmFsQ2xpY2s9e3RoaXMuX2hhbmRsZUdsb2JhbENsaWNrfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51ci1idG4ge1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VENjg2MztcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCAwIDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIixzYW5zLXNlcmlmO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMTAwbXMgMG1zO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDEwMG1zIDBtcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMTAwbXMgMG1zO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAxMDBtcyAwbXM7XG4gICAgICAgICAgICBjb2xvcjogIzhkMTUxMDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMTJweCAwIHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAzcHggMTJweCAwIHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggMCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGFsbFVuaXMgPSBncWxgXG4gIHF1ZXJ5IGFsbFVuaXMoJGZpcnN0OiBJbnQhLCAkc2tpcDogSW50ISkge1xuICAgIGFsbFVuaXMoZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcbiAgICAgIF9pZFxuICAgICAgbmFtZVxuICAgICAgdm90ZXNcbiAgICAgIHVybFxuICAgICAgd2Vic2l0ZVxuICAgICAgY291bnRyeVxuICAgIH0sXG4gICAgX2FsbFVuaXNNZXRhIHtcbiAgICAgIGNvdW50XG4gICAgfVxuICB9XG5gXG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoVW5pTGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsVW5pcywge1xuICBvcHRpb25zOiB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBza2lwOiAwLFxuICAgICAgZmlyc3Q6IFBPU1RTX1BFUl9QQUdFXG4gICAgfVxuICB9LFxuICBwcm9wczogKHsgZGF0YSB9KSA9PiAoe1xuICAgIGRhdGEsXG4gICAgbG9hZE1vcmVQb3N0czogKCkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEuZmV0Y2hNb3JlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgc2tpcDogZGF0YS5hbGxVbmlzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1Jlc3VsdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGFsbFVuaXM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxVbmlzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsVW5pc11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pKFVuaUxpc3QpXG4iXX0= */\n/*@ sourceURL=components/UniList.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwiRXJyb3JNZXNzYWdlIiwiQ2FyZCIsIk1vZGFsIiwiUmVhY3QiLCJQT1NUU19QRVJfUEFHRSIsIlVuaUxpc3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiYWxsVW5pcyIsIl9hbGxVbmlzTWV0YSIsImxvYWRNb3JlUG9zdHMiLCJsZW5ndGgiLCJVbmlzIiwicHJvcHMiLCJfaGFuZGxlQ2FyZENsaWNrIiwiZSIsImluZGV4Iiwic2V0U3RhdGUiLCJzaG93TW9kYWwiLCJfaGFuZGxlTW9kYWxMZWZ0Q2xpY2siLCJzdGF0ZSIsIl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2siLCJfaGFuZGxlTW9kYWxDbG9zZUNsaWNrIiwiX2hhbmRsZUdsb2JhbEtleVByZXNzIiwia2V5Q29kZSIsInNlYXJjaElucHV0IiwibW9kYWwiLCJhbGxEYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFyZU1vcmVQb3N0cyIsImNvdW50Iiwid2lkdGgiLCJtYXAiLCJ1bmkiLCJfaWQiLCJldnQiLCJlbCIsIl9oYW5kbGVHbG9iYWxDbGljayIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJmZXRjaE1vcmUiLCJ1cGRhdGVRdWVyeSIsInByZXZpb3VzUmVzdWx0IiwiZmV0Y2hNb3JlUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQUs7O0FBQ2QsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7Ozs7Ozs7QUFFUCxJQUFNLGlCQUFOLEFBQXVCOztBQUV2QixTQUFBLEFBQVMsY0FBNkU7dUJBQWxFLEFBQWtFO01BQTFELEFBQTBELG9CQUExRCxB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LFVBQUEsQUFBVSxzQkFBaEI7O0FBZ0JBO0FBQ0EsQUFDQTs0Q0FBZSxBQUFROzs7WUFFUixBQUNILEFBQ047YUFKMEIsQUFDckIsQUFDSSxBQUVGLEFBR1g7QUFMYSxBQUNUO0FBRkssQUFDUDtTQUtLLHNCQUFBO1FBQUEsQUFBRyxhQUFILEFBQUc7O1lBQVksQUFFcEI7cUJBQWUseUJBQU0sQUFDbkI7b0JBQU8sQUFBSzs7a0JBRUYsS0FBQSxBQUFLLFFBRk8sQUFDVCxBQUNVLEFBRXJCO0FBSFcsQUFDVDt1QkFFVyxxQkFBQSxBQUFDLHVCQUF3QztnQkFBdEIsQUFBc0Isd0JBQXRCLEFBQXNCLEFBQ3BEOztnQkFBSSxDQUFKLEFBQUssaUJBQWlCLEFBQ3BCO3FCQUFBLEFBQU8sQUFDUjtBQUNEO3lDQUFPLEFBQWMsSUFBZCxBQUFrQjtBQUV2QjtrRUFBYSxlQUFiLEFBQTRCLDJDQUFZLGdCQUYxQyxBQUFPLEFBQWtDLEFBRXZDLEFBQXdELEFBRTNEO0FBSjBDLEFBQ3ZDLGFBREs7QUFSWCxBQUFPLEFBQWUsQUFjdkI7QUFkdUIsQUFDcEIsU0FESztBQUhKLEFBQWU7QUFBQSxBQUNwQjtBQVJXLEFBQWlCO0FBQUEsQUFDOUIsQ0FEYSxFQUFmLEFBQWUsQUEwQloiLCJmaWxlIjoiVW5pTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL3NlcnZlcmxlc3MtZ3JhcGhxbC1hcG9sbG8vYXBwLWNsaWVudCJ9