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

var _jsxFileName = "/Users/kristiankyvik/code/serverless-graphql-apollo/app-client/components/Card.js";

exports.default = function (props) {
	return _react2.default.createElement("div", {
		style: { "backgroundImage": "url(\"https://source.unsplash.com/254x156/?" + props.uni.url + "&city&sig=" + props.uni._id + "\")" },
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
		css: ".ur-card.jsx-3197922175{height:156px;width:254px;background-size:cover;color:white;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;text-rendering:optimizeLegibility;cursor:pointer}.top.jsx-3197922175{-webkit-flex:1;-ms-flex:1;flex:1;background:-webkit-linear-gradient( top ,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 50%,transparent 100%);background:linear-gradient(to bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 50%,transparent 100%)}.text.jsx-3197922175{font-size:1.5rem;-webkit-flex:2;-ms-flex:2;flex:2}.bottom.jsx-3197922175{-webkit-flex:1;-ms-flex:1;flex:1;background:-webkit-linear-gradient( bottom ,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 70%,transparent 100%);background:linear-gradient(to top,rgba(0,0,0,0.6),rgba(0,0,0,0.3) 70%,transparent 100%)}.playfair.jsx-3197922175{font-family:'Playfair Display',serif;font-weight:600}.ur-uni-logo.jsx-3197922175{width:30px;top:-45px;left:50%;margin-left:-15px;border-radius:50%;border:2px white solid}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRE0sQUFHdUIsQUFVTixBQUtVLEFBSVYsQUFLK0IsQUFJM0IsV0FDRCxFQTVCRSxJQWVMLElBY0UsSUE1QmEsS0E2QkwsR0FwQnVGLEFBU0QsSUFLdkYsVUF0QkosQ0E2Qk0sRUFmcEIsR0FTQSxNQXRCcUMsT0E2QlosdUJBQ3pCLEtBN0I2QiwyQkFDTyxPQU1rRSxHQVNQLHdCQWQ5RSxlQUNqQixpREFLQSxBQVNBIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL3NlcnZlcmxlc3MtZ3JhcGhxbC1hcG9sbG8vYXBwLWNsaWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0VXB2b3RlciBmcm9tICcuL1Bvc3RVcHZvdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcblx0PGRpdiBcblx0XHRjbGFzc05hbWU9XCJtYTIgc2hhZG93LTQgYmctd2hpdGUgZmxleCBmbGV4LWNvbHVtbiB0YyB1ci1jYXJkXCIgXG5cdFx0c3R5bGU9e3sgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogYHVybChcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8yNTR4MTU2Lz8ke3Byb3BzLnVuaS51cmx9JmNpdHkmc2lnPSR7cHJvcHMudW5pLl9pZH1cIilgIH19IFxuXHRcdGRhdGEtaW5kZXg9e3Byb3BzLmluZGV4fVxuXHRcdG9uQ2xpY2s9e3Byb3BzLl9oYW5kbGVDYXJkQ2xpY2t9XG5cdD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB0MiBwaDIgZmxleCB0b3AgcGgyXCI+XG5cdFx0ICA8ZGl2IFxuXHRcdCAgXHRzdHlsZT17eyBcImZsZXhcIjogMSB9fSBcblx0XHQgIFx0Y2xhc3NOYW1lPVwiYiB0bCBmNyByb2JvdDBcIlxuXHRcdCAgPlxuXHRcdCAgICA8c3BhbiA+VW5pUmFuazogPC9zcGFuPntwcm9wcy51bmkucmFua30gezF9XG5cdFx0ICA8L2Rpdj5cblx0XHQgIDxkaXYgXG5cdFx0ICBcdHN0eWxlPXt7IFwiZmxleFwiOiAxIH19IFxuXHRcdCAgXHRjbGFzc05hbWU9XCJiIHRyIGY3IHJvYm90MFwiXG5cdFx0ICA+XG5cdFx0ICAgIDxzcGFuID5SYW5rOiA8L3NwYW4+e3Byb3BzLnVuaS50aW1lc19yYW5rfXszfVxuXHRcdCAgPC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sdW1uIGZsZXggYm90dG9tIHB0MVwiPlxuXHRcdCAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdW1uIHRleHQgcGIzIHBoMiByZWxhdGl2ZVwiPlxuXHRcdCAgICA8aW1nIGNsYXNzTmFtZT1cInVyLXVuaS1sb2dvIGFic29sdXRlXCIgc3JjPXtgaHR0cHM6Ly9sb2dvLmNsZWFyYml0LmNvbS8ke3Byb3BzLnVuaS53ZWJzaXRlID8gcHJvcHMudW5pLndlYnNpdGUgOiBcInV1Lm5sXCIgfWB9IC8+XG5cdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwicHYxIGY2IGZ3N1wiPlxuXHRcdCAgICAgIHtwcm9wcy51bmkubmFtZX1cblx0XHQgICAgPC9kaXY+XG5cdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwicm9ib3QwIGY2IG8tODBcIj5cblx0XHQgICAgICB7cHJvcHMudW5pLmNvdW50cnl9XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgPC9kaXY+XG5cdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInB2MiBwaDIgZmxleCBpdGVtcy1lbmRcIj5cblx0XHQgICAgPGRpdiBcblx0XHQgICAgXHRzdHlsZT17eyBcImZsZXhcIjogMSB9fSBcblx0XHQgICAgXHRjbGFzc05hbWU9XCJiIHRsIGY3IHJvYm90MFwiXG5cdFx0ICAgID5cblx0XHQgICAgICA8UG9zdFVwdm90ZXIgX2lkPXtwcm9wcy51bmkuX2lkfSB2b3Rlcz17cHJvcHMudW5pLnZvdGVzfSAvPlxuXHRcdCAgICA8L2Rpdj5cblx0XHQgICAgPGEgXG5cdFx0ICAgIFx0c3R5bGU9e3sgXCJmbGV4XCI6IDEgfX0gXG5cdFx0ICAgIFx0Y2xhc3NOYW1lPVwiYiBsaW5rIHRyIHdoaXRlIGY3IHJvYm90MCB1bmRlcmxpbmVcIlxuXHRcdCAgICBcdGhyZWY9e3Byb3BzLnVuaS53ZWJzaXRlfVxuXHRcdCAgICA+XG5cdFx0ICAgXHR2aXNpdCBzaXRlXG5cdFx0ICAgIDwvYT5cblx0XHQgIDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cblx0ICA8c3R5bGUganN4PlxuXHQgICAge2Bcblx0ICAgICAgLnVyLWNhcmQge1xuXHQgICAgICAgIGhlaWdodDogMTU2cHg7XG5cdCAgICAgICAgd2lkdGg6IDI1NHB4O1xuXHQgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdCAgICAgICAgY29sb3I6IHdoaXRlO1xuXHQgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQgICAgICAgIGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0ICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHQgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblx0ICAgICAgfVxuXHQgICAgICAudG9wIHtcblx0ICAgICAgICBmbGV4OiAxO1xuXHQgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCB0b3AgLCByZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC4zKSA1MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuXHQgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjMpIDUwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG5cdCAgICAgIH1cblx0ICAgICAgLnRleHQge1xuXHQgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXHQgICAgICAgIGZsZXg6IDI7XG5cdCAgICAgIH1cblx0ICAgICAgLmJvdHRvbSB7XG5cdCAgICAgICAgZmxleDogMTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggYm90dG9tICwgcmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuMykgNzAlLCB0cmFuc3BhcmVudCAxMDAlKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC4zKSA3MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuXHQgICAgICB9XG5cdCAgICAgIC5wbGF5ZmFpciB7XG5cdCAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG5cdCAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblx0ICAgICAgfVxuXHQgICAgICAudXItdW5pLWxvZ28ge1xuXHQgICAgICAgIHdpZHRoOiAzMHB4O1xuXHQgICAgICAgIHRvcDogLTQ1cHg7XG5cdCAgICAgICAgbGVmdDogNTAlO1xuXHQgICAgICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xuXHQgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ICAgICAgICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcblx0ICAgICAgfVxuXHQgICAgYH1cblx0ICA8L3N0eWxlPlxuXHQ8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=components/Card.js */"
	}));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0VXB2b3RlciIsInByb3BzIiwidW5pIiwidXJsIiwiX2lkIiwiaW5kZXgiLCJfaGFuZGxlQ2FyZENsaWNrIiwicmFuayIsInRpbWVzX3JhbmsiLCJ3ZWJzaXRlIiwibmFtZSIsImNvdW50cnkiLCJ2b3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWlCLEFBRXhCOzs7Ozs7OztrQkFBZSxVQUFBLEFBQUMsT0FBRDt3QkFDZCxjQUFBO1NBRVEsRUFBRSxtRUFBZ0UsTUFBQSxBQUFNLElBQXRFLEFBQTBFLHFCQUFnQixNQUFBLEFBQU0sSUFBaEcsQUFBb0csTUFGOUcsQUFFUSxBQUNQO2dCQUFZLE1BSGIsQUFHbUIsQUFDbEI7V0FBUyxNQUpWLEFBSWdCO3NDQUpoQixBQUNXOzthQURYO2VBQUEsQUFNQztBQU5EO0FBRUMsRUFGRCxrQkFNQyxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNFO0FBREY7QUFBQSxvQkFDRSxjQUFBO1NBQ1EsRUFBRSxRQURWLEFBQ1EsQUFBVTtzQ0FEbEIsQUFFVzs7YUFGWDtlQUFBLEFBSUU7QUFKRjtBQUNDLG9CQUdDLGNBQUE7YUFBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQUpGLEFBSUUsQUFBd0Isb0JBQUEsQUFBTSxJQUpoQyxBQUlvQyxNQUFPLEtBTDdDLEFBQ0UsQUFNQSxvQkFBQSxjQUFBO1NBQ1EsRUFBRSxRQURWLEFBQ1EsQUFBVTtzQ0FEbEIsQUFFVzs7YUFGWDtlQUFBLEFBSUU7QUFKRjtBQUNDLG9CQUdDLGNBQUE7YUFBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQUpGLEFBSUUsQUFBcUIsaUJBQUEsQUFBTSxJQUo3QixBQUlpQyxBQUFZLFlBakJoRCxBQU1DLEFBT0UsQUFRRixxQkFBQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNFO0FBREY7QUFBQSxvQkFDRSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNFO0FBREY7QUFBQSwyQ0FDd0MscUNBQWtDLE1BQUEsQUFBTSxJQUFOLEFBQVUsVUFBVSxNQUFBLEFBQU0sSUFBMUIsQUFBOEIsVUFBdEcsQUFBc0MsQUFBMEUsOENBQWhILEFBQWU7O2FBQWY7ZUFERixBQUNFLEFBQ0E7QUFEQTtxQkFDQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNHO0FBREg7QUFBQSxVQUNHLEFBQU0sSUFIWCxBQUVFLEFBQ2EsQUFFYix1QkFBQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNHO0FBREg7QUFBQSxVQUNHLEFBQU0sSUFQYixBQUNFLEFBS0UsQUFDYSxBQUdmLDJCQUFBLGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBLEFBQ0U7QUFERjtBQUFBLG9CQUNFLGNBQUE7U0FDUSxFQUFFLFFBRFYsQUFDUSxBQUFVO3NDQURsQixBQUVXOzthQUZYO2VBQUEsQUFJRTtBQUpGO0FBQ0Msb0JBR0MsQUFBQyx1Q0FBWSxLQUFLLE1BQUEsQUFBTSxJQUF4QixBQUE0QixLQUFLLE9BQU8sTUFBQSxBQUFNLElBQTlDLEFBQWtEO2FBQWxEO2VBTEosQUFDRSxBQUlFLEFBRUY7QUFGRTtzQkFFRixjQUFBO1NBQ1EsRUFBRSxRQURWLEFBQ1EsQUFBVSxBQUVqQjs7UUFBTSxNQUFBLEFBQU0sSUFIYixBQUdpQjtzQ0FIakIsQUFFVzs7YUFGWDtlQUFBO0FBQUE7QUFDQyxJQXZDTixBQXFCQyxBQVVFLEFBT0U7V0F0Q0w7T0FEYyxBQUNkO0FBQUE7QUFERCIsImZpbGUiOiJDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby9hcHAtY2xpZW50In0=