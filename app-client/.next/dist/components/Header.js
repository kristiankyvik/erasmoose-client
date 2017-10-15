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

var _jsxFileName = '/Users/kristiankyvik/code/serverless-graphql-apollo/app-client/components/Header.js';

// TODO: Use local packages for tachyons
// <link rel="stylesheet" href="./node_modules/tachyons/css/tachyons.min.css" />
// <link rel="stylesheet" href="./node_modules/tachyons-flexbox/css/tachyons-flexbox.min.css" />
exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', {
    className: 'jsx-3970066506',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-3970066506',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-3970066506',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css', className: 'jsx-3970066506',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons-flexbox@2.0.5/css/tachyons-flexbox.min.css', className: 'jsx-3970066506',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('script', { src: 'https://use.fontawesome.com/83c3b2a28b.js', className: 'jsx-3970066506',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-3970066506' + ' ' + (pathname === '/' && 'is-active' || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-3970066506' + ' ' + (pathname === '/about' && 'is-active' || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'About')), _react2.default.createElement(_style2.default, {
    styleId: '3970066506',
    css: 'header.jsx-3970066506{margin-bottom:25px}a.jsx-3970066506{font-size:14px;margin-right:15px;text-decoration:none}.is-active.jsx-3970066506{text-decoration:underline}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCZ0IsQUFHNEIsQUFHSixBQUtXLGVBSlIsSUFIcEIsT0FRQSxPQUp1QixxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tyaXN0aWFua3l2aWsvY29kZS9zZXJ2ZXJsZXNzLWdyYXBocWwtYXBvbGxvL2FwcC1jbGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbi8vIFRPRE86IFVzZSBsb2NhbCBwYWNrYWdlcyBmb3IgdGFjaHlvbnNcbi8vIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi9ub2RlX21vZHVsZXMvdGFjaHlvbnMvY3NzL3RhY2h5b25zLm1pbi5jc3NcIiAvPlxuLy8gPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL25vZGVfbW9kdWxlcy90YWNoeW9ucy1mbGV4Ym94L2Nzcy90YWNoeW9ucy1mbGV4Ym94Lm1pbi5jc3NcIiAvPlxuZXhwb3J0IGRlZmF1bHQgKHsgcGF0aG5hbWUgfSkgPT4gKFxuXG4gIDxoZWFkZXI+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdGFjaHlvbnNANC43LjAvY3NzL3RhY2h5b25zLm1pbi5jc3NcIi8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3RhY2h5b25zLWZsZXhib3hAMi4wLjUvY3NzL3RhY2h5b25zLWZsZXhib3gubWluLmNzc1wiIC8+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS84M2MzYjJhMjhiLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nICYmICdpcy1hY3RpdmUnfT5Ib21lPC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Fib3V0JyAmJiAnaXMtYWN0aXZlJ30+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG4iXX0= */\n/*@ sourceURL=components/Header.js */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7O0FBRVA7QUFDQTtBQUNBLEFBQ0E7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBRWhCLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSw2Q0FDUSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QixrREFBOUI7O2dCQUFBO2tCQURGLEFBQ0UsQUFDQTtBQURBOzhDQUNNLFNBQU4sQUFBYyxvQkFBZDs7Z0JBQUE7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsb0VBQTVCOztnQkFBQTtrQkFIRixBQUdFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixvRkFBNUI7O2dCQUFBO2tCQUpGLEFBSUUsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWSx3REFBWjs7Z0JBQUE7a0JBTkosQUFDRSxBQUtFLEFBRUY7QUFGRTt1QkFFRixBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTt5Q0FBYyxhQUFBLEFBQWEsT0FBM0IsQUFBa0MsZUFBbEM7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVRKLEFBUUUsQUFDRSxBQUdGLDBCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO3lDQUFjLGFBQUEsQUFBYSxZQUEzQixBQUF1QyxlQUF2Qzs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBYkosQUFZRSxBQUNFO2FBYko7U0FGYSxBQUViO0FBQUE7QUFGRiIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tyaXN0aWFua3l2aWsvY29kZS9zZXJ2ZXJsZXNzLWdyYXBocWwtYXBvbGxvL2FwcC1jbGllbnQifQ==