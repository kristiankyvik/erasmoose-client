webpackHotUpdate(5,{

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(76);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(413);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(401);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(405);

var _ErrorMessage = __webpack_require__(515);

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

var _Card = __webpack_require__(516);

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kristiankyvik/code/serverless-graphql-apollo/with-apollo/components/UniList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allUnis($first: Int!, $skip: Int!) {\n    allUnis(first: $first, skip: $skip) {\n      _id\n      name\n      votes\n      url\n      website\n    },\n    _allUnisMeta {\n      count\n    }\n  }\n'], ['\n  query allUnis($first: Int!, $skip: Int!) {\n    allUnis(first: $first, skip: $skip) {\n      _id\n      name\n      votes\n      url\n      website\n    },\n    _allUnisMeta {\n      count\n    }\n  }\n']);

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
      lineNumber: 8
    }
  });
  if (allUnis && allUnis.length) {
    var areMorePosts = allUnis.length < _allUnisMeta.count;
    return _react2.default.createElement('section', {
      className: 'jsx-592477099' + ' ' + 'tc',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-592477099' + ' ' + 'flex justify-center',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, _react2.default.createElement('div', { style: { width: 1080 }, className: 'jsx-592477099' + ' ' + 'flex flex-wrap',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, allUnis.map(function (uni, index) {
      return _react2.default.createElement(_Card2.default, {
        key: uni.name,
        uni: uni,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      });
    }))), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
        return loadMorePosts();
      }, className: 'jsx-592477099',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', _react2.default.createElement(_style2.default, {
      styleId: '592477099',
      css: 'section.jsx-592477099{padding-bottom:20px}li.jsx-592477099{display:block;margin-bottom:10px}div.jsx-592477099{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}a.jsx-592477099{font-size:14px;margin-right:10px;text-decoration:none;padding-bottom:0;border:0}span.jsx-592477099{font-size:14px;margin-right:5px}ul.jsx-592477099{margin:0;padding:0}button.jsx-592477099:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:"";height:0;margin-right:5px;width:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBR2lDLEFBR04sQUFJSyxBQUlKLEFBT0EsQUFJTixBQUlTLFNBSFIsS0FuQlMsQ0FRRCxBQU9ELElBS25CLENBdkJBLFlBbUJBLENBZkEsQUFRdUIscUJBQ0osaUJBQ1IsQUFZVSxTQVhyQixVQVk2QixHQXBCZCx3QkFxQjRDLGtEQXBCM0QsT0FxQmEsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9VbmlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby93aXRoLWFwb2xsbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXG5cbmNvbnN0IFBPU1RTX1BFUl9QQUdFID0gMjBcblxuZnVuY3Rpb24gVW5pTGlzdCAoeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBhbGxVbmlzLCBfYWxsVW5pc01ldGEgfSwgbG9hZE1vcmVQb3N0cyB9KSB7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBlbnRyaWVzLicgLz5cbiAgaWYgKGFsbFVuaXMgJiYgYWxsVW5pcy5sZW5ndGgpIHtcbiAgICBjb25zdCBhcmVNb3JlUG9zdHMgPSBhbGxVbmlzLmxlbmd0aCA8IF9hbGxVbmlzTWV0YS5jb3VudFxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0Y1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAxMDgwIH19IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICB7YWxsVW5pcy5tYXAoKHVuaSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgICAgIGtleT17dW5pLm5hbWV9XG4gICAgICAgICAgICAgICAgdW5pPXt1bml9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2FyZU1vcmVQb3N0cyA/IDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT4ge2xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnU2hvdyBNb3JlJ30gPC9idXR0b24+IDogJyd9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggNHB4IDAgNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY29uc3QgYWxsVW5pcyA9IGdxbGBcbiAgcXVlcnkgYWxsVW5pcygkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgYWxsVW5pcyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgX2lkXG4gICAgICBuYW1lXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICB3ZWJzaXRlXG4gICAgfSxcbiAgICBfYWxsVW5pc01ldGEge1xuICAgICAgY291bnRcbiAgICB9XG4gIH1cbmBcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChVbmlMaXN0KVxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxVbmlzLCB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IDAsXG4gICAgICBmaXJzdDogUE9TVFNfUEVSX1BBR0VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiBkYXRhLmFsbFVuaXMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsVW5pczogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFVuaXMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxVbmlzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoVW5pTGlzdClcbiJdfQ== */\n/*@ sourceURL=components/UniList.js */'
    }));
  }
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, 'Loading');
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVW5pTGlzdC5qcyJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwiRXJyb3JNZXNzYWdlIiwiQ2FyZCIsIlBPU1RTX1BFUl9QQUdFIiwiVW5pTGlzdCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJhbGxVbmlzIiwiX2FsbFVuaXNNZXRhIiwibG9hZE1vcmVQb3N0cyIsImxlbmd0aCIsImFyZU1vcmVQb3N0cyIsImNvdW50Iiwid2lkdGgiLCJtYXAiLCJ1bmkiLCJpbmRleCIsIm5hbWUiLCJvcHRpb25zIiwidmFyaWFibGVzIiwic2tpcCIsImZpcnN0IiwicHJvcHMiLCJmZXRjaE1vcmUiLCJ1cGRhdGVRdWVyeSIsInByZXZpb3VzUmVzdWx0IiwiZmV0Y2hNb3JlUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBSzs7QUFDZCxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBVTs7Ozs7Ozs7OztBQUVqQixJQUFNLGlCQUFOLEFBQXVCOztBQUV2QixTQUFBLEFBQVMsY0FBNkU7dUJBQWxFLEFBQWtFO01BQTFELEFBQTBELG9CQUExRCxBQUEwRDtNQUFqRCxBQUFpRCxrQkFBakQsQUFBaUQ7TUFBMUMsQUFBMEMsb0JBQTFDLEFBQTBDO01BQWpDLEFBQWlDLHlCQUFqQyxBQUFpQztNQUFqQixBQUFpQixxQkFBakIsQUFBaUIsQUFDcEY7O01BQUEsQUFBSSw4QkFBYyxBQUFDLHdDQUFhLFNBQWQsQUFBc0I7Z0JBQXRCO2tCQUFQLEFBQU8sQUFDbEI7QUFEa0I7R0FBQSxDQUFQO01BQ1AsV0FBVyxRQUFmLEFBQXVCLFFBQVEsQUFDN0I7UUFBTSxlQUFlLFFBQUEsQUFBUSxTQUFTLGFBQXRDLEFBQW1ELEFBQ25EOzJCQUNFLGNBQUE7eUNBQUEsQUFBbUI7O2tCQUFuQjtvQkFBQSxBQUNFO0FBREY7QUFBQSxLQUFBLGtCQUNFLGNBQUE7eUNBQUEsQUFBZTs7a0JBQWY7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFkLEFBQVksQUFBUywyQ0FBckIsQUFBdUM7O2tCQUF2QztvQkFBQSxBQUNHO0FBREg7ZUFDRyxBQUFRLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBTSxPQUFOOzZCQUNYLEFBQUM7YUFDTSxJQURQLEFBQ1csQUFDVDthQUZGLEFBRU87O29CQUZQO3NCQURXLEFBQ1g7QUFBQTtBQUNFLE9BREY7QUFKUixBQUNFLEFBQ0UsQUFDRyxBQVFKLHlDQUFlLGNBQUEsWUFBUSxTQUFTLG1CQUFBO2VBQUEsQUFBTTtBQUF2QixvQkFBQTs7a0JBQUE7b0JBQUE7QUFBQTtLQUFBLEVBQTBDLGVBQUEsQUFBVSxlQUFwRCxBQUFtRSxhQUFsRixBQUFlLE9BWGxCLEFBVzhHO2VBWDlHO1dBREYsQUFDRSxBQW9ESDtBQXBERztBQXFESjt5QkFBTyxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsR0FBQSxFQUFQLEFBQU8sQUFDUjs7O0FBRUQsSUFBTSxVQUFBLEFBQVUsc0JBQWhCOztBQWVBO0FBQ0EsQUFDQTs0Q0FBZSxBQUFROzs7WUFFUixBQUNILEFBQ047YUFKMEIsQUFDckIsQUFDSSxBQUVGLEFBR1g7QUFMYSxBQUNUO0FBRkssQUFDUDtTQUtLLHNCQUFBO1FBQUEsQUFBRyxhQUFILEFBQUc7O1lBQVksQUFFcEI7cUJBQWUseUJBQU0sQUFDbkI7b0JBQU8sQUFBSzs7a0JBRUYsS0FBQSxBQUFLLFFBRk8sQUFDVCxBQUNVLEFBRXJCO0FBSFcsQUFDVDt1QkFFVyxxQkFBQSxBQUFDLHVCQUF3QztnQkFBdEIsQUFBc0Isd0JBQXRCLEFBQXNCLEFBQ3BEOztnQkFBSSxDQUFKLEFBQUssaUJBQWlCLEFBQ3BCO3FCQUFBLEFBQU8sQUFDUjtBQUNEO3lDQUFPLEFBQWMsSUFBZCxBQUFrQjtBQUV2QjtrRUFBYSxlQUFiLEFBQTRCLDJDQUFZLGdCQUYxQyxBQUFPLEFBQWtDLEFBRXZDLEFBQXdELEFBRTNEO0FBSjBDLEFBQ3ZDLGFBREs7QUFSWCxBQUFPLEFBQWUsQUFjdkI7QUFkdUIsQUFDcEIsU0FESztBQUhKLEFBQWU7QUFBQSxBQUNwQjtBQVJXLEFBQWlCO0FBQUEsQUFDOUIsQ0FEYSxFQUFmLEFBQWUsQUEwQloiLCJmaWxlIjoiVW5pTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL3NlcnZlcmxlc3MtZ3JhcGhxbC1hcG9sbG8vd2l0aC1hcG9sbG8ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kristiankyvik/code/serverless-graphql-apollo/with-apollo/components/UniList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kristiankyvik/code/serverless-graphql-apollo/with-apollo/components/UniList.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41NGM0NDVkYWE1MWJhZWIxOTE1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VbmlMaXN0LmpzPzdiNTFkMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAyMFxuXG5mdW5jdGlvbiBVbmlMaXN0ICh7IGRhdGE6IHsgbG9hZGluZywgZXJyb3IsIGFsbFVuaXMsIF9hbGxVbmlzTWV0YSB9LCBsb2FkTW9yZVBvc3RzIH0pIHtcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIGVudHJpZXMuJyAvPlxuICBpZiAoYWxsVW5pcyAmJiBhbGxVbmlzLmxlbmd0aCkge1xuICAgIGNvbnN0IGFyZU1vcmVQb3N0cyA9IGFsbFVuaXMubGVuZ3RoIDwgX2FsbFVuaXNNZXRhLmNvdW50XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDEwODAgfX0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIHthbGxVbmlzLm1hcCgodW5pLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgPENhcmQgXG4gICAgICAgICAgICAgICAga2V5PXt1bmkubmFtZX1cbiAgICAgICAgICAgICAgICB1bmk9e3VuaX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZVBvc3RzKCl9PiB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfSA8L2J1dHRvbj4gOiAnJ31cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxufVxuXG5jb25zdCBhbGxVbmlzID0gZ3FsYFxuICBxdWVyeSBhbGxVbmlzKCRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICBhbGxVbmlzKGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBfaWRcbiAgICAgIG5hbWVcbiAgICAgIHZvdGVzXG4gICAgICB1cmxcbiAgICAgIHdlYnNpdGVcbiAgICB9LFxuICAgIF9hbGxVbmlzTWV0YSB7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfVxuYFxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFVuaUxpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFVuaXMsIHtcbiAgb3B0aW9uczoge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogMCxcbiAgICAgIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsVW5pcy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNSZXN1bHRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXG4gICAgICAgICAgICBhbGxVbmlzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsVW5pcywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFVuaXNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KShVbmlMaXN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9VbmlMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUZBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFvREE7QUFwREE7QUFxREE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBR0E7QUFDQTtBQWNBO0FBRUE7QUFBQTs7O0FBSUE7QUFHQTtBQUpBO0FBREE7QUFLQTtBQUFBOztBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFLQTtBQWJBO0FBSkE7QUFDQTtBQVJBO0FBQ0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==