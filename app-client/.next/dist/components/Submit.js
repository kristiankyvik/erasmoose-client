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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/patrickvonplaten/unirank/app-client/components/Submit.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n'], ['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n']);

function Submit(_ref) {
  var createPost = _ref.createPost;

  function handleSubmit(e) {
    e.preventDefault();

    var title = e.target.elements.title.value;
    var url = e.target.elements.url.value;

    if (title === '' || url === '') {
      window.alert('Both fields are required.');
      return false;
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = 'http://' + url;
    }

    createPost(title, url);

    // reset form
    e.target.elements.title.value = '';
    e.target.elements.url.value = '';
  }

  return _react2.default.createElement('form', { onSubmit: handleSubmit, className: 'jsx-4286934451',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-4286934451',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Submit'), _react2.default.createElement('input', { placeholder: 'title', name: 'title', className: 'jsx-4286934451',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('input', { placeholder: 'url', name: 'url', className: 'jsx-4286934451',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('button', { type: 'submit', className: 'jsx-4286934451',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Submit'), _react2.default.createElement(_style2.default, {
    styleId: '4286934451',
    css: 'form.jsx-4286934451{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}h1.jsx-4286934451{font-size:20px;}input.jsx-4286934451{display:block;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHMkMsQUFLakIsQUFHRCxjQUNLLENBSHJCLGlCQUxzQixDQVN0QixtQkFScUIsbUJBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvU3VibWl0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYXRyaWNrdm9ucGxhdGVuL3VuaXJhbmsvYXBwLWNsaWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZnVuY3Rpb24gU3VibWl0ICh7IGNyZWF0ZVBvc3QgfSkge1xuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LmVsZW1lbnRzLnRpdGxlLnZhbHVlXG4gICAgbGV0IHVybCA9IGUudGFyZ2V0LmVsZW1lbnRzLnVybC52YWx1ZVxuXG4gICAgaWYgKHRpdGxlID09PSAnJyB8fCB1cmwgPT09ICcnKSB7XG4gICAgICB3aW5kb3cuYWxlcnQoJ0JvdGggZmllbGRzIGFyZSByZXF1aXJlZC4nKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gcHJlcGVuZCBodHRwIGlmIG1pc3NpbmcgZnJvbSB1cmxcbiAgICBpZiAoIXVybC5tYXRjaCgvXlthLXpBLVpdKzpcXC9cXC8vKSkge1xuICAgICAgdXJsID0gYGh0dHA6Ly8ke3VybH1gXG4gICAgfVxuXG4gICAgY3JlYXRlUG9zdCh0aXRsZSwgdXJsKVxuXG4gICAgLy8gcmVzZXQgZm9ybVxuICAgIGUudGFyZ2V0LmVsZW1lbnRzLnRpdGxlLnZhbHVlID0gJydcbiAgICBlLnRhcmdldC5lbGVtZW50cy51cmwudmFsdWUgPSAnJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMT5TdWJtaXQ8L2gxPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd0aXRsZScgbmFtZT0ndGl0bGUnIC8+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3VybCcgbmFtZT0ndXJsJyAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgY3JlYXRlUG9zdCA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlUG9zdCgkdGl0bGU6IFN0cmluZyEsICR1cmw6IFN0cmluZyEpIHtcbiAgICBjcmVhdGVQb3N0KHRpdGxlOiAkdGl0bGUsIHVybDogJHVybCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBjcmVhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChjcmVhdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBtdXRhdGUgfSkgPT4gKHtcbiAgICBjcmVhdGVQb3N0OiAodGl0bGUsIHVybCkgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyB0aXRsZSwgdXJsIH0sXG4gICAgICB1cGRhdGVRdWVyaWVzOiB7XG4gICAgICAgIGFsbFBvc3RzOiAocHJldmlvdXNSZXN1bHQsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBtdXRhdGlvblJlc3VsdC5kYXRhLmNyZWF0ZVBvc3RcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbbmV3UG9zdCwgLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShTdWJtaXQpXG4iXX0= */\n/*@ sourceURL=components/Submit.js */'
  }));
}

var createPost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(createPost, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createPost: function createPost(title, url) {
        return mutate({
          variables: { title: title, url: url },
          updateQueries: {
            allPosts: function allPosts(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newPost = mutationResult.data.createPost;
              return (0, _assign2.default)({}, previousResult, {
                // Append the new post
                allPosts: [newPost].concat((0, _toConsumableArray3.default)(previousResult.allPosts))
              });
            }
          }
        });
      }
    };
  }
})(Submit);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbImdxbCIsImdyYXBocWwiLCJTdWJtaXQiLCJjcmVhdGVQb3N0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwidXJsIiwid2luZG93IiwiYWxlcnQiLCJtYXRjaCIsInByb3BzIiwibXV0YXRlIiwidmFyaWFibGVzIiwidXBkYXRlUXVlcmllcyIsImFsbFBvc3RzIiwicHJldmlvdXNSZXN1bHQiLCJtdXRhdGlvblJlc3VsdCIsIm5ld1Bvc3QiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBSzs7Ozs7Ozs7QUFFZCxTQUFBLEFBQVMsYUFBd0I7TUFBZCxBQUFjLGtCQUFkLEFBQWMsQUFDL0I7O1dBQUEsQUFBUyxhQUFULEFBQXVCLEdBQUcsQUFDeEI7TUFBQSxBQUFFLEFBRUY7O1FBQUksUUFBUSxFQUFBLEFBQUUsT0FBRixBQUFTLFNBQVQsQUFBa0IsTUFBOUIsQUFBb0MsQUFDcEM7UUFBSSxNQUFNLEVBQUEsQUFBRSxPQUFGLEFBQVMsU0FBVCxBQUFrQixJQUE1QixBQUFnQyxBQUVoQzs7UUFBSSxVQUFBLEFBQVUsTUFBTSxRQUFwQixBQUE0QixJQUFJLEFBQzlCO2FBQUEsQUFBTyxNQUFQLEFBQWEsQUFDYjthQUFBLEFBQU8sQUFDUjtBQUVEOztBQUNBO1FBQUksQ0FBQyxJQUFBLEFBQUksTUFBVCxBQUFLLEFBQVUsb0JBQW9CLEFBQ2pDO3dCQUFBLEFBQWdCLEFBQ2pCO0FBRUQ7O2VBQUEsQUFBVyxPQUFYLEFBQWtCLEFBRWxCOztBQUNBO01BQUEsQUFBRSxPQUFGLEFBQVMsU0FBVCxBQUFrQixNQUFsQixBQUF3QixRQUF4QixBQUFnQyxBQUNoQztNQUFBLEFBQUUsT0FBRixBQUFTLFNBQVQsQUFBa0IsSUFBbEIsQUFBc0IsUUFBdEIsQUFBOEIsQUFDL0I7QUFFRDs7eUJBQ0UsY0FBQSxVQUFNLFVBQU4sQUFBZ0IseUJBQWhCOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxvREFBTyxhQUFQLEFBQW1CLFNBQVEsTUFBM0IsQUFBZ0Msb0JBQWhDOztnQkFBQTtrQkFGRixBQUVFLEFBQ0E7QUFEQTsrQ0FDTyxhQUFQLEFBQW1CLE9BQU0sTUFBekIsQUFBOEIsa0JBQTlCOztnQkFBQTtrQkFIRixBQUdFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBLFlBQVEsTUFBUixBQUFhLHFCQUFiOztnQkFBQTtrQkFBQTtBQUFBO0tBSkYsQUFJRTthQUpGO1NBREYsQUFDRSxBQXFCSDtBQXJCRzs7O0FBdUJKLElBQU0sYUFBQSxBQUFhLHNCQUFuQixBQVlBOzs0Q0FBZSxBQUFRO1NBQ2Qsc0JBQUE7UUFBQSxBQUFHLGVBQUgsQUFBRzs7a0JBQ0ksb0JBQUEsQUFBQyxPQUFELEFBQVEsS0FBUjs7cUJBQ0MsRUFBRSxPQUFGLE9BQVMsS0FEYSxBQUN0QixBQUNYOztzQkFDWSxrQkFBQSxBQUFDLHVCQUF1QztrQkFBckIsQUFBcUIsdUJBQXJCLEFBQXFCLEFBQ2hEOztrQkFBTSxVQUFVLGVBQUEsQUFBZSxLQUEvQixBQUFvQyxBQUNwQzsyQ0FBTyxBQUFjLElBQWQsQUFBa0I7QUFFdkI7MkJBQUEsQUFBVyxpREFBWSxlQUZ6QixBQUFPLEFBQWtDLEFBRXZDLEFBQXNDLEFBRXpDO0FBSjBDLEFBQ3ZDLGVBREs7QUFMRCxBQUFnQixBQUFPLEFBRWxCO0FBQUEsQUFDYjtBQUgrQixBQUNqQyxTQUQwQjtBQUR2QixBQUFpQjtBQUFBLEFBQ3RCO0FBRlcsQUFBb0I7QUFBQSxBQUNqQyxDQURhLEVBQWYsQUFBZSxBQWVaIiwiZmlsZSI6IlN1Ym1pdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGF0cmlja3ZvbnBsYXRlbi91bmlyYW5rL2FwcC1jbGllbnQifQ==