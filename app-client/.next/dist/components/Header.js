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

var _jsxFileName = '/Users/kristiankyvik/code/erasmoose/app-client/components/Header.js';

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
    css: 'body{background-color:#fbfbfb}header{margin-bottom:25px}a{font-size:14px;margin-right:15px;text-decoration:none}.is-active{text-decoration:underline}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCdUIsQUFHbUMsQUFHUCxBQUdKLEFBS1csZUFKUixJQUhwQixNQUhDLENBV0QsT0FKdUIscUJBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvZXJhc21vb3NlL2FwcC1jbGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbi8vIFRPRE86IFVzZSBsb2NhbCBwYWNrYWdlcyBmb3IgdGFjaHlvbnNcbi8vIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi9ub2RlX21vZHVsZXMvdGFjaHlvbnMvY3NzL3RhY2h5b25zLm1pbi5jc3NcIiAvPlxuLy8gPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL25vZGVfbW9kdWxlcy90YWNoeW9ucy1mbGV4Ym94L2Nzcy90YWNoeW9ucy1mbGV4Ym94Lm1pbi5jc3NcIiAvPlxuZXhwb3J0IGRlZmF1bHQgKHsgcGF0aG5hbWUgfSkgPT4gKFxuXG4gIDxoZWFkZXI+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdGFjaHlvbnNANC43LjAvY3NzL3RhY2h5b25zLm1pbi5jc3NcIi8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3RhY2h5b25zLWZsZXhib3hAMi4wLjUvY3NzL3RhY2h5b25zLWZsZXhib3gubWluLmNzc1wiIC8+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS84M2MzYjJhMjhiLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybzozMDAsNDAwLDYwMCw3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYChmdW5jdGlvbigpIHsgdmFyIHFzLGpzLHEscyxkPWRvY3VtZW50LCBnaT1kLmdldEVsZW1lbnRCeUlkLCBjZT1kLmNyZWF0ZUVsZW1lbnQsIGd0PWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUsIGlkPVwidHlwZWZfb3JtX3NoYXJlXCIsIGI9XCJodHRwczovL2VtYmVkLnR5cGVmb3JtLmNvbS9cIjsgaWYoIWdpLmNhbGwoZCxpZCkpeyBqcz1jZS5jYWxsKGQsXCJzY3JpcHRcIik7IGpzLmlkPWlkOyBqcy5zcmM9YitcImVtYmVkLmpzXCI7IHE9Z3QuY2FsbChkLFwic2NyaXB0XCIpWzBdOyBxLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLHEpIH0gfSkoKWAgfX0+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nICYmICdpcy1hY3RpdmUnfT5Ib21lPC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Fib3V0JyAmJiAnaXMtYWN0aXZlJ30+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICBib2R5IHsgXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICAgICAgIH1cbiAgICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuIl19 */\n/*@ sourceURL=components/Header.js */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwicGF0aG5hbWUiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7O0FBRVA7QUFDQTtBQUNBLEFBQ0E7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBRWhCLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSw2Q0FDUSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QixrREFBOUI7O2dCQUFBO2tCQURGLEFBQ0UsQUFDQTtBQURBOzhDQUNNLFNBQU4sQUFBYyxvQkFBZDs7Z0JBQUE7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsb0VBQTVCOztnQkFBQTtrQkFIRixBQUdFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixvRkFBNUI7O2dCQUFBO2tCQUpGLEFBSUUsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWSx3REFBWjs7Z0JBQUE7a0JBTEYsQUFLRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLDJFQUEwRSxLQUFyRixBQUF5Rix5QkFBekY7O2dCQUFBO2tCQU5GLEFBTUUsQUFDQTtBQURBO2dEQUNRLHlCQUF5QixFQUFDLFFBQWxDLEFBQWlDLCtUQUFqQzs7Z0JBQUE7a0JBUkosQUFDRSxBQU9FLEFBRUY7QUFGRTt1QkFFRixBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTt5Q0FBYyxhQUFBLEFBQWEsT0FBM0IsQUFBa0MsZUFBbEM7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVhKLEFBVUUsQUFDRSxBQUdGLDBCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO3lDQUFjLGFBQUEsQUFBYSxZQUEzQixBQUF1QyxlQUF2Qzs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBZkosQUFjRSxBQUNFO2FBZko7U0FGYSxBQUViO0FBQUE7QUFGRiIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tyaXN0aWFua3l2aWsvY29kZS9lcmFzbW9vc2UvYXBwLWNsaWVudCJ9