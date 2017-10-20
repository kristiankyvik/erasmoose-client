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

var _jsxFileName = "/Users/kristiankyvik/code/erasmoose/app-client/components/Card.js";

exports.default = function (props) {
	return _react2.default.createElement("div", {
		style: { "backgroundImage": "url(\"/static/" + props.uni._id + ".jpg\")" },
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
	}, "Rank: "), props.uni.times_rank, 3)), _react2.default.createElement("div", {
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
		css: ".ur-card.jsx-3197922175{height:156px;width:254px;background-size:cover;color:white;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;text-rendering:optimizeLegibility;cursor:pointer}.top.jsx-3197922175{-webkit-flex:1;-ms-flex:1;flex:1;background:-webkit-linear-gradient( top ,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 50%,transparent 100%);background:linear-gradient(to bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 50%,transparent 100%)}.text.jsx-3197922175{font-size:1.5rem;-webkit-flex:2;-ms-flex:2;flex:2}.bottom.jsx-3197922175{-webkit-flex:1;-ms-flex:1;flex:1;background:-webkit-linear-gradient( bottom ,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 70%,transparent 100%);background:linear-gradient(to top,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 70%,transparent 100%)}.playfair.jsx-3197922175{font-family:'Playfair Display',serif;font-weight:600}.ur-uni-logo.jsx-3197922175{width:30px;top:-45px;left:50%;margin-left:-15px;border-radius:50%;border:2px white solid}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRE0sQUFHdUIsQUFVTixBQUtVLEFBSVYsQUFLK0IsQUFJM0IsV0FDRCxFQTVCRSxJQWVMLElBY0UsSUE1QmEsS0E2QkwsR0FwQnVGLEFBU0QsSUFLdkYsVUF0QkosQ0E2Qk0sRUFmcEIsR0FTQSxNQXRCcUMsT0E2QlosdUJBQ3pCLEtBN0I2QiwyQkFDTyxPQU1rRSxHQVNQLHdCQWQ5RSxlQUNqQixpREFLQSxBQVNBIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL2VyYXNtb29zZS9hcHAtY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3RVcHZvdGVyIGZyb20gJy4vUG9zdFVwdm90ZXInXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuXHQ8ZGl2IFxuXHRcdGNsYXNzTmFtZT1cIm1hMiBzaGFkb3ctNCBiZy13aGl0ZSBmbGV4IGZsZXgtY29sdW1uIHRjIHVyLWNhcmRcIiBcblx0XHRzdHlsZT17eyBcImJhY2tncm91bmRJbWFnZVwiOiBgdXJsKFwiL3N0YXRpYy8ke3Byb3BzLnVuaS5faWR9LmpwZ1wiKWAgfX0gXG5cdFx0ZGF0YS1pbmRleD17cHJvcHMuaW5kZXh9XG5cdFx0b25DbGljaz17cHJvcHMuX2hhbmRsZUNhcmRDbGlja31cblx0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicHQyIHBoMiBmbGV4IHRvcCBwaDJcIj5cblx0XHQgIDxkaXYgXG5cdFx0ICBcdHN0eWxlPXt7IFwiZmxleFwiOiAxIH19IFxuXHRcdCAgXHRjbGFzc05hbWU9XCJiIHRsIGY3IHJvYm90MFwiXG5cdFx0ICA+XG5cdFx0ICAgIDxzcGFuID5VbmlSYW5rOiA8L3NwYW4+e3Byb3BzLnVuaS5yYW5rfSB7MX1cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBcblx0XHQgIFx0c3R5bGU9e3sgXCJmbGV4XCI6IDEgfX0gXG5cdFx0ICBcdGNsYXNzTmFtZT1cImIgdHIgZjcgcm9ib3QwXCJcblx0XHQgID5cblx0XHQgICAgPHNwYW4gPlJhbms6IDwvc3Bhbj57cHJvcHMudW5pLnRpbWVzX3Jhbmt9ezN9XG5cdFx0ICA8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW4gZmxleCBib3R0b20gcHQxXCI+XG5cdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW4gdGV4dCBwYjMgcGgyIHJlbGF0aXZlXCI+XG5cdFx0ICAgIDxpbWcgY2xhc3NOYW1lPVwidXItdW5pLWxvZ28gYWJzb2x1dGVcIiBzcmM9e2BodHRwczovL2xvZ28uY2xlYXJiaXQuY29tLyR7cHJvcHMudW5pLndlYnNpdGUgPyBwcm9wcy51bmkud2Vic2l0ZSA6IFwidXUubmxcIiB9YH0gLz5cblx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJwdjEgZjYgZnc3XCI+XG5cdFx0ICAgICAge3Byb3BzLnVuaS5uYW1lfVxuXHRcdCAgICA8L2Rpdj5cblx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJyb2JvdDAgZjYgby04MFwiPlxuXHRcdCAgICAgIHtwcm9wcy51bmkuY291bnRyeX1cblx0XHQgICAgPC9kaXY+XG5cdFx0ICA8L2Rpdj5cblx0XHQgIDxkaXYgY2xhc3NOYW1lPVwicHYyIHBoMiBmbGV4IGl0ZW1zLWVuZFwiPlxuXHRcdCAgICA8ZGl2IFxuXHRcdCAgICBcdHN0eWxlPXt7IFwiZmxleFwiOiAxIH19IFxuXHRcdCAgICBcdGNsYXNzTmFtZT1cImIgdGwgZjcgcm9ib3QwXCJcblx0XHQgICAgPlxuXHRcdCAgICAgIDxQb3N0VXB2b3RlciBfaWQ9e3Byb3BzLnVuaS5faWR9IHZvdGVzPXtwcm9wcy51bmkudm90ZXN9IC8+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8YSBcblx0XHQgICAgXHRzdHlsZT17eyBcImZsZXhcIjogMSB9fSBcblx0XHQgICAgXHRjbGFzc05hbWU9XCJiIGxpbmsgdHIgd2hpdGUgZjcgcm9ib3QwIHVuZGVybGluZVwiXG5cdFx0ICAgIFx0aHJlZj17cHJvcHMudW5pLndlYnNpdGV9XG5cdFx0ICAgID5cblx0XHQgICBcdHZpc2l0IHNpdGVcblx0XHQgICAgPC9hPlxuXHRcdCAgPC9kaXY+XG5cdFx0PC9kaXY+XG5cblxuXHQgIDxzdHlsZSBqc3g+XG5cdCAgICB7YFxuXHQgICAgICAudXItY2FyZCB7XG5cdCAgICAgICAgaGVpZ2h0OiAxNTZweDtcblx0ICAgICAgICB3aWR0aDogMjU0cHg7XG5cdCAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0ICAgICAgICBjb2xvcjogd2hpdGU7XG5cdCAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdCAgICAgICAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cdCAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXHQgICAgICB9XG5cdCAgICAgIC50b3Age1xuXHQgICAgICAgIGZsZXg6IDE7XG5cdCAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIHRvcCAsIHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjMpIDUwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG5cdCAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuMykgNTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcblx0ICAgICAgfVxuXHQgICAgICAudGV4dCB7XG5cdCAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG5cdCAgICAgICAgZmxleDogMjtcblx0ICAgICAgfVxuXHQgICAgICAuYm90dG9tIHtcblx0ICAgICAgICBmbGV4OiAxO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCBib3R0b20gLCByZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC4zKSA3MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjMpIDcwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG5cdCAgICAgIH1cblx0ICAgICAgLnBsYXlmYWlyIHtcblx0ICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcblx0ICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXHQgICAgICB9XG5cdCAgICAgIC51ci11bmktbG9nbyB7XG5cdCAgICAgICAgd2lkdGg6IDMwcHg7XG5cdCAgICAgICAgdG9wOiAtNDVweDtcblx0ICAgICAgICBsZWZ0OiA1MCU7XG5cdCAgICAgICAgbWFyZ2luLWxlZnQ6LTE1cHg7XG5cdCAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXHQgICAgICAgIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkO1xuXHQgICAgICB9XG5cdCAgICBgfVxuXHQgIDwvc3R5bGU+XG5cdDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=components/Card.js */"
	}));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0VXB2b3RlciIsInByb3BzIiwidW5pIiwiX2lkIiwiaW5kZXgiLCJfaGFuZGxlQ2FyZENsaWNrIiwicmFuayIsInRpbWVzX3JhbmsiLCJ3ZWJzaXRlIiwibmFtZSIsImNvdW50cnkiLCJ2b3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWlCLEFBRXhCOzs7Ozs7OztrQkFBZSxVQUFBLEFBQUMsT0FBRDt3QkFDZCxjQUFBO1NBRVEsRUFBRSxzQ0FBbUMsTUFBQSxBQUFNLElBQXpDLEFBQTZDLE1BRnZELEFBRVEsQUFDUDtnQkFBWSxNQUhiLEFBR21CLEFBQ2xCO1dBQVMsTUFKVixBQUlnQjtzQ0FKaEIsQUFDVzs7YUFEWDtlQUFBLEFBTUM7QUFORDtBQUVDLEVBRkQsa0JBTUMsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFDRTtBQURGO0FBQUEsb0JBQ0UsY0FBQTtTQUNRLEVBQUUsUUFEVixBQUNRLEFBQVU7c0NBRGxCLEFBRVc7O2FBRlg7ZUFBQSxBQUlFO0FBSkY7QUFDQyxvQkFHQyxjQUFBO2FBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUFKRixBQUlFLEFBQXdCLG9CQUFBLEFBQU0sSUFKaEMsQUFJb0MsTUFBTyxLQUw3QyxBQUNFLEFBTUEsb0JBQUEsY0FBQTtTQUNRLEVBQUUsUUFEVixBQUNRLEFBQVU7c0NBRGxCLEFBRVc7O2FBRlg7ZUFBQSxBQUlFO0FBSkY7QUFDQyxvQkFHQyxjQUFBO2FBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUFKRixBQUlFLEFBQXFCLGlCQUFBLEFBQU0sSUFKN0IsQUFJaUMsQUFBWSxZQWpCaEQsQUFNQyxBQU9FLEFBUUYscUJBQUEsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFDRTtBQURGO0FBQUEsb0JBQ0UsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFDRTtBQURGO0FBQUEsMkNBQ3dDLHFDQUFrQyxNQUFBLEFBQU0sSUFBTixBQUFVLFVBQVUsTUFBQSxBQUFNLElBQTFCLEFBQThCLFVBQXRHLEFBQXNDLEFBQTBFLDhDQUFoSCxBQUFlOzthQUFmO2VBREYsQUFDRSxBQUNBO0FBREE7cUJBQ0EsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFDRztBQURIO0FBQUEsVUFDRyxBQUFNLElBSFgsQUFFRSxBQUNhLEFBRWIsdUJBQUEsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFDRztBQURIO0FBQUEsVUFDRyxBQUFNLElBUGIsQUFDRSxBQUtFLEFBQ2EsQUFHZiwyQkFBQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNFO0FBREY7QUFBQSxvQkFDRSxjQUFBO1NBQ1EsRUFBRSxRQURWLEFBQ1EsQUFBVTtzQ0FEbEIsQUFFVzs7YUFGWDtlQUFBLEFBSUU7QUFKRjtBQUNDLG9CQUdDLEFBQUMsdUNBQVksS0FBSyxNQUFBLEFBQU0sSUFBeEIsQUFBNEIsS0FBSyxPQUFPLE1BQUEsQUFBTSxJQUE5QyxBQUFrRDthQUFsRDtlQUxKLEFBQ0UsQUFJRSxBQUVGO0FBRkU7c0JBRUYsY0FBQTtTQUNRLEVBQUUsUUFEVixBQUNRLEFBQVUsQUFFakI7O1FBQU0sTUFBQSxBQUFNLElBSGIsQUFHaUI7c0NBSGpCLEFBRVc7O2FBRlg7ZUFBQTtBQUFBO0FBQ0MsSUF2Q04sQUFxQkMsQUFVRSxBQU9FO1dBdENMO09BRGMsQUFDZDtBQUFBO0FBREQiLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL2VyYXNtb29zZS9hcHAtY2xpZW50In0=