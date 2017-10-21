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
        css: 'section.jsx-747285922{padding-bottom:20px;}li.jsx-747285922{display:block;margin-bottom:10px;}div.jsx-747285922{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-747285922{font-size:14px;margin-right:10px;text-decoration:none;padding-bottom:0;border:0;}span.jsx-747285922{font-size:14px;margin-right:5px;}ul.jsx-747285922{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Rm9CLEFBR2lDLEFBR04sQUFJSyxBQUlKLEFBT0EsQUFJTixTQUNDLEtBbkJTLENBUUQsQUFPRCxJQUtuQixDQXZCQSxZQW1CQSxDQWZBLEFBUXVCLHFCQUNKLGlCQUNSLFNBQ1gsYUFSZSwwRUFDZiIsImZpbGUiOiJjb21wb25lbnRzL1VuaUxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tyaXN0aWFua3l2aWsvY29kZS9lcmFzbW9vc2UvYXBwLWNsaWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBPU1RTX1BFUl9QQUdFID0gMzI7XG5cbmZ1bmN0aW9uIFVuaUxpc3QgKHsgZGF0YTogeyBsb2FkaW5nLCBlcnJvciwgYWxsVW5pcywgX2FsbFVuaXNNZXRhIH0sIGxvYWRNb3JlUG9zdHMgfSkge1xuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9J0Vycm9yIGxvYWRpbmcgZW50cmllcy4nIC8+XG4gIGlmIChhbGxVbmlzICYmIGFsbFVuaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxVbmlzIF9hbGxVbmlzTWV0YT17X2FsbFVuaXNNZXRhfSBhbGxVbmlzPXthbGxVbmlzfSBsb2FkaW5nPXtsb2FkaW5nfSBsb2FkTW9yZVBvc3RzPXtsb2FkTW9yZVBvc3RzfSAvPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmNsYXNzIFVuaXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNlYXJjaElucHV0ID0gbnVsbDtcbiAgICB0aGlzLm1vZGFsID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBhbGxEYXRhOiBbXSxcbiAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICBpbmRleDogMFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVHbG9iYWxLZXlQcmVzcywgZmFsc2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlR2xvYmFsS2V5UHJlc3MsIGZhbHNlKTtcbiAgfVxuXG4gIF9oYW5kbGVDYXJkQ2xpY2sgPSAoZSwgaW5kZXgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICBzaG93TW9kYWw6IHRydWUsXG4gICAgICBpbmRleFxuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZU1vZGFsTGVmdENsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuaW5kZXggPD0gMCA/IGFsbFVuaXMubGVuZ3RoIC0gMSA6IHRoaXMuc3RhdGUuaW5kZXggLSAxOyAgICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBpbmRleCB9KTtcbiAgfVxuXG4gIF9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5pbmRleCA+PSBhbGxVbmlzLmxlbmd0aCA/IDAgOiB0aGlzLnN0YXRlLmluZGV4ICsgMTsgICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogaW5kZXggfSk7XG4gIH1cblxuICBfaGFuZGxlTW9kYWxDbG9zZUNsaWNrID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcbiAgfVxuXG4gIF9oYW5kbGVHbG9iYWxLZXlQcmVzcyA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dNb2RhbCkgcmV0dXJuO1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICB0aGlzLl9oYW5kbGVNb2RhbExlZnRDbGljaygpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgdGhpcy5faGFuZGxlTW9kYWxSaWdodENsaWNrKCk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFsbFVuaXMsIF9hbGxVbmlzTWV0YSwgbG9hZGluZywgbG9hZE1vcmVQb3N0cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhcmVNb3JlUG9zdHMgPSBhbGxVbmlzLmxlbmd0aCA8IF9hbGxVbmlzTWV0YS5jb3VudDtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMTA4MCB9fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAge2FsbFVuaXMubWFwKCh1bmksIGluZGV4KSA9PlxuICAgICAgICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgICAgICBrZXk9e3VuaS5faWR9XG4gICAgICAgICAgICAgICAgdW5pPXt1bml9XG4gICAgICAgICAgICAgICAgX2hhbmRsZUNhcmRDbGljaz17KGV2dCkgPT4gdGhpcy5faGFuZGxlQ2FyZENsaWNrKGV2dCwgaW5kZXgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthcmVNb3JlUG9zdHMgPyA8YnV0dG9uIGNsYXNzTmFtZT1cInVyLWJ0blwiIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlUG9zdHMoKX0+IHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1Nob3cgTW9yZSd9IDwvYnV0dG9uPiA6ICcnfVxuICAgICAgICA8TW9kYWwgXG4gICAgICAgICAgcmVmPXsoZWwpID0+IHsgdGhpcy5tb2RhbCA9IGVsOyB9fVxuICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XG4gICAgICAgICAgdW5pPXthbGxVbmlzW3RoaXMuc3RhdGUuaW5kZXhdfVxuICAgICAgICAgIF9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsUmlnaHRDbGlja31cbiAgICAgICAgICBfaGFuZGxlTW9kYWxMZWZ0Q2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsTGVmdENsaWNrfVxuICAgICAgICAgIF9oYW5kbGVNb2RhbENsb3NlQ2xpY2s9e3RoaXMuX2hhbmRsZU1vZGFsQ2xvc2VDbGlja31cbiAgICAgICAgICBfaGFuZGxlR2xvYmFsQ2xpY2s9e3RoaXMuX2hhbmRsZUdsb2JhbENsaWNrfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IGFsbFVuaXMgPSBncWxgXG4gIHF1ZXJ5IGFsbFVuaXMoJGZpcnN0OiBJbnQhLCAkc2tpcDogSW50ISkge1xuICAgIGFsbFVuaXMoZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcbiAgICAgIF9pZFxuICAgICAgbmFtZVxuICAgICAgdm90ZXNcbiAgICAgIHVybFxuICAgICAgd2Vic2l0ZVxuICAgICAgY291bnRyeVxuICAgIH0sXG4gICAgX2FsbFVuaXNNZXRhIHtcbiAgICAgIGNvdW50XG4gICAgfVxuICB9XG5gXG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoVW5pTGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsVW5pcywge1xuICBvcHRpb25zOiB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBza2lwOiAwLFxuICAgICAgZmlyc3Q6IFBPU1RTX1BFUl9QQUdFXG4gICAgfVxuICB9LFxuICBwcm9wczogKHsgZGF0YSB9KSA9PiAoe1xuICAgIGRhdGEsXG4gICAgbG9hZE1vcmVQb3N0czogKCkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEuZmV0Y2hNb3JlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgc2tpcDogZGF0YS5hbGxVbmlzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1Jlc3VsdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGFsbFVuaXM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxVbmlzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsVW5pc11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pKFVuaUxpc3QpXG4iXX0= */\n/*@ sourceURL=components/UniList.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwiRXJyb3JNZXNzYWdlIiwiQ2FyZCIsIk1vZGFsIiwiUmVhY3QiLCJQT1NUU19QRVJfUEFHRSIsIlVuaUxpc3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiYWxsVW5pcyIsIl9hbGxVbmlzTWV0YSIsImxvYWRNb3JlUG9zdHMiLCJsZW5ndGgiLCJVbmlzIiwicHJvcHMiLCJfaGFuZGxlQ2FyZENsaWNrIiwiZSIsImluZGV4Iiwic2V0U3RhdGUiLCJzaG93TW9kYWwiLCJfaGFuZGxlTW9kYWxMZWZ0Q2xpY2siLCJzdGF0ZSIsIl9oYW5kbGVNb2RhbFJpZ2h0Q2xpY2siLCJfaGFuZGxlTW9kYWxDbG9zZUNsaWNrIiwiX2hhbmRsZUdsb2JhbEtleVByZXNzIiwia2V5Q29kZSIsInNlYXJjaElucHV0IiwibW9kYWwiLCJhbGxEYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFyZU1vcmVQb3N0cyIsImNvdW50Iiwid2lkdGgiLCJtYXAiLCJ1bmkiLCJfaWQiLCJldnQiLCJlbCIsIl9oYW5kbGVHbG9iYWxDbGljayIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJ2YXJpYWJsZXMiLCJza2lwIiwiZmlyc3QiLCJmZXRjaE1vcmUiLCJ1cGRhdGVRdWVyeSIsInByZXZpb3VzUmVzdWx0IiwiZmV0Y2hNb3JlUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQUs7O0FBQ2QsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7Ozs7Ozs7QUFFUCxJQUFNLGlCQUFOLEFBQXVCOztBQUV2QixTQUFBLEFBQVMsY0FBNkU7dUJBQWxFLEFBQWtFO01BQTFELEFBQTBELG9CQUExRCxB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Q1A7U0FLSyxzQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHOztZQUFZLEFBRXBCO3FCQUFlLHlCQUFNLEFBQ25CO29CQUFPLEFBQUs7O2tCQUVGLEtBQUEsQUFBSyxRQUZPLEFBQ1QsQUFDVSxBQUVyQjtBQUhXLEFBQ1Q7dUJBRVcscUJBQUEsQUFBQyx1QkFBd0M7Z0JBQXRCLEFBQXNCLHdCQUF0QixBQUFzQixBQUNwRDs7Z0JBQUksQ0FBSixBQUFLLGlCQUFpQixBQUNwQjtxQkFBQSxBQUFPLEFBQ1I7QUFDRDt5Q0FBTyxBQUFjLElBQWQsQUFBa0I7QUFFdkI7a0VBQWEsZUFBYixBQUE0QiwyQ0FBWSxnQkFGMUMsQUFBTyxBQUFrQyxBQUV2QyxBQUF3RCxBQUUzRDtBQUowQyxBQUN2QyxhQURLO0FBUlgsQUFBTyxBQUFlLEFBY3ZCO0FBZHVCLEFBQ3BCLFNBREs7QUFISixBQUFlO0FBQUEsQUFDcEI7QUFSVyxBQUFpQjtBQUFBLEFBQzlCLENBRGEsRUFBZixBQUFlLEFBMEJaIiwiZmlsZSI6IlVuaUxpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tyaXN0aWFua3l2aWsvY29kZS9lcmFzbW9vc2UvYXBwLWNsaWVudCJ9