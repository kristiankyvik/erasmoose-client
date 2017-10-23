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
      console.log("LOADING", loading);
      return _react2.default.createElement('section', {
        className: 'jsx-747285922' + ' ' + 'tc',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-747285922' + ' ' + 'flex justify-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('div', { style: { width: 1080 }, className: 'jsx-747285922' + ' ' + 'flex flex-wrap',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
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
            lineNumber: 78
          }
        });
      }), areMorePosts ? _react2.default.createElement('div', { onClick: function onClick() {
          return loadMorePosts();
        }, className: 'jsx-747285922' + ' ' + 'flex-auto ma2 ur-btn tc justify-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '')), _react2.default.createElement(_Modal2.default, {
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
          lineNumber: 87
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '747285922',
        css: 'section.jsx-747285922{padding-bottom:20px;}li.jsx-747285922{display:block;margin-bottom:10px;}div.jsx-747285922{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-747285922{font-size:14px;margin-right:10px;text-decoration:none;padding-bottom:0;border:0;}span.jsx-747285922{font-size:14px;margin-right:5px;}ul.jsx-747285922{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRm9CLEFBR2lDLEFBR04sQUFJSyxBQUlKLEFBT0EsQUFJTixTQUNDLEtBbkJTLENBUUQsQUFPRCxJQUtuQixDQXZCQSxZQW1CQSxDQWZBLEFBUXVCLHFCQUNKLGlCQUNSLFNBQ1gsYUFSZSwwRUFDZiIsImZpbGUiOiJjb21wb25lbnRzL1VuaUxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tyaXN0aWFua3l2aWsvY29kZS9lcmFzbW9vc2UvYXBwLWNsaWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBPU1RTX1BFUl9QQUdFID0gMzI7XG5cbmZ1bmN0aW9uIFVuaUxpc3QgKHsgZGF0YTogeyBsb2FkaW5nLCBlcnJvciwgYWxsVW5pcywgX2FsbFVuaXNNZXRhIH0sIGxvYWRNb3JlUG9zdHMgfSkge1xuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9J0Vycm9yIGxvYWRpbmcgZW50cmllcy4nIC8+XG4gIGlmIChhbGxVbmlzICYmIGFsbFVuaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxVbmlzIF9hbGxVbmlzTWV0YT17X2FsbFVuaXNNZXRhfSBhbGxVbmlzPXthbGxVbmlzfSBsb2FkaW5nPXtsb2FkaW5nfSBsb2FkTW9yZVBvc3RzPXtsb2FkTW9yZVBvc3RzfSAvPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmNsYXNzIFVuaXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNlYXJjaElucHV0ID0gbnVsbDtcbiAgICB0aGlzLm1vZGFsID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBhbGxEYXRhOiBbXSxcbiAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICBpbmRleDogMFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVHbG9iYWxLZXlQcmVzcywgZmFsc2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlR2xvYmFsS2V5UHJlc3MsIGZhbHNlKTtcbiAgfVxuXG4gIF9oYW5kbGVDYXJkQ2xpY2sgPSAoZSwgaW5kZXgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICBzaG93TW9kYWw6IHRydWUsXG4gICAgICBpbmRleFxuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZU1vZGFsTGVmdENsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuaW5kZXggPD0gMCA/IGFsbFVuaXMubGVuZ3RoIC0gMSA6IHRoaXMuc3RhdGUuaW5kZXggLSAxOyAgICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBpbmRleCB9KTtcbiAgfVxuXG4gIF9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5pbmRleCA+PSBhbGxVbmlzLmxlbmd0aCA/IDAgOiB0aGlzLnN0YXRlLmluZGV4ICsgMTsgICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogaW5kZXggfSk7XG4gIH1cblxuICBfaGFuZGxlTW9kYWxDbG9zZUNsaWNrID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcbiAgfVxuXG4gIF9oYW5kbGVHbG9iYWxLZXlQcmVzcyA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dNb2RhbCkgcmV0dXJuO1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICB0aGlzLl9oYW5kbGVNb2RhbExlZnRDbGljaygpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgdGhpcy5faGFuZGxlTW9kYWxSaWdodENsaWNrKCk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFsbFVuaXMsIF9hbGxVbmlzTWV0YSwgbG9hZGluZywgbG9hZE1vcmVQb3N0cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhcmVNb3JlUG9zdHMgPSBhbGxVbmlzLmxlbmd0aCA8IF9hbGxVbmlzTWV0YS5jb3VudDtcbiAgICBjb25zb2xlLmxvZyhcIkxPQURJTkdcIiwgbG9hZGluZyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDEwODAgfX0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIHthbGxVbmlzLm1hcCgodW5pLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgPENhcmQgXG4gICAgICAgICAgICAgICAga2V5PXt1bmkuX2lkfVxuICAgICAgICAgICAgICAgIHVuaT17dW5pfVxuICAgICAgICAgICAgICAgIF9oYW5kbGVDYXJkQ2xpY2s9eyhldnQpID0+IHRoaXMuX2hhbmRsZUNhcmRDbGljayhldnQsIGluZGV4KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7YXJlTW9yZVBvc3RzID8gPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG8gbWEyIHVyLWJ0biB0YyBqdXN0aWZ5LWNlbnRlclwiIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlUG9zdHMoKX0+IHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1Nob3cgTW9yZSd9IDwvZGl2PiA6ICcnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsIFxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7IHRoaXMubW9kYWwgPSBlbDsgfX1cbiAgICAgICAgICBzaG93TW9kYWw9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxuICAgICAgICAgIHVuaT17YWxsVW5pc1t0aGlzLnN0YXRlLmluZGV4XX1cbiAgICAgICAgICBfaGFuZGxlTW9kYWxSaWdodENsaWNrPXt0aGlzLl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2t9XG4gICAgICAgICAgX2hhbmRsZU1vZGFsTGVmdENsaWNrPXt0aGlzLl9oYW5kbGVNb2RhbExlZnRDbGlja31cbiAgICAgICAgICBfaGFuZGxlTW9kYWxDbG9zZUNsaWNrPXt0aGlzLl9oYW5kbGVNb2RhbENsb3NlQ2xpY2t9XG4gICAgICAgICAgX2hhbmRsZUdsb2JhbENsaWNrPXt0aGlzLl9oYW5kbGVHbG9iYWxDbGlja31cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBhbGxVbmlzID0gZ3FsYFxuICBxdWVyeSBhbGxVbmlzKCRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICBhbGxVbmlzKGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBfaWRcbiAgICAgIG5hbWVcbiAgICAgIHZvdGVzXG4gICAgICB1cmxcbiAgICAgIHdlYnNpdGVcbiAgICAgIGNvdW50cnlcbiAgICB9LFxuICAgIF9hbGxVbmlzTWV0YSB7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfVxuYFxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFVuaUxpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFVuaXMsIHtcbiAgb3B0aW9uczoge1xuICAgIG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZTogdHJ1ZSxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IDAsXG4gICAgICBmaXJzdDogUE9TVFNfUEVSX1BBR0VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiBkYXRhLmFsbFVuaXMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsVW5pczogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFVuaXMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxVbmlzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoVW5pTGlzdClcbiJdfQ== */\n/*@ sourceURL=components/UniList.js */'
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
    notifyOnNetworkStatusChange: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwiRXJyb3JNZXNzYWdlIiwiQ2FyZCIsIk1vZGFsIiwiUmVhY3QiLCJQT1NUU19QRVJfUEFHRSIsIlVuaUxpc3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiYWxsVW5pcyIsIl9hbGxVbmlzTWV0YSIsImxvYWRNb3JlUG9zdHMiLCJsZW5ndGgiLCJVbmlzIiwicHJvcHMiLCJfaGFuZGxlQ2FyZENsaWNrIiwiZSIsImluZGV4Iiwic2V0U3RhdGUiLCJzaG93TW9kYWwiLCJfaGFuZGxlTW9kYWxMZWZ0Q2xpY2siLCJzdGF0ZSIsIl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2siLCJfaGFuZGxlTW9kYWxDbG9zZUNsaWNrIiwiX2hhbmRsZUdsb2JhbEtleVByZXNzIiwia2V5Q29kZSIsInNlYXJjaElucHV0IiwibW9kYWwiLCJhbGxEYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFyZU1vcmVQb3N0cyIsImNvdW50IiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwibWFwIiwidW5pIiwiX2lkIiwiZXZ0IiwiZWwiLCJfaGFuZGxlR2xvYmFsQ2xpY2siLCJDb21wb25lbnQiLCJvcHRpb25zIiwibm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlIiwidmFyaWFibGVzIiwic2tpcCIsImZpcnN0IiwiZmV0Y2hNb3JlIiwidXBkYXRlUXVlcnkiLCJwcmV2aW91c1Jlc3VsdCIsImZldGNoTW9yZVJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFLOztBQUNkLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7Ozs7Ozs7O0FBRVAsSUFBTSxpQkFBTixBQUF1Qjs7QUFFdkIsU0FBQSxBQUFTLGNBQTZFO3VCQUFsRSxBQUFrRTtNQUExRCxBQUEwRCxvQkFBMUQsQUFBMEQ7TUFBakQsQUFBaUQsa0JBQWpELEFBQWlEO01BQTFDLEFBQTBDLG9CQUExQyxBQUEwQztNQUFqQyxBQUFpQyx5QkFBakMsQUFBaUM7TUFBakIsQUFBaUIscUJBQWpCLEFBQWlCLEFBQ3BGOztNQUFBLEFBQUksOEJBQWMsQUFBQyx3Q0FBYSxTQUFkLEFBQXNCO2dCQUF0QjtrQkFBUCxBQUFPLEFBQ2xCO0FBRGtCO0dBQUEsQ0FBUDtNQUNQLFdBQVcsUUFBZixBQUF1QixRQUFRLEFBQzdCO3lDQUNFLEFBQUMsUUFBSyxjQUFOLEFBQW9CLGNBQWMsU0FBbEMsQUFBMkMsU0FBUyxTQUFwRCxBQUE2RCxTQUFTLGVBQXRFLEFBQXFGO2tCQUFyRjtvQkFERixBQUNFLEFBRUg7QUFGRztLQUFBO0FBR0o7eUJBQU8sY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEdBQUEsRUFBUCxBQUFPLEFBQ1I7OztJLEFBRUs7Z0NBQ0o7O2dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0lBQUEsQUFDWDs7VUFEVyxBQW9CbkIsbUJBQW1CLFVBQUEsQUFBQyxHQUFELEFBQUksT0FBVSxBQUMvQjtZQUFBLEFBQUs7bUJBQVMsQUFDRCxBQUNYO2VBRkYsQUFBYyxBQUlmO0FBSmUsQUFDWjtBQXRCZTs7VUFBQSxBQTJCbkIsd0JBQXdCLFVBQUEsQUFBQyxHQUFNLEFBQzdCO1VBQU0sUUFBUSxNQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxRQUFBLEFBQVEsU0FBaEMsQUFBeUMsSUFBSSxNQUFBLEFBQUssTUFBTCxBQUFXLFFBQXRFLEFBQThFLEFBQzlFO1lBQUEsQUFBSyxTQUFTLEVBQUUsT0FBaEIsQUFBYyxBQUFTLEFBQ3hCO0FBOUJrQjs7VUFBQSxBQWdDbkIseUJBQXlCLFVBQUEsQUFBQyxHQUFNLEFBQzlCO1VBQU0sUUFBUSxNQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsUUFBcEIsQUFBNEIsU0FBNUIsQUFBcUMsSUFBSSxNQUFBLEFBQUssTUFBTCxBQUFXLFFBQWxFLEFBQTBFLEFBQzFFO1lBQUEsQUFBSyxTQUFTLEVBQUUsT0FBaEIsQUFBYyxBQUFTLEFBQ3hCO0FBbkNrQjs7VUFBQSxBQXFDbkIseUJBQXlCLFVBQUEsQUFBQyxHQUFNLEFBQzlCO1lBQUEsQUFBSyxTQUFTLEVBQUUsV0FBaEIsQUFBYyxBQUFhLEFBQzVCO0FBdkNrQjs7VUFBQSxBQXlDbkIsd0JBQXdCLFVBQUEsQUFBQyxHQUFNLEFBQzdCO1VBQUksQ0FBQyxNQUFBLEFBQUssTUFBVixBQUFnQixXQUFXLEFBQzNCO1VBQUksRUFBQSxBQUFFLFlBQU4sQUFBa0IsSUFBSSxBQUNwQjtjQUFBLEFBQUssQUFDTjtBQUZELGFBRU8sSUFBSSxFQUFBLEFBQUUsWUFBTixBQUFrQixJQUFJLEFBQzNCO2NBQUEsQUFBSyxBQUNOO0FBQ0Y7QUFoRGtCLEFBRWpCOztVQUFBLEFBQUssY0FBTCxBQUFtQixBQUNuQjtVQUFBLEFBQUssUUFBTCxBQUFhLEFBQ2I7VUFBQSxBQUFLO1lBQVEsQUFDTCxBQUNOO2VBRlcsQUFFRixBQUNUO2lCQUhXLEFBR0EsQUFDWDthQVJlLEFBSWpCLEFBQWEsQUFJSjtBQUpJLEFBQ1g7V0FLSDs7Ozs7d0NBRW1CLEFBQ2xCO2VBQUEsQUFBUyxpQkFBVCxBQUEwQixXQUFXLEtBQXJDLEFBQTBDLHVCQUExQyxBQUFpRSxBQUNsRTs7OzsyQ0FFc0IsQUFDckI7ZUFBQSxBQUFTLG9CQUFULEFBQTZCLFdBQVcsS0FBeEMsQUFBNkMsdUJBQTdDLEFBQW9FLEFBQ3JFOzs7OzZCQStCUTttQkFBQTs7bUJBQ21ELEtBRG5ELEFBQ3dEO1VBRHhELEFBQ0MsaUJBREQsQUFDQztVQURELEFBQ1Usc0JBRFYsQUFDVTtVQURWLEFBQ3dCLGlCQUR4QixBQUN3QjtVQUR4QixBQUNpQyx1QkFEakMsQUFDaUMsQUFDeEM7O1VBQU0sZUFBZSxRQUFBLEFBQVEsU0FBUyxhQUF0QyxBQUFtRCxBQUNuRDtjQUFBLEFBQVEsSUFBUixBQUFZLFdBQVosQUFBdUIsQUFDdkI7NkJBQ0UsY0FBQTsyQ0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFNBQUssT0FBTyxFQUFFLE9BQWQsQUFBWSxBQUFTLDJDQUFyQixBQUF1Qzs7b0JBQXZDO3NCQUFBLEFBQ0c7QUFESDtpQkFDRyxBQUFRLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBTSxPQUFOOytCQUNYLEFBQUM7ZUFDTSxJQURQLEFBQ1csQUFDVDtlQUZGLEFBRU8sQUFDTDs0QkFBa0IsMEJBQUEsQUFBQyxLQUFEO21CQUFTLE9BQUEsQUFBSyxpQkFBTCxBQUFzQixLQUEvQixBQUFTLEFBQTJCO0FBSHhEOztzQkFBQTt3QkFEVyxBQUNYO0FBQUE7QUFDRSxTQURGO0FBRkosQUFDRyxBQU9BLHlDQUFlLGNBQUEsU0FBd0QsU0FBUyxtQkFBQTtpQkFBQSxBQUFNO0FBQXZFLDhDQUFBLEFBQWU7O29CQUFmO3NCQUFBO0FBQUE7T0FBQSxFQUEwRixlQUFBLEFBQVUsZUFBcEcsQUFBbUgsYUFBbEksQUFBZSxPQVZ0QixBQUNFLEFBQ0UsQUFRMkosQUFHN0osc0JBQUEsQUFBQzthQUNNLGFBQUEsQUFBQyxJQUFPLEFBQUU7aUJBQUEsQUFBSyxRQUFMLEFBQWEsQUFBSztBQURuQyxBQUVFO21CQUFXLEtBQUEsQUFBSyxNQUZsQixBQUV3QixBQUN0QjthQUFLLFFBQVEsS0FBQSxBQUFLLE1BSHBCLEFBR08sQUFBbUIsQUFDeEI7Z0NBQXdCLEtBSjFCLEFBSStCLEFBQzdCOytCQUF1QixLQUx6QixBQUs4QixBQUM1QjtnQ0FBd0IsS0FOMUIsQUFNK0IsQUFDN0I7NEJBQW9CLEtBUHRCLEFBTzJCOztvQkFQM0I7c0JBYkYsQUFhRTtBQUFBO0FBQ0U7aUJBZEo7YUFERixBQUNFLEFBb0RIO0FBcERHOzs7OztFQXZEYSxnQixBQUFNOztBQThHekIsSUFBTSxVQUFBLEFBQVUsc0JBQWhCOztBQWdCQTtBQUNBLEFBQ0E7NENBQWUsQUFBUTs7aUNBQ1osQUFDc0IsQUFDN0I7O1lBQVcsQUFDSCxBQUNOO2FBTDBCLEFBQ3JCLEFBRUksQUFFRixBQUdYO0FBTGEsQUFDVDtBQUhLLEFBQ1A7U0FNSyxzQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHOztZQUFZLEFBRXBCO3FCQUFlLHlCQUFNLEFBQ25CO29CQUFPLEFBQUs7O2tCQUVGLEtBQUEsQUFBSyxRQUZPLEFBQ1QsQUFDVSxBQUVyQjtBQUhXLEFBQ1Q7dUJBRVcscUJBQUEsQUFBQyx1QkFBd0M7Z0JBQXRCLEFBQXNCLHdCQUF0QixBQUFzQixBQUNwRDs7Z0JBQUksQ0FBSixBQUFLLGlCQUFpQixBQUNwQjtxQkFBQSxBQUFPLEFBQ1I7QUFDRDt5Q0FBTyxBQUFjLElBQWQsQUFBa0I7QUFFdkI7a0VBQWEsZUFBYixBQUE0QiwyQ0FBWSxnQkFGMUMsQUFBTyxBQUFrQyxBQUV2QyxBQUF3RCxBQUUzRDtBQUowQyxBQUN2QyxhQURLO0FBUlgsQUFBTyxBQUFlLEFBY3ZCO0FBZHVCLEFBQ3BCLFNBREs7QUFISixBQUFlO0FBQUEsQUFDcEI7QUFUVyxBQUFpQjtBQUFBLEFBQzlCLENBRGEsRUFBZixBQUFlLEFBMkJaIiwiZmlsZSI6IlVuaUxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tyaXN0aWFua3l2aWsvY29kZS9lcmFzbW9vc2UvYXBwLWNsaWVudCJ9