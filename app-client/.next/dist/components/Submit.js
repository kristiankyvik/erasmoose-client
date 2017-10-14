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

var _jsxFileName = '/Users/kristiankyvik/code/serverless-graphql-apollo/app-client/components/Submit.js';

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
    css: 'form.jsx-4286934451{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px}h1.jsx-4286934451{font-size:20px}input.jsx-4286934451{display:block;margin-bottom:10px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHMkMsQUFLakIsQUFHRCxjQUNLLENBSHJCLGlCQUxzQixDQVN0QixtQkFScUIsbUJBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvU3VibWl0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby9hcHAtY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5mdW5jdGlvbiBTdWJtaXQgKHsgY3JlYXRlUG9zdCB9KSB7XG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHRpdGxlID0gZS50YXJnZXQuZWxlbWVudHMudGl0bGUudmFsdWVcbiAgICBsZXQgdXJsID0gZS50YXJnZXQuZWxlbWVudHMudXJsLnZhbHVlXG5cbiAgICBpZiAodGl0bGUgPT09ICcnIHx8IHVybCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5hbGVydCgnQm90aCBmaWVsZHMgYXJlIHJlcXVpcmVkLicpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBwcmVwZW5kIGh0dHAgaWYgbWlzc2luZyBmcm9tIHVybFxuICAgIGlmICghdXJsLm1hdGNoKC9eW2EtekEtWl0rOlxcL1xcLy8pKSB7XG4gICAgICB1cmwgPSBgaHR0cDovLyR7dXJsfWBcbiAgICB9XG5cbiAgICBjcmVhdGVQb3N0KHRpdGxlLCB1cmwpXG5cbiAgICAvLyByZXNldCBmb3JtXG4gICAgZS50YXJnZXQuZWxlbWVudHMudGl0bGUudmFsdWUgPSAnJ1xuICAgIGUudGFyZ2V0LmVsZW1lbnRzLnVybC52YWx1ZSA9ICcnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGgxPlN1Ym1pdDwvaDE+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3RpdGxlJyBuYW1lPSd0aXRsZScgLz5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0ndXJsJyBuYW1lPSd1cmwnIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBjcmVhdGVQb3N0ID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVQb3N0KCR0aXRsZTogU3RyaW5nISwgJHVybDogU3RyaW5nISkge1xuICAgIGNyZWF0ZVBvc3QodGl0bGU6ICR0aXRsZSwgdXJsOiAkdXJsKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHZvdGVzXG4gICAgICB1cmxcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGNyZWF0ZVBvc3QsIHtcbiAgcHJvcHM6ICh7IG11dGF0ZSB9KSA9PiAoe1xuICAgIGNyZWF0ZVBvc3Q6ICh0aXRsZSwgdXJsKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IHRpdGxlLCB1cmwgfSxcbiAgICAgIHVwZGF0ZVF1ZXJpZXM6IHtcbiAgICAgICAgYWxsUG9zdHM6IChwcmV2aW91c1Jlc3VsdCwgeyBtdXRhdGlvblJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3UG9zdCA9IG11dGF0aW9uUmVzdWx0LmRhdGEuY3JlYXRlUG9zdFxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdFxuICAgICAgICAgICAgYWxsUG9zdHM6IFtuZXdQb3N0LCAuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0c11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFN1Ym1pdClcbiJdfQ== */\n/*@ sourceURL=components/Submit.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbImdxbCIsImdyYXBocWwiLCJTdWJtaXQiLCJjcmVhdGVQb3N0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwidXJsIiwid2luZG93IiwiYWxlcnQiLCJtYXRjaCIsInByb3BzIiwibXV0YXRlIiwidmFyaWFibGVzIiwidXBkYXRlUXVlcmllcyIsImFsbFBvc3RzIiwicHJldmlvdXNSZXN1bHQiLCJtdXRhdGlvblJlc3VsdCIsIm5ld1Bvc3QiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBSzs7Ozs7Ozs7QUFFZCxTQUFBLEFBQVMsYUFBd0I7TUFBZCxBQUFjLGtCQUFkLEFBQWMsQUFDL0I7O1dBQUEsQUFBUyxhQUFULEFBQXVCLEdBQUcsQUFDeEI7TUFBQSxBQUFFLEFBRUY7O1FBQUksUUFBUSxFQUFBLEFBQUUsT0FBRixBQUFTLFNBQVQsQUFBa0IsTUFBOUIsQUFBb0MsQUFDcEM7UUFBSSxNQUFNLEVBQUEsQUFBRSxPQUFGLEFBQVMsU0FBVCxBQUFrQixJQUE1QixBQUFnQyxBQUVoQzs7UUFBSSxVQUFBLEFBQVUsTUFBTSxRQUFwQixBQUE0QixJQUFJLEFBQzlCO2FBQUEsQUFBTyxNQUFQLEFBQWEsQUFDYjthQUFBLEFBQU8sQUFDUjtBQUVEOztBQUNBO1FBQUksQ0FBQyxJQUFBLEFBQUksTUFBVCxBQUFLLEFBQVUsb0JBQW9CLEFBQ2pDO3dCQUFBLEFBQWdCLEFBQ2pCO0FBRUQ7O2VBQUEsQUFBVyxPQUFYLEFBQWtCLEFBRWxCOztBQUNBO01BQUEsQUFBRSxPQUFGLEFBQVMsU0FBVCxBQUFrQixNQUFsQixBQUF3QixRQUF4QixBQUFnQyxBQUNoQztNQUFBLEFBQUUsT0FBRixBQUFTLFNBQVQsQUFBa0IsSUFBbEIsQUFBc0IsUUFBdEIsQUFBOEIsQUFDL0I7QUFFRDs7eUJBQ0UsY0FBQSxVQUFNLFVBQU4sQUFBZ0IseUJBQWhCOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxvREFBTyxhQUFQLEFBQW1CLFNBQVEsTUFBM0IsQUFBZ0Msb0JBQWhDOztnQkFBQTtrQkFGRixBQUVFLEFBQ0E7QUFEQTsrQ0FDTyxhQUFQLEFBQW1CLE9BQU0sTUFBekIsQUFBOEIsa0JBQTlCOztnQkFBQTtrQkFIRixBQUdFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBLFlBQVEsTUFBUixBQUFhLHFCQUFiOztnQkFBQTtrQkFBQTtBQUFBO0tBSkYsQUFJRTthQUpGO1NBREYsQUFDRSxBQXFCSDtBQXJCRzs7O0FBdUJKLElBQU0sYUFBQSxBQUFhLHNCQUFuQixBQVlBOzs0Q0FBZSxBQUFRO1NBQ2Qsc0JBQUE7UUFBQSxBQUFHLGVBQUgsQUFBRzs7a0JBQ0ksb0JBQUEsQUFBQyxPQUFELEFBQVEsS0FBUjs7cUJBQ0MsRUFBRSxPQUFGLE9BQVMsS0FEYSxBQUN0QixBQUNYOztzQkFDWSxrQkFBQSxBQUFDLHVCQUF1QztrQkFBckIsQUFBcUIsdUJBQXJCLEFBQXFCLEFBQ2hEOztrQkFBTSxVQUFVLGVBQUEsQUFBZSxLQUEvQixBQUFvQyxBQUNwQzsyQ0FBTyxBQUFjLElBQWQsQUFBa0I7QUFFdkI7MkJBQUEsQUFBVyxpREFBWSxlQUZ6QixBQUFPLEFBQWtDLEFBRXZDLEFBQXNDLEFBRXpDO0FBSjBDLEFBQ3ZDLGVBREs7QUFMRCxBQUFnQixBQUFPLEFBRWxCO0FBQUEsQUFDYjtBQUgrQixBQUNqQyxTQUQwQjtBQUR2QixBQUFpQjtBQUFBLEFBQ3RCO0FBRlcsQUFBb0I7QUFBQSxBQUNqQyxDQURhLEVBQWYsQUFBZSxBQWVaIiwiZmlsZSI6IlN1Ym1pdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL3NlcnZlcmxlc3MtZ3JhcGhxbC1hcG9sbG8vYXBwLWNsaWVudCJ9