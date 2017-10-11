"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _PostUpvoter = require("./PostUpvoter");

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kristiankyvik/code/serverless-graphql-apollo/with-apollo/components/Card.js";

exports.default = function (props) {
	return _react2.default.createElement("div", {
		style: { "backgroundImage": "url(\"" + props.uni.url + "\")" },
		"data-index": props.index,
		onClick: props._handleCardClick,
		className: "jsx-3197922175" + " " + "ma2 shadow-4 bg-white flex flex-column tc ur-card",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement("div", {
		className: "jsx-3197922175" + " " + "pt2 ph2 flex top ph2",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement("div", {
		style: { "flex": 1 },
		className: "jsx-3197922175" + " " + "b tl f7 robot0",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement("span", {
		className: "jsx-3197922175",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, "UniRank: "), props.uni.rank, " ", 1), _react2.default.createElement("div", {
		style: { "flex": 1 },
		className: "jsx-3197922175" + " " + "b tr f7 robot0",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, _react2.default.createElement("span", {
		className: "jsx-3197922175",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, "Rank: "), props.uni.rank, 3)), _react2.default.createElement("div", {
		className: "jsx-3197922175" + " " + "flex-column flex bottom pt1",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement("div", {
		className: "jsx-3197922175" + " " + "flex flex-column text pb3 ph2 relative",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, _react2.default.createElement("img", { src: "https://logo.clearbit.com/" + (props.uni.website ? props.uni.website : "uu.nl"), className: "jsx-3197922175" + " " + "ur-uni-logo absolute",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}), _react2.default.createElement("div", {
		className: "jsx-3197922175" + " " + "pv1 f6 fw7",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, props.uni.name), _react2.default.createElement("div", {
		className: "jsx-3197922175" + " " + "robot0 f6 o-80",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, props.uni.country)), _react2.default.createElement("div", {
		className: "jsx-3197922175" + " " + "pv2 ph2 flex items-end",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, _react2.default.createElement("div", {
		style: { "flex": 1 },
		className: "jsx-3197922175" + " " + "b tl f7 robot0",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}, _react2.default.createElement(_PostUpvoter2.default, { _id: props.uni._id, votes: props.uni.votes, __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	})), _react2.default.createElement("a", {
		style: { "flex": 1 },

		href: props.uni.website,
		className: "jsx-3197922175" + " " + "b link tr white f7 robot0 underline",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}, "visit site"))), _react2.default.createElement(_style2.default, {
		styleId: "3197922175",
		css: ".ur-card.jsx-3197922175{height:156px;width:254px;background-size:cover;color:white;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;text-rendering:optimizeLegibility;cursor:pointer}.top.jsx-3197922175{-webkit-flex:1;-ms-flex:1;flex:1;background:-webkit-linear-gradient( top ,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 50%,transparent 100%);background:linear-gradient(to bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 50%,transparent 100%)}.text.jsx-3197922175{font-size:1.5rem;-webkit-flex:2;-ms-flex:2;flex:2}.bottom.jsx-3197922175{-webkit-flex:1;-ms-flex:1;flex:1;background:-webkit-linear-gradient( bottom ,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 70%,transparent 100%);background:linear-gradient(to top,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 70%,transparent 100%)}.playfair.jsx-3197922175{font-family:'Playfair Display',serif;font-weight:600}.ur-uni-logo.jsx-3197922175{width:30px;top:-45px;left:50%;margin-left:-15px;border-radius:50%;border:2px white solid}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRE0sQUFHdUIsQUFVTixBQUtVLEFBSVYsQUFLK0IsQUFJM0IsV0FDRCxFQTVCRSxJQWVMLElBY0UsSUE1QmEsS0E2QkwsR0FwQnVGLEFBU0QsSUFLdkYsVUF0QkosQ0E2Qk0sRUFmcEIsR0FTQSxNQXRCcUMsT0E2QlosdUJBQ3pCLEtBN0I2QiwyQkFDTyxPQU1rRSxHQVNQLHdCQWQ5RSxlQUNqQixpREFLQSxBQVNBIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL3NlcnZlcmxlc3MtZ3JhcGhxbC1hcG9sbG8vd2l0aC1hcG9sbG8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zdFVwdm90ZXIgZnJvbSAnLi9Qb3N0VXB2b3RlcidcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG5cdDxkaXYgXG5cdFx0Y2xhc3NOYW1lPVwibWEyIHNoYWRvdy00IGJnLXdoaXRlIGZsZXggZmxleC1jb2x1bW4gdGMgdXItY2FyZFwiIFxuXHRcdHN0eWxlPXt7IFwiYmFja2dyb3VuZEltYWdlXCI6IGB1cmwoXCIke3Byb3BzLnVuaS51cmx9XCIpYCB9fSBcblx0XHRkYXRhLWluZGV4PXtwcm9wcy5pbmRleH1cblx0XHRvbkNsaWNrPXtwcm9wcy5faGFuZGxlQ2FyZENsaWNrfVxuXHQ+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwdDIgcGgyIGZsZXggdG9wIHBoMlwiPlxuXHRcdCAgPGRpdiBcblx0XHQgIFx0c3R5bGU9e3sgXCJmbGV4XCI6IDEgfX0gXG5cdFx0ICBcdGNsYXNzTmFtZT1cImIgdGwgZjcgcm9ib3QwXCJcblx0XHQgID5cblx0XHQgICAgPHNwYW4gPlVuaVJhbms6IDwvc3Bhbj57cHJvcHMudW5pLnJhbmt9IHsxfVxuXHRcdCAgPC9kaXY+XG5cdFx0ICA8ZGl2IFxuXHRcdCAgXHRzdHlsZT17eyBcImZsZXhcIjogMSB9fSBcblx0XHQgIFx0Y2xhc3NOYW1lPVwiYiB0ciBmNyByb2JvdDBcIlxuXHRcdCAgPlxuXHRcdCAgICA8c3BhbiA+UmFuazogPC9zcGFuPntwcm9wcy51bmkucmFua317M31cblx0XHQgIDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbHVtbiBmbGV4IGJvdHRvbSBwdDFcIj5cblx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiB0ZXh0IHBiMyBwaDIgcmVsYXRpdmVcIj5cblx0XHQgICAgPGltZyBjbGFzc05hbWU9XCJ1ci11bmktbG9nbyBhYnNvbHV0ZVwiIHNyYz17YGh0dHBzOi8vbG9nby5jbGVhcmJpdC5jb20vJHtwcm9wcy51bmkud2Vic2l0ZSA/IHByb3BzLnVuaS53ZWJzaXRlIDogXCJ1dS5ubFwiIH1gfSAvPlxuXHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInB2MSBmNiBmdzdcIj5cblx0XHQgICAgICB7cHJvcHMudW5pLm5hbWV9XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInJvYm90MCBmNiBvLTgwXCI+XG5cdFx0ICAgICAge3Byb3BzLnVuaS5jb3VudHJ5fVxuXHRcdCAgICA8L2Rpdj5cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzc05hbWU9XCJwdjIgcGgyIGZsZXggaXRlbXMtZW5kXCI+XG5cdFx0ICAgIDxkaXYgXG5cdFx0ICAgIFx0c3R5bGU9e3sgXCJmbGV4XCI6IDEgfX0gXG5cdFx0ICAgIFx0Y2xhc3NOYW1lPVwiYiB0bCBmNyByb2JvdDBcIlxuXHRcdCAgICA+XG5cdFx0ICAgICAgPFBvc3RVcHZvdGVyIF9pZD17cHJvcHMudW5pLl9pZH0gdm90ZXM9e3Byb3BzLnVuaS52b3Rlc30gLz5cblx0XHQgICAgPC9kaXY+XG5cdFx0ICAgIDxhIFxuXHRcdCAgICBcdHN0eWxlPXt7IFwiZmxleFwiOiAxIH19IFxuXHRcdCAgICBcdGNsYXNzTmFtZT1cImIgbGluayB0ciB3aGl0ZSBmNyByb2JvdDAgdW5kZXJsaW5lXCJcblx0XHQgICAgXHRocmVmPXtwcm9wcy51bmkud2Vic2l0ZX1cblx0XHQgICAgPlxuXHRcdCAgIFx0dmlzaXQgc2l0ZVxuXHRcdCAgICA8L2E+XG5cdFx0ICA8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXG5cdCAgPHN0eWxlIGpzeD5cblx0ICAgIHtgXG5cdCAgICAgIC51ci1jYXJkIHtcblx0ICAgICAgICBoZWlnaHQ6IDE1NnB4O1xuXHQgICAgICAgIHdpZHRoOiAyNTRweDtcblx0ICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQgICAgICAgIGNvbG9yOiB3aGl0ZTtcblx0ICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0ICAgICAgICBmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdCAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblx0ICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cdCAgICAgIH1cblx0ICAgICAgLnRvcCB7XG5cdCAgICAgICAgZmxleDogMTtcblx0ICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggdG9wICwgcmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuMykgNTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcblx0ICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC4zKSA1MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuXHQgICAgICB9XG5cdCAgICAgIC50ZXh0IHtcblx0ICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcblx0ICAgICAgICBmbGV4OiAyO1xuXHQgICAgICB9XG5cdCAgICAgIC5ib3R0b20ge1xuXHQgICAgICAgIGZsZXg6IDE7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIGJvdHRvbSAsIHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjMpIDcwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuMykgNzAlLCB0cmFuc3BhcmVudCAxMDAlKTtcblx0ICAgICAgfVxuXHQgICAgICAucGxheWZhaXIge1xuXHQgICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuXHQgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cdCAgICAgIH1cblx0ICAgICAgLnVyLXVuaS1sb2dvIHtcblx0ICAgICAgICB3aWR0aDogMzBweDtcblx0ICAgICAgICB0b3A6IC00NXB4O1xuXHQgICAgICAgIGxlZnQ6IDUwJTtcblx0ICAgICAgICBtYXJnaW4tbGVmdDotMTVweDtcblx0ICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cdCAgICAgICAgYm9yZGVyOiAycHggd2hpdGUgc29saWQ7XG5cdCAgICAgIH1cblx0ICAgIGB9XG5cdCAgPC9zdHlsZT5cblx0PC9kaXY+XG4pIl19 */\n/*@ sourceURL=components/Card.js */"
	}));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0VXB2b3RlciIsInByb3BzIiwidW5pIiwidXJsIiwiaW5kZXgiLCJfaGFuZGxlQ2FyZENsaWNrIiwicmFuayIsIndlYnNpdGUiLCJuYW1lIiwiY291bnRyeSIsIl9pZCIsInZvdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBaUIsQUFFeEI7Ozs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxPQUFEO3dCQUNkLGNBQUE7U0FFUSxFQUFFLDhCQUEyQixNQUFBLEFBQU0sSUFBakMsQUFBcUMsTUFGL0MsQUFFUSxBQUNQO2dCQUFZLE1BSGIsQUFHbUIsQUFDbEI7V0FBUyxNQUpWLEFBSWdCO3NDQUpoQixBQUNXOzthQURYO2VBQUEsQUFNQztBQU5EO0FBRUMsRUFGRCxrQkFNQyxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNFO0FBREY7QUFBQSxvQkFDRSxjQUFBO1NBQ1EsRUFBRSxRQURWLEFBQ1EsQUFBVTtzQ0FEbEIsQUFFVzs7YUFGWDtlQUFBLEFBSUU7QUFKRjtBQUNDLG9CQUdDLGNBQUE7YUFBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQUpGLEFBSUUsQUFBd0Isb0JBQUEsQUFBTSxJQUpoQyxBQUlvQyxNQUFPLEtBTDdDLEFBQ0UsQUFNQSxvQkFBQSxjQUFBO1NBQ1EsRUFBRSxRQURWLEFBQ1EsQUFBVTtzQ0FEbEIsQUFFVzs7YUFGWDtlQUFBLEFBSUU7QUFKRjtBQUNDLG9CQUdDLGNBQUE7YUFBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQUpGLEFBSUUsQUFBcUIsaUJBQUEsQUFBTSxJQUo3QixBQUlpQyxBQUFNLE1BakIxQyxBQU1DLEFBT0UsQUFRRixxQkFBQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNFO0FBREY7QUFBQSxvQkFDRSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNFO0FBREY7QUFBQSwyQ0FDd0MscUNBQWtDLE1BQUEsQUFBTSxJQUFOLEFBQVUsVUFBVSxNQUFBLEFBQU0sSUFBMUIsQUFBOEIsVUFBdEcsQUFBc0MsQUFBMEUsOENBQWhILEFBQWU7O2FBQWY7ZUFERixBQUNFLEFBQ0E7QUFEQTtxQkFDQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNHO0FBREg7QUFBQSxVQUNHLEFBQU0sSUFIWCxBQUVFLEFBQ2EsQUFFYix1QkFBQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNHO0FBREg7QUFBQSxVQUNHLEFBQU0sSUFQYixBQUNFLEFBS0UsQUFDYSxBQUdmLDJCQUFBLGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBLEFBQ0U7QUFERjtBQUFBLG9CQUNFLGNBQUE7U0FDUSxFQUFFLFFBRFYsQUFDUSxBQUFVO3NDQURsQixBQUVXOzthQUZYO2VBQUEsQUFJRTtBQUpGO0FBQ0Msb0JBR0MsQUFBQyx1Q0FBWSxLQUFLLE1BQUEsQUFBTSxJQUF4QixBQUE0QixLQUFLLE9BQU8sTUFBQSxBQUFNLElBQTlDLEFBQWtEO2FBQWxEO2VBTEosQUFDRSxBQUlFLEFBRUY7QUFGRTtzQkFFRixjQUFBO1NBQ1EsRUFBRSxRQURWLEFBQ1EsQUFBVSxBQUVqQjs7UUFBTSxNQUFBLEFBQU0sSUFIYixBQUdpQjtzQ0FIakIsQUFFVzs7YUFGWDtlQUFBO0FBQUE7QUFDQyxJQXZDTixBQXFCQyxBQVVFLEFBT0U7V0F0Q0w7T0FEYyxBQUNkO0FBQUE7QUFERCIsImZpbGUiOiJDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby93aXRoLWFwb2xsbyJ9