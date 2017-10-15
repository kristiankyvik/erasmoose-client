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
          lineNumber: 69
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-592477099' + ' ' + 'flex justify-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('div', { style: { width: 1080 }, className: 'jsx-592477099' + ' ' + 'flex flex-wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
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
            lineNumber: 73
          }
        });
      }))), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
          return loadMorePosts();
        }, className: 'jsx-592477099',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
          lineNumber: 82
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '592477099',
        css: 'section.jsx-592477099{padding-bottom:20px}li.jsx-592477099{display:block;margin-bottom:10px}div.jsx-592477099{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}a.jsx-592477099{font-size:14px;margin-right:10px;text-decoration:none;padding-bottom:0;border:0}span.jsx-592477099{font-size:14px;margin-right:5px}ul.jsx-592477099{margin:0;padding:0}button.jsx-592477099:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:"";height:0;margin-right:5px;width:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRm9CLEFBR2lDLEFBR04sQUFJSyxBQUlKLEFBT0EsQUFJTixBQUlTLFNBSFIsS0FuQlMsQ0FRRCxBQU9ELElBS25CLENBdkJBLFlBbUJBLENBZkEsQUFRdUIscUJBQ0osaUJBQ1IsQUFZVSxTQVhyQixVQVk2QixHQXBCZCx3QkFxQjRDLGtEQXBCM0QsT0FxQmEsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9VbmlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby9hcHAtY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAyMDtcblxuZnVuY3Rpb24gVW5pTGlzdCAoeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBhbGxVbmlzLCBfYWxsVW5pc01ldGEgfSwgbG9hZE1vcmVQb3N0cyB9KSB7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBlbnRyaWVzLicgLz5cbiAgaWYgKGFsbFVuaXMgJiYgYWxsVW5pcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFVuaXMgX2FsbFVuaXNNZXRhPXtfYWxsVW5pc01ldGF9IGFsbFVuaXM9e2FsbFVuaXN9IGxvYWRpbmc9e2xvYWRpbmd9IGxvYWRNb3JlUG9zdHM9e2xvYWRNb3JlUG9zdHN9IC8+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY2xhc3MgVW5pcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2VhcmNoSW5wdXQgPSBudWxsO1xuICAgIHRoaXMubW9kYWwgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGFsbERhdGE6IFtdLFxuICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgIGluZGV4OiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUdsb2JhbEtleVByZXNzLCBmYWxzZSk7XG4gIH1cblxuICBfaGFuZGxlQ2FyZENsaWNrID0gKGUsIGluZGV4KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgc2hvd01vZGFsOiB0cnVlLFxuICAgICAgaW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVNb2RhbExlZnRDbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4IDw9IDAgPyBhbGxVbmlzLmxlbmd0aCAtIDEgOiB0aGlzLnN0YXRlLmluZGV4IC0gMTsgICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogaW5kZXggfSk7XG4gIH1cblxuICBfaGFuZGxlTW9kYWxSaWdodENsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuaW5kZXggPj0gYWxsVW5pcy5sZW5ndGggPyAwIDogdGhpcy5zdGF0ZS5pbmRleCArIDE7ICAgICBcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IGluZGV4IH0pO1xuICB9XG5cbiAgX2hhbmRsZU1vZGFsQ2xvc2VDbGljayA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG4gIH1cblxuICBfaGFuZGxlR2xvYmFsS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zaG93TW9kYWwpIHJldHVybjtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgdGhpcy5faGFuZGxlTW9kYWxMZWZ0Q2xpY2soKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU1vZGFsUmlnaHRDbGljaygpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhbGxVbmlzLCBfYWxsVW5pc01ldGEsIGxvYWRpbmcsIGxvYWRNb3JlUG9zdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gYWxsVW5pcy5sZW5ndGggPCBfYWxsVW5pc01ldGEuY291bnQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDEwODAgfX0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIHthbGxVbmlzLm1hcCgodW5pLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgPENhcmQgXG4gICAgICAgICAgICAgICAga2V5PXt1bmkuX2lkfVxuICAgICAgICAgICAgICAgIHVuaT17dW5pfVxuICAgICAgICAgICAgICAgIF9oYW5kbGVDYXJkQ2xpY2s9eyhldnQpID0+IHRoaXMuX2hhbmRsZUNhcmRDbGljayhldnQsIGluZGV4KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZVBvc3RzKCl9PiB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfSA8L2J1dHRvbj4gOiAnJ31cbiAgICAgICAgPE1vZGFsIFxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7IHRoaXMubW9kYWwgPSBlbDsgfX1cbiAgICAgICAgICBzaG93TW9kYWw9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxuICAgICAgICAgIHVuaT17YWxsVW5pc1t0aGlzLnN0YXRlLmluZGV4XX1cbiAgICAgICAgICBfaGFuZGxlTW9kYWxSaWdodENsaWNrPXt0aGlzLl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2t9XG4gICAgICAgICAgX2hhbmRsZU1vZGFsTGVmdENsaWNrPXt0aGlzLl9oYW5kbGVNb2RhbExlZnRDbGlja31cbiAgICAgICAgICBfaGFuZGxlTW9kYWxDbG9zZUNsaWNrPXt0aGlzLl9oYW5kbGVNb2RhbENsb3NlQ2xpY2t9XG4gICAgICAgICAgX2hhbmRsZUdsb2JhbENsaWNrPXt0aGlzLl9oYW5kbGVHbG9iYWxDbGlja31cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgYWxsVW5pcyA9IGdxbGBcbiAgcXVlcnkgYWxsVW5pcygkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgYWxsVW5pcyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgX2lkXG4gICAgICBuYW1lXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICB3ZWJzaXRlXG4gICAgICBjb3VudHJ5XG4gICAgfSxcbiAgICBfYWxsVW5pc01ldGEge1xuICAgICAgY291bnRcbiAgICB9XG4gIH1cbmBcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChVbmlMaXN0KVxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxVbmlzLCB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IDAsXG4gICAgICBmaXJzdDogUE9TVFNfUEVSX1BBR0VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiBkYXRhLmFsbFVuaXMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsVW5pczogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFVuaXMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxVbmlzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoVW5pTGlzdClcbiJdfQ== */\n/*@ sourceURL=components/UniList.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwiRXJyb3JNZXNzYWdlIiwiQ2FyZCIsIk1vZGFsIiwiUmVhY3QiLCJQT1NUU19QRVJfUEFHRSIsIlVuaUxpc3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiYWxsVW5pcyIsIl9hbGxVbmlzTWV0YSIsImxvYWRNb3JlUG9zdHMiLCJsZW5ndGgiLCJVbmlzIiwicHJvcHMiLCJfaGFuZGxlQ2FyZENsaWNrIiwiZSIsImluZGV4Iiwic2V0U3RhdGUiLCJzaG93TW9kYWwiLCJfaGFuZGxlTW9kYWxMZWZ0Q2xpY2siLCJzdGF0ZSIsIl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2siLCJfaGFuZGxlTW9kYWxDbG9zZUNsaWNrIiwiX2hhbmRsZUdsb2JhbEtleVByZXNzIiwia2V5Q29kZSIsInNlYXJjaElucHV0IiwibW9kYWwiLCJhbGxEYXRhIiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXJlTW9yZVBvc3RzIiwiY291bnQiLCJ3aWR0aCIsIm1hcCIsInVuaSIsIl9pZCIsImV2dCIsImVsIiwiX2hhbmRsZUdsb2JhbENsaWNrIiwiQ29tcG9uZW50Iiwib3B0aW9ucyIsInZhcmlhYmxlcyIsInNraXAiLCJmaXJzdCIsImZldGNoTW9yZSIsInVwZGF0ZVF1ZXJ5IiwicHJldmlvdXNSZXN1bHQiLCJmZXRjaE1vcmVSZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBSzs7QUFDZCxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7Ozs7Ozs7OztBQUVQLElBQU0saUJBQU4sQUFBdUI7O0FBRXZCLFNBQUEsQUFBUyxjQUE2RTt1QkFBbEUsQUFBa0U7TUFBMUQsQUFBMEQsb0JBQTFELEFBQTBEO01BQWpELEFBQWlELGtC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QSxBQUNHO0FBREg7aUJBQ0csQUFBUSxJQUFJLFVBQUEsQUFBQyxLQUFELEFBQU0sT0FBTjsrQkFDWCxBQUFDO2VBQ00sSUFEUCxBQUNXLEFBQ1Q7ZUFGRixBQUVPLEFBQ0w7NEJBQWtCLDBCQUFBLEFBQUMsS0FBRDttQkFBUyxPQUFBLEFBQUssaUJBQUwsQUFBc0IsS0FBL0IsQUFBUyxBQUEyQjtBQUh4RDs7c0JBQUE7d0JBRFcsQUFDWDtBQUFBO0FBQ0UsU0FERjtBQUpSLEFBQ0UsQUFDRSxBQUNHLEFBU0osMkNBQWUsY0FBQSxZQUFRLFNBQVMsbUJBQUE7aUJBQUEsQUFBTTtBQUF2QixzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtPQUFBLEVBQTBDLGVBQUEsQUFBVSxlQUFwRCxBQUFtRSxhQUFsRixBQUFlLE9BWmxCLEFBWThHLEFBQzVHLG9CQUFBLEFBQUM7YUFDTSxhQUFBLEFBQUMsSUFBTyxBQUFFO2lCQUFBLEFBQUssUUFBTCxBQUFhLEFBQUs7QUFEbkMsQUFFRTttQkFBVyxLQUFBLEFBQUssTUFGbEIsQUFFd0IsQUFDdEI7YUFBSyxRQUFRLEtBQUEsQUFBSyxNQUhwQixBQUdPLEFBQW1CLEFBQ3hCO2dDQUF3QixLQUoxQixBQUkrQixBQUM3QjsrQkFBdUIsS0FMekIsQUFLOEIsQUFDNUI7Z0NBQXdCLEtBTjFCLEFBTStCLEFBQzdCOzRCQUFvQixLQVB0QixBQU8yQjs7b0JBUDNCO3NCQWJGLEFBYUU7QUFBQTtBQUNFO2lCQWRKO2FBREYsQUFDRSxBQThESDtBQTlERzs7Ozs7RUFsRGEsZ0IsQUFBTTs7QUFtSHpCLElBQU0sVUFBQSxBQUFVLHNCQUFoQjs7QUFnQkE7QUFDQSxBQUNBOzRDQUFlLEFBQVE7OztZQUVSLEFBQ0gsQUFDTjthQUowQixBQUNyQixBQUNJLEFBRUYsQUFHWDtBQUxhLEFBQ1Q7QUFGSyxBQUNQO1NBS0ssc0JBQUE7UUFBQSxBQUFHLGFBQUgsQUFBRzs7WUFBWSxBQUVwQjtxQkFBZSx5QkFBTSxBQUNuQjtvQkFBTyxBQUFLOztrQkFFRixLQUFBLEFBQUssUUFGTyxBQUNULEFBQ1UsQUFFckI7QUFIVyxBQUNUO3VCQUVXLHFCQUFBLEFBQUMsdUJBQXdDO2dCQUF0QixBQUFzQix3QkFBdEIsQUFBc0IsQUFDcEQ7O2dCQUFJLENBQUosQUFBSyxpQkFBaUIsQUFDcEI7cUJBQUEsQUFBTyxBQUNSO0FBQ0Q7eUNBQU8sQUFBYyxJQUFkLEFBQWtCO0FBRXZCO2tFQUFhLGVBQWIsQUFBNEIsMkNBQVksZ0JBRjFDLEFBQU8sQUFBa0MsQUFFdkMsQUFBd0QsQUFFM0Q7QUFKMEMsQUFDdkMsYUFESztBQVJYLEFBQU8sQUFBZSxBQWN2QjtBQWR1QixBQUNwQixTQURLO0FBSEosQUFBZTtBQUFBLEFBQ3BCO0FBUlcsQUFBaUI7QUFBQSxBQUM5QixDQURhLEVBQWYsQUFBZSxBQTBCWiIsImZpbGUiOiJVbmlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby9hcHAtY2xpZW50In0=