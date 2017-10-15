'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kristiankyvik/code/serverless-graphql-apollo/app-client/components/PostUpvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation updateUniversity($_id: String, $votes: Int) {\n    updateUniversity(_id: $_id, votes: $votes) {\n      _id\n      __typename\n      votes\n    }\n  }\n'], ['\n  mutation updateUniversity($_id: String, $votes: Int) {\n    updateUniversity(_id: $_id, votes: $votes) {\n      _id\n      __typename\n      votes\n    }\n  }\n']);

function PostUpvoter(_ref) {
  var upvote = _ref.upvote,
      votes = _ref.votes,
      _id = _ref._id;

  return _react2.default.createElement('button', { onClick: function onClick() {
      return upvote(_id, votes + 1);
    }, className: 'jsx-3983246912',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, votes, _react2.default.createElement(_style2.default, {
    styleId: '3983246912',
    css: 'button.jsx-3983246912{background-color:transparent;border:1px solid #e4e4e4;color:#fff}button.jsx-3983246912:active{background-color:transparent}button.jsx-3983246912:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-color:transparent transparent #fff transparent;border-style:solid;border-width:0 4px 6px 4px;content:"";height:0;margin-right:5px;width:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCLEFBR3dDLEFBS0EsQUFHWCw2QkFQTyxBQUszQix5QkFKYSxXQUNiLE1BTXdELHNEQUNuQyxtQkFDUSwyQkFDaEIsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL3NlcnZlcmxlc3MtZ3JhcGhxbC1hcG9sbG8vYXBwLWNsaWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZnVuY3Rpb24gUG9zdFVwdm90ZXIgKHsgdXB2b3RlLCB2b3RlcywgX2lkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwdm90ZShfaWQsIHZvdGVzICsgMSl9PlxuICAgICAge3ZvdGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMCA0cHggNnB4IDRweDtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IHVwdm90ZVVuaXZlcnNpdHkgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVVuaXZlcnNpdHkoJF9pZDogU3RyaW5nLCAkdm90ZXM6IEludCkge1xuICAgIHVwZGF0ZVVuaXZlcnNpdHkoX2lkOiAkX2lkLCB2b3RlczogJHZvdGVzKSB7XG4gICAgICBfaWRcbiAgICAgIF9fdHlwZW5hbWVcbiAgICAgIHZvdGVzXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwodXB2b3RlVW5pdmVyc2l0eSwge1xuICBwcm9wczogKHsgb3duUHJvcHMsIG11dGF0ZSB9KSA9PiAoe1xuICAgIHVwdm90ZTogKF9pZCwgdm90ZXMpID0+IG11dGF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHsgX2lkLCB2b3RlcyB9LFxuICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIF9fdHlwZW5hbWU6ICdNdXRhdGlvbicsXG4gICAgICAgIHVwZGF0ZVVuaXZlcnNpdHk6IHtcbiAgICAgICAgICBfX3R5cGVuYW1lOiAnVW5pdmVyc2l0eScsXG4gICAgICAgICAgX2lkOiBvd25Qcm9wcy5faWQsXG4gICAgICAgICAgdm90ZXM6IG93blByb3BzLnZvdGVzICsgMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFBvc3RVcHZvdGVyKVxuIl19 */\n/*@ sourceURL=components/PostUpvoter.js */'
  }));
}

var upvoteUniversity = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(upvoteUniversity, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      upvote: function upvote(_id, votes) {
        return mutate({
          variables: { _id: _id, votes: votes },
          optimisticResponse: {
            __typename: 'Mutation',
            updateUniversity: {
              __typename: 'University',
              _id: ownProps._id,
              votes: ownProps.votes + 1
            }
          }
        });
      }
    };
  }
})(PostUpvoter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJncWwiLCJncmFwaHFsIiwiUG9zdFVwdm90ZXIiLCJ1cHZvdGUiLCJ2b3RlcyIsIl9pZCIsInVwdm90ZVVuaXZlcnNpdHkiLCJwcm9wcyIsIm93blByb3BzIiwibXV0YXRlIiwidmFyaWFibGVzIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwiX190eXBlbmFtZSIsInVwZGF0ZVVuaXZlcnNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBSzs7Ozs7Ozs7QUFFZCxTQUFBLEFBQVMsa0JBQXFDO01BQXRCLEFBQXNCLGNBQXRCLEFBQXNCO01BQWQsQUFBYyxhQUFkLEFBQWM7TUFBUCxBQUFPLFdBQVAsQUFBTyxBQUM1Qzs7eUJBQ0UsY0FBQSxZQUFRLFNBQVMsbUJBQUE7YUFBTSxPQUFBLEFBQU8sS0FBSyxRQUFsQixBQUFNLEFBQW9CO0FBQTNDLGtCQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7R0FBQSxFQUFBO2FBQUE7U0FERixBQUNFLEFBd0JIO0FBeEJHOzs7QUEwQkosSUFBTSxtQkFBQSxBQUFtQixzQkFBekIsQUFVQTs7NENBQWUsQUFBUTtTQUNkLHNCQUFBO1FBQUEsQUFBRyxpQkFBSCxBQUFHO1FBQUgsQUFBYSxlQUFiLEFBQWE7O2NBQ1YsZ0JBQUEsQUFBQyxLQUFELEFBQU0sT0FBTjs7cUJBQ0ssRUFBRSxLQUFGLEtBQU8sT0FEVyxBQUNsQixBQUNYOzt3QkFBb0IsQUFDTixBQUNaOzswQkFBa0IsQUFDSixBQUNaO21CQUFLLFNBRlcsQUFFRixBQUNkO3FCQUFPLFNBQUEsQUFBUyxRQVBkLEFBQWdCLEFBQU8sQUFFVCxBQUVBLEFBR1E7QUFIUixBQUNoQjtBQUhnQixBQUNsQjtBQUgyQixBQUM3QixTQURzQjtBQURuQixBQUEyQjtBQUFBLEFBQ2hDO0FBRlcsQUFBMEI7QUFBQSxBQUN2QyxDQURhLEVBQWYsQUFBZSxBQWNaIiwiZmlsZSI6IlBvc3RVcHZvdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby9hcHAtY2xpZW50In0=