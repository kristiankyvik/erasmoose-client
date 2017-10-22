'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/patrickvonplaten/unirank/app-client/components/Header.js';

// TODO: Use local packages for tachyons
// <link rel="stylesheet" href="./node_modules/tachyons/css/tachyons.min.css" />
// <link rel="stylesheet" href="./node_modules/tachyons-flexbox/css/tachyons-flexbox.min.css" />
exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', {
    className: 'jsx-1898769141',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-1898769141',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-1898769141',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css', className: 'jsx-1898769141',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons-flexbox@2.0.5/css/tachyons-flexbox.min.css', className: 'jsx-1898769141',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('script', { src: 'https://use.fontawesome.com/83c3b2a28b.js', className: 'jsx-1898769141',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700', rel: 'stylesheet', className: 'jsx-1898769141',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: '(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()' }, className: 'jsx-1898769141',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1898769141' + ' ' + (pathname === '/' && 'is-active' || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1898769141' + ' ' + (pathname === '/about' && 'is-active' || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'About')), _react2.default.createElement(_style2.default, {
    styleId: '1898769141',
    css: 'body{background-color:#fbfbfb;}header{margin-bottom:25px;}a{font-size:14px;margin-right:15px;text-decoration:none;}.is-active{text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCdUIsQUFHbUMsQUFHUCxBQUdKLEFBS1csZUFKUixJQUhwQixNQUhDLENBV0QsT0FKdUIscUJBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYXRyaWNrdm9ucGxhdGVuL3VuaXJhbmsvYXBwLWNsaWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuLy8gVE9ETzogVXNlIGxvY2FsIHBhY2thZ2VzIGZvciB0YWNoeW9uc1xuLy8gPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL25vZGVfbW9kdWxlcy90YWNoeW9ucy9jc3MvdGFjaHlvbnMubWluLmNzc1wiIC8+XG4vLyA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4vbm9kZV9tb2R1bGVzL3RhY2h5b25zLWZsZXhib3gvY3NzL3RhY2h5b25zLWZsZXhib3gubWluLmNzc1wiIC8+XG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZSB9KSA9PiAoXG5cbiAgPGhlYWRlcj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS90YWNoeW9uc0A0LjcuMC9jc3MvdGFjaHlvbnMubWluLmNzc1wiLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdGFjaHlvbnMtZmxleGJveEAyLjAuNS9jc3MvdGFjaHlvbnMtZmxleGJveC5taW4uY3NzXCIgLz5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tLzgzYzNiMmEyOGIuanNcIj48L3NjcmlwdD5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvOjMwMCw0MDAsNjAwLDcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICA8c2NyaXB0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBgKGZ1bmN0aW9uKCkgeyB2YXIgcXMsanMscSxzLGQ9ZG9jdW1lbnQsIGdpPWQuZ2V0RWxlbWVudEJ5SWQsIGNlPWQuY3JlYXRlRWxlbWVudCwgZ3Q9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZSwgaWQ9XCJ0eXBlZl9vcm1fc2hhcmVcIiwgYj1cImh0dHBzOi8vZW1iZWQudHlwZWZvcm0uY29tL1wiOyBpZighZ2kuY2FsbChkLGlkKSl7IGpzPWNlLmNhbGwoZCxcInNjcmlwdFwiKTsganMuaWQ9aWQ7IGpzLnNyYz1iK1wiZW1iZWQuanNcIjsgcT1ndC5jYWxsKGQsXCJzY3JpcHRcIilbMF07IHEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMscSkgfSB9KSgpYCB9fT48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnLycgJiYgJ2lzLWFjdGl2ZSd9PkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnICYmICdpcy1hY3RpdmUnfT5BYm91dDwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgIGJvZHkgeyBcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gICAgICAgfVxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG4iXX0= */\n/*@ sourceURL=components/Header.js */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwicGF0aG5hbWUiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7O0FBRVA7QUFDQTtBQUNBLEFBQ0E7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBRWhCLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSw2Q0FDUSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QixrREFBOUI7O2dCQUFBO2tCQURGLEFBQ0UsQUFDQTtBQURBOzhDQUNNLFNBQU4sQUFBYyxvQkFBZDs7Z0JBQUE7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsb0VBQTVCOztnQkFBQTtrQkFIRixBQUdFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixvRkFBNUI7O2dCQUFBO2tCQUpGLEFBSUUsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWSx3REFBWjs7Z0JBQUE7a0JBTEYsQUFLRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLDJFQUEwRSxLQUFyRixBQUF5Rix5QkFBekY7O2dCQUFBO2tCQU5GLEFBTUUsQUFDQTtBQURBO2dEQUNRLHlCQUF5QixFQUFDLFFBQWxDLEFBQWlDLCtUQUFqQzs7Z0JBQUE7a0JBUkosQUFDRSxBQU9FLEFBRUY7QUFGRTt1QkFFRixBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTt5Q0FBYyxhQUFBLEFBQWEsT0FBM0IsQUFBa0MsZUFBbEM7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVhKLEFBVUUsQUFDRSxBQUdGLDBCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO3lDQUFjLGFBQUEsQUFBYSxZQUEzQixBQUF1QyxlQUF2Qzs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBZkosQUFjRSxBQUNFO2FBZko7U0FGYSxBQUViO0FBQUE7QUFGRiIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhdHJpY2t2b25wbGF0ZW4vdW5pcmFuay9hcHAtY2xpZW50In0=