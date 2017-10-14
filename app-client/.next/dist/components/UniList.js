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

    _this._handleCardClick = function (e) {
      _this.setState({ showModal: true });
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
        className: 'jsx-592477099' + ' ' + 'tc',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-592477099' + ' ' + 'flex justify-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('div', { style: { width: 1080 }, className: 'jsx-592477099' + ' ' + 'flex flex-wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, allUnis.map(function (uni, index) {
        return _react2.default.createElement(_Card2.default, {
          key: uni.name,
          uni: uni,
          _handleCardClick: _this2._handleCardClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        });
      }))), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
          return loadMorePosts();
        }, className: 'jsx-592477099',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
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
          lineNumber: 79
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '592477099',
        css: 'section.jsx-592477099{padding-bottom:20px}li.jsx-592477099{display:block;margin-bottom:10px}div.jsx-592477099{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}a.jsx-592477099{font-size:14px;margin-right:10px;text-decoration:none;padding-bottom:0;border:0}span.jsx-592477099{font-size:14px;margin-right:5px}ul.jsx-592477099{margin:0;padding:0}button.jsx-592477099:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:"";height:0;margin-right:5px;width:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Rm9CLEFBR2lDLEFBR04sQUFJSyxBQUlKLEFBT0EsQUFJTixBQUlTLFNBSFIsS0FuQlMsQ0FRRCxBQU9ELElBS25CLENBdkJBLFlBbUJBLENBZkEsQUFRdUIscUJBQ0osaUJBQ1IsQUFZVSxTQVhyQixVQVk2QixHQXBCZCx3QkFxQjRDLGtEQXBCM0QsT0FxQmEsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9VbmlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby9hcHAtY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAyMFxuXG5mdW5jdGlvbiBVbmlMaXN0ICh7IGRhdGE6IHsgbG9hZGluZywgZXJyb3IsIGFsbFVuaXMsIF9hbGxVbmlzTWV0YSB9LCBsb2FkTW9yZVBvc3RzIH0pIHtcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIGVudHJpZXMuJyAvPlxuICBpZiAoYWxsVW5pcyAmJiBhbGxVbmlzLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VW5pcyBfYWxsVW5pc01ldGE9e19hbGxVbmlzTWV0YX0gYWxsVW5pcz17YWxsVW5pc30gbG9hZGluZz17bG9hZGluZ30gbG9hZE1vcmVQb3N0cz17bG9hZE1vcmVQb3N0c30gLz5cbiAgICApXG4gIH1cbiAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxufVxuXG5jbGFzcyBVbmlzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZWFyY2hJbnB1dCA9IG51bGw7XG4gICAgdGhpcy5tb2RhbCA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgYWxsRGF0YTogW10sXG4gICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlR2xvYmFsS2V5UHJlc3MsIGZhbHNlKTtcbiAgfVxuXG4gIF9oYW5kbGVDYXJkQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG4gIH1cblxuICBfaGFuZGxlTW9kYWxMZWZ0Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5pbmRleCA8PSAwID8gYWxsVW5pcy5sZW5ndGggLSAxIDogdGhpcy5zdGF0ZS5pbmRleCAtIDE7ICAgICBcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGluZGV4IH0pO1xuICB9XG5cbiAgX2hhbmRsZU1vZGFsUmlnaHRDbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4ID49IGFsbFVuaXMubGVuZ3RoID8gMCA6IHRoaXMuc3RhdGUuaW5kZXggKyAxOyAgICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBpbmRleCB9KTtcbiAgfVxuXG4gIF9oYW5kbGVNb2RhbENsb3NlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgX2hhbmRsZUdsb2JhbEtleVByZXNzID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd01vZGFsKSByZXR1cm47XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU1vZGFsTGVmdENsaWNrKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgICB0aGlzLl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2soKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWxsVW5pcywgX2FsbFVuaXNNZXRhLCBsb2FkaW5nLCBsb2FkTW9yZVBvc3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFyZU1vcmVQb3N0cyA9IGFsbFVuaXMubGVuZ3RoIDwgX2FsbFVuaXNNZXRhLmNvdW50O1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0Y1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAxMDgwIH19IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICB7YWxsVW5pcy5tYXAoKHVuaSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgICAgIGtleT17dW5pLm5hbWV9XG4gICAgICAgICAgICAgICAgdW5pPXt1bml9XG4gICAgICAgICAgICAgICAgX2hhbmRsZUNhcmRDbGljaz17dGhpcy5faGFuZGxlQ2FyZENsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthcmVNb3JlUG9zdHMgPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlUG9zdHMoKX0+IHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1Nob3cgTW9yZSd9IDwvYnV0dG9uPiA6ICcnfVxuICAgICAgICA8TW9kYWwgXG4gICAgICAgICAgcmVmPXsoZWwpID0+IHsgdGhpcy5tb2RhbCA9IGVsOyB9fVxuICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XG4gICAgICAgICAgdW5pPXthbGxVbmlzW3RoaXMuc3RhdGUuaW5kZXhdfVxuICAgICAgICAgIF9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsUmlnaHRDbGlja31cbiAgICAgICAgICBfaGFuZGxlTW9kYWxMZWZ0Q2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsTGVmdENsaWNrfVxuICAgICAgICAgIF9oYW5kbGVNb2RhbENsb3NlQ2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsQ2xvc2VDbGlja31cbiAgICAgICAgICBfaGFuZGxlR2xvYmFsQ2xpY2s9e3RoaXMuX2hhbmRsZUdsb2JhbENsaWNrfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4IDRweCAwIDRweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBhbGxVbmlzID0gZ3FsYFxuICBxdWVyeSBhbGxVbmlzKCRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICBhbGxVbmlzKGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBfaWRcbiAgICAgIG5hbWVcbiAgICAgIHZvdGVzXG4gICAgICB1cmxcbiAgICAgIHdlYnNpdGVcbiAgICAgIGNvdW50cnlcbiAgICB9LFxuICAgIF9hbGxVbmlzTWV0YSB7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfVxuYFxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFVuaUxpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFVuaXMsIHtcbiAgb3B0aW9uczoge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogMCxcbiAgICAgIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsVW5pcy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXG4gICAgICAgICAgICBhbGxVbmlzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsVW5pcywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFVuaXNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KShVbmlMaXN0KVxuIl19 */\n/*@ sourceURL=components/UniList.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwiRXJyb3JNZXNzYWdlIiwiQ2FyZCIsIk1vZGFsIiwiUmVhY3QiLCJQT1NUU19QRVJfUEFHRSIsIlVuaUxpc3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiYWxsVW5pcyIsIl9hbGxVbmlzTWV0YSIsImxvYWRNb3JlUG9zdHMiLCJsZW5ndGgiLCJVbmlzIiwicHJvcHMiLCJfaGFuZGxlQ2FyZENsaWNrIiwiZSIsInNldFN0YXRlIiwic2hvd01vZGFsIiwiX2hhbmRsZU1vZGFsTGVmdENsaWNrIiwiaW5kZXgiLCJzdGF0ZSIsIl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2siLCJfaGFuZGxlTW9kYWxDbG9zZUNsaWNrIiwiX2hhbmRsZUdsb2JhbEtleVByZXNzIiwia2V5Q29kZSIsInNlYXJjaElucHV0IiwibW9kYWwiLCJhbGxEYXRhIiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXJlTW9yZVBvc3RzIiwiY291bnQiLCJ3aWR0aCIsIm1hcCIsInVuaSIsIm5hbWUiLCJlbCIsIl9oYW5kbGVHbG9iYWxDbGljayIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJmZXRjaE1vcmUiLCJ1cGRhdGVRdWVyeSIsInByZXZpb3VzUmVzdWx0IiwiZmV0Y2hNb3JlUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQUs7O0FBQ2QsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7Ozs7Ozs7QUFFUCxJQUFNLGlCQUFOLEFBQXVCOztBQUV2QixTQUFBLEFBQVMsY0FBNkU7dUJBQWxFLEFBQWtFO01BQTFELEFBQTBELG9CQUExRCxBQUEwRDtNQUFqRCxBQUFpRCxrQkFBakQs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SUFBSSxVQUFBLEFBQUMsS0FBRCxBQUFNLE9BQU47K0JBQ1gsQUFBQztlQUNNLElBRFAsQUFDVyxBQUNUO2VBRkYsQUFFTyxBQUNMOzRCQUFrQixPQUhwQixBQUd5Qjs7c0JBSHpCO3dCQURXLEFBQ1g7QUFBQTtBQUNFLFNBREY7QUFKUixBQUNFLEFBQ0UsQUFDRyxBQVNKLDJDQUFlLGNBQUEsWUFBUSxTQUFTLG1CQUFBO2lCQUFBLEFBQU07QUFBdkIsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7T0FBQSxFQUEwQyxlQUFBLEFBQVUsZUFBcEQsQUFBbUUsYUFBbEYsQUFBZSxPQVpsQixBQVk4RyxBQUM1RyxvQkFBQSxBQUFDO2FBQ00sYUFBQSxBQUFDLElBQU8sQUFBRTtpQkFBQSxBQUFLLFFBQUwsQUFBYSxBQUFLO0FBRG5DLEFBRUU7bUJBQVcsS0FBQSxBQUFLLE1BRmxCLEFBRXdCLEFBQ3RCO2FBQUssUUFBUSxLQUFBLEFBQUssTUFIcEIsQUFHTyxBQUFtQixBQUN4QjtnQ0FBd0IsS0FKMUIsQUFJK0IsQUFDN0I7K0JBQXVCLEtBTHpCLEFBSzhCLEFBQzVCO2dDQUF3QixLQU4xQixBQU0rQixBQUM3Qjs0QkFBb0IsS0FQdEIsQUFPMkI7O29CQVAzQjtzQkFiRixBQWFFO0FBQUE7QUFDRTtpQkFkSjthQURGLEFBQ0UsQUE4REg7QUE5REc7Ozs7O0VBL0NhLGdCQUFNLEE7O0FBZ0h6QixJQUFNLFVBQUEsQUFBVSxzQkFBaEI7O0FBZ0JBO0FBQ0EsQUFDQTs0Q0FBZSxBQUFROzs7WUFFUixBQUNILEFBQ047YUFKMEIsQUFDckIsQUFDSSxBQUVGLEFBR1g7QUFMYSxBQUNUO0FBRkssQUFDUDtTQUtLLHNCQUFBO1FBQUEsQUFBRyxhQUFILEFBQUc7O1lBQVksQUFFcEI7cUJBQWUseUJBQU0sQUFDbkI7b0JBQU8sQUFBSzs7a0JBRUYsS0FBQSxBQUFLLFFBRk8sQUFDVCxBQUNVLEFBRXJCO0FBSFcsQUFDVDt1QkFFVyxxQkFBQSxBQUFDLHVCQUF3QztnQkFBdEIsQUFBc0Isd0JBQXRCLEFBQXNCLEFBQ3BEOztnQkFBSSxDQUFKLEFBQUssaUJBQWlCLEFBQ3BCO3FCQUFBLEFBQU8sQUFDUjtBQUNEO3lDQUFPLEFBQWMsSUFBZCxBQUFrQjtBQUV2QjtrRUFBYSxlQUFiLEFBQTRCLDJDQUFZLGdCQUYxQyxBQUFPLEFBQWtDLEFBRXZDLEFBQXdELEFBRTNEO0FBSjBDLEFBQ3ZDLGFBREs7QUFSWCxBQUFPLEFBQWUsQUFjdkI7QUFkdUIsQUFDcEIsU0FESztBQUhKLEFBQWU7QUFBQSxBQUNwQjtBQVJXLEFBQWlCO0FBQUEsQUFDOUIsQ0FEYSxFQUFmLEFBQWUsQUEwQloiLCJmaWxlIjoiVW5pTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL3NlcnZlcmxlc3MtZ3JhcGhxbC1hcG9sbG8vYXBwLWNsaWVudCJ9