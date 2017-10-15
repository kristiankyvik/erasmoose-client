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

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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
      console.log((0, _stringify2.default)(allUnis.map(function (u) {
        return {
          _id: u._id,
          url: 'https://source.unsplash.com/254x156/?' + u.country + '&' + u.name + '&sig=' + u._id
        };
      })));
      return _react2.default.createElement('section', {
        className: 'jsx-592477099' + ' ' + 'tc',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-592477099' + ' ' + 'flex justify-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('div', { style: { width: 1080 }, className: 'jsx-592477099' + ' ' + 'flex flex-wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
            lineNumber: 79
          }
        });
      }))), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
          return loadMorePosts();
        }, className: 'jsx-592477099',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
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
          lineNumber: 88
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '592477099',
        css: 'section.jsx-592477099{padding-bottom:20px}li.jsx-592477099{display:block;margin-bottom:10px}div.jsx-592477099{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}a.jsx-592477099{font-size:14px;margin-right:10px;text-decoration:none;padding-bottom:0;border:0}span.jsx-592477099{font-size:14px;margin-right:5px}ul.jsx-592477099{margin:0;padding:0}button.jsx-592477099:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:"";height:0;margin-right:5px;width:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR29CLEFBR2lDLEFBR04sQUFJSyxBQUlKLEFBT0EsQUFJTixBQUlTLFNBSFIsS0FuQlMsQ0FRRCxBQU9ELElBS25CLENBdkJBLFlBbUJBLENBZkEsQUFRdUIscUJBQ0osaUJBQ1IsQUFZVSxTQVhyQixVQVk2QixHQXBCZCx3QkFxQjRDLGtEQXBCM0QsT0FxQmEsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9VbmlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby9hcHAtY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAyMDtcblxuZnVuY3Rpb24gVW5pTGlzdCAoeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBhbGxVbmlzLCBfYWxsVW5pc01ldGEgfSwgbG9hZE1vcmVQb3N0cyB9KSB7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBlbnRyaWVzLicgLz5cbiAgaWYgKGFsbFVuaXMgJiYgYWxsVW5pcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFVuaXMgX2FsbFVuaXNNZXRhPXtfYWxsVW5pc01ldGF9IGFsbFVuaXM9e2FsbFVuaXN9IGxvYWRpbmc9e2xvYWRpbmd9IGxvYWRNb3JlUG9zdHM9e2xvYWRNb3JlUG9zdHN9IC8+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY2xhc3MgVW5pcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2VhcmNoSW5wdXQgPSBudWxsO1xuICAgIHRoaXMubW9kYWwgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGFsbERhdGE6IFtdLFxuICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgIGluZGV4OiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUdsb2JhbEtleVByZXNzLCBmYWxzZSk7XG4gIH1cblxuICBfaGFuZGxlQ2FyZENsaWNrID0gKGUsIGluZGV4KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgc2hvd01vZGFsOiB0cnVlLFxuICAgICAgaW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVNb2RhbExlZnRDbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4IDw9IDAgPyBhbGxVbmlzLmxlbmd0aCAtIDEgOiB0aGlzLnN0YXRlLmluZGV4IC0gMTsgICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogaW5kZXggfSk7XG4gIH1cblxuICBfaGFuZGxlTW9kYWxSaWdodENsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuaW5kZXggPj0gYWxsVW5pcy5sZW5ndGggPyAwIDogdGhpcy5zdGF0ZS5pbmRleCArIDE7ICAgICBcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGluZGV4IH0pO1xuICB9XG5cbiAgX2hhbmRsZU1vZGFsQ2xvc2VDbGljayA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG4gIH1cblxuICBfaGFuZGxlR2xvYmFsS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zaG93TW9kYWwpIHJldHVybjtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgdGhpcy5faGFuZGxlTW9kYWxMZWZ0Q2xpY2soKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU1vZGFsUmlnaHRDbGljaygpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhbGxVbmlzLCBfYWxsVW5pc01ldGEsIGxvYWRpbmcsIGxvYWRNb3JlUG9zdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gYWxsVW5pcy5sZW5ndGggPCBfYWxsVW5pc01ldGEuY291bnQ7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYWxsVW5pcy5tYXAoKHUpID0+IHtcbiAgICAgIHJldHVybiB7IFxuICAgICAgICBfaWQ6IHUuX2lkLCBcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzI1NHgxNTYvPyR7dS5jb3VudHJ5fSYke3UubmFtZX0mc2lnPSR7dS5faWR9YCxcbiAgICAgIH07XG4gICAgfSkpKTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMTA4MCB9fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAge2FsbFVuaXMubWFwKCh1bmksIGluZGV4KSA9PlxuICAgICAgICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgICAgICBrZXk9e3VuaS5faWR9XG4gICAgICAgICAgICAgICAgdW5pPXt1bml9XG4gICAgICAgICAgICAgICAgX2hhbmRsZUNhcmRDbGljaz17KGV2dCkgPT4gdGhpcy5faGFuZGxlQ2FyZENsaWNrKGV2dCwgaW5kZXgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthcmVNb3JlUG9zdHMgPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlUG9zdHMoKX0+IHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1Nob3cgTW9yZSd9IDwvYnV0dG9uPiA6ICcnfVxuICAgICAgICA8TW9kYWwgXG4gICAgICAgICAgcmVmPXsoZWwpID0+IHsgdGhpcy5tb2RhbCA9IGVsOyB9fVxuICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XG4gICAgICAgICAgdW5pPXthbGxVbmlzW3RoaXMuc3RhdGUuaW5kZXhdfVxuICAgICAgICAgIF9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsUmlnaHRDbGlja31cbiAgICAgICAgICBfaGFuZGxlTW9kYWxMZWZ0Q2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsTGVmdENsaWNrfVxuICAgICAgICAgIF9oYW5kbGVNb2RhbENsb3NlQ2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsQ2xvc2VDbGlja31cbiAgICAgICAgICBfaGFuZGxlR2xvYmFsQ2xpY2s9e3RoaXMuX2hhbmRsZUdsb2JhbENsaWNrfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4IDRweCAwIDRweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBhbGxVbmlzID0gZ3FsYFxuICBxdWVyeSBhbGxVbmlzKCRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICBhbGxVbmlzKGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBfaWRcbiAgICAgIG5hbWVcbiAgICAgIHZvdGVzXG4gICAgICB1cmxcbiAgICAgIHdlYnNpdGVcbiAgICAgIGNvdW50cnlcbiAgICB9LFxuICAgIF9hbGxVbmlzTWV0YSB7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfVxuYFxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFVuaUxpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFVuaXMsIHtcbiAgb3B0aW9uczoge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogMCxcbiAgICAgIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsVW5pcy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXG4gICAgICAgICAgICBhbGxVbmlzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsVW5pcywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFVuaXNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KShVbmlMaXN0KVxuIl19 */\n/*@ sourceURL=components/UniList.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwiRXJyb3JNZXNzYWdlIiwiQ2FyZCIsIk1vZGFsIiwiUmVhY3QiLCJQT1NUU19QRVJfUEFHRSIsIlVuaUxpc3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiYWxsVW5pcyIsIl9hbGxVbmlzTWV0YSIsImxvYWRNb3JlUG9zdHMiLCJsZW5ndGgiLCJVbmlzIiwicHJvcHMiLCJfaGFuZGxlQ2FyZENsaWNrIiwiZSIsImluZGV4Iiwic2V0U3RhdGUiLCJzaG93TW9kYWwiLCJfaGFuZGxlTW9kYWxMZWZ0Q2xpY2siLCJzdGF0ZSIsIl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2siLCJfaGFuZGxlTW9kYWxDbG9zZUNsaWNrIiwiX2hhbmRsZUdsb2JhbEtleVByZXNzIiwia2V5Q29kZSIsInNlYXJjaElucHV0IiwibW9kYWwiLCJhbGxEYXRhIiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXJlTW9yZVBvc3RzIiwiY291bnQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidSIsIl9pZCIsInVybCIsImNvdW50cnkiLCJuYW1lIiwid2lkdGgiLCJ1bmkiLCJldnQiLCJlbCIsIl9oYW5kbGVHbG9iYWxDbGljayIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJmZXRjaE1vcmUiLCJ1cGRhdGVRdWVyeSIsInByZXZpb3VzUmVzdWx0IiwiZmV0Y2hNb3JlUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFLOztBQUNkLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7Ozs7Ozs7O0FBRVAsSUFBTSxpQkFBTixBQUF1Qjs7QUFFdkIsU0FBQSxBQUFTLGNBQTZFO3VCQUFs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QUFNOztBQXlIekIsSUFBTSxVQUFBLEFBQVUsc0JBQWhCOztBQWdCQTtBQUNBLEFBQ0E7NENBQWUsQUFBUTs7O1lBRVIsQUFDSCxBQUNOO2FBSjBCLEFBQ3JCLEFBQ0ksQUFFRixBQUdYO0FBTGEsQUFDVDtBQUZLLEFBQ1A7U0FLSyxzQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHOztZQUFZLEFBRXBCO3FCQUFlLHlCQUFNLEFBQ25CO29CQUFPLEFBQUs7O2tCQUVGLEtBQUEsQUFBSyxRQUZPLEFBQ1QsQUFDVSxBQUVyQjtBQUhXLEFBQ1Q7dUJBRVcscUJBQUEsQUFBQyx1QkFBd0M7Z0JBQXRCLEFBQXNCLHdCQUF0QixBQUFzQixBQUNwRDs7Z0JBQUksQ0FBSixBQUFLLGlCQUFpQixBQUNwQjtxQkFBQSxBQUFPLEFBQ1I7QUFDRDt5Q0FBTyxBQUFjLElBQWQsQUFBa0I7QUFFdkI7a0VBQWEsZUFBYixBQUE0QiwyQ0FBWSxnQkFGMUMsQUFBTyxBQUFrQyxBQUV2QyxBQUF3RCxBQUUzRDtBQUowQyxBQUN2QyxhQURLO0FBUlgsQUFBTyxBQUFlLEFBY3ZCO0FBZHVCLEFBQ3BCLFNBREs7QUFISixBQUFlO0FBQUEsQUFDcEI7QUFSVyxBQUFpQjtBQUFBLEFBQzlCLENBRGEsRUFBZixBQUFlLEFBMEJaIiwiZmlsZSI6IlVuaUxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tyaXN0aWFua3l2aWsvY29kZS9zZXJ2ZXJsZXNzLWdyYXBocWwtYXBvbGxvL2FwcC1jbGllbnQifQ==