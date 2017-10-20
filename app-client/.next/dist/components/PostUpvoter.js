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

var _jsxFileName = '/Users/kristiankyvik/code/erasmoose/app-client/components/PostUpvoter.js';

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
    css: 'button.jsx-3983246912{background-color:transparent;border:1px solid #e4e4e4;color:#fff;}button.jsx-3983246912:active{background-color:transparent;}button.jsx-3983246912:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-color:transparent transparent #fff transparent;border-style:solid;border-width:0 4px 6px 4px;content:"";height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCLEFBR3dDLEFBS0EsQUFHWCw2QkFQTyxBQUszQix5QkFKYSxXQUNiLE1BTXdELHNEQUNuQyxtQkFDUSwyQkFDaEIsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL2VyYXNtb29zZS9hcHAtY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5mdW5jdGlvbiBQb3N0VXB2b3RlciAoeyB1cHZvdGUsIHZvdGVzLCBfaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXB2b3RlKF9pZCwgdm90ZXMgKyAxKX0+XG4gICAgICB7dm90ZXN9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDRweCA2cHggNHB4O1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuY29uc3QgdXB2b3RlVW5pdmVyc2l0eSA9IGdxbGBcbiAgbXV0YXRpb24gdXBkYXRlVW5pdmVyc2l0eSgkX2lkOiBTdHJpbmcsICR2b3RlczogSW50KSB7XG4gICAgdXBkYXRlVW5pdmVyc2l0eShfaWQ6ICRfaWQsIHZvdGVzOiAkdm90ZXMpIHtcbiAgICAgIF9pZFxuICAgICAgX190eXBlbmFtZVxuICAgICAgdm90ZXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh1cHZvdGVVbml2ZXJzaXR5LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdXB2b3RlOiAoX2lkLCB2b3RlcykgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyBfaWQsIHZvdGVzIH0sXG4gICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgX190eXBlbmFtZTogJ011dGF0aW9uJyxcbiAgICAgICAgdXBkYXRlVW5pdmVyc2l0eToge1xuICAgICAgICAgIF9fdHlwZW5hbWU6ICdVbml2ZXJzaXR5JyxcbiAgICAgICAgICBfaWQ6IG93blByb3BzLl9pZCxcbiAgICAgICAgICB2b3Rlczogb3duUHJvcHMudm90ZXMgKyAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSkoUG9zdFVwdm90ZXIpXG4iXX0= */\n/*@ sourceURL=components/PostUpvoter.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJncWwiLCJncmFwaHFsIiwiUG9zdFVwdm90ZXIiLCJ1cHZvdGUiLCJ2b3RlcyIsIl9pZCIsInVwdm90ZVVuaXZlcnNpdHkiLCJwcm9wcyIsIm93blByb3BzIiwibXV0YXRlIiwidmFyaWFibGVzIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwiX190eXBlbmFtZSIsInVwZGF0ZVVuaXZlcnNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBSzs7Ozs7Ozs7QUFFZCxTQUFBLEFBQVMsa0JBQXFDO01BQXRCLEFBQXNCLGNBQXRCLEFBQXNCO01BQWQsQUFBYyxhQUFkLEFBQWM7TUFBUCxBQUFPLFdBQVAsQUFBTyxBQUM1Qzs7eUJBQ0UsY0FBQSxZQUFRLFNBQVMsbUJBQUE7YUFBTSxPQUFBLEFBQU8sS0FBSyxRQUFsQixBQUFNLEFBQW9CO0FBQTNDLGtCQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7R0FBQSxFQUFBO2FBQUE7U0FERixBQUNFLEFBd0JIO0FBeEJHOzs7QUEwQkosSUFBTSxtQkFBQSxBQUFtQixzQkFBekIsQUFVQTs7NENBQWUsQUFBUTtTQUNkLHNCQUFBO1FBQUEsQUFBRyxpQkFBSCxBQUFHO1FBQUgsQUFBYSxlQUFiLEFBQWE7O2NBQ1YsZ0JBQUEsQUFBQyxLQUFELEFBQU0sT0FBTjs7cUJBQ0ssRUFBRSxLQUFGLEtBQU8sT0FEVyxBQUNsQixBQUNYOzt3QkFBb0IsQUFDTixBQUNaOzswQkFBa0IsQUFDSixBQUNaO21CQUFLLFNBRlcsQUFFRixBQUNkO3FCQUFPLFNBQUEsQUFBUyxRQVBkLEFBQWdCLEFBQU8sQUFFVCxBQUVBLEFBR1E7QUFIUixBQUNoQjtBQUhnQixBQUNsQjtBQUgyQixBQUM3QixTQURzQjtBQURuQixBQUEyQjtBQUFBLEFBQ2hDO0FBRlcsQUFBMEI7QUFBQSxBQUN2QyxDQURhLEVBQWYsQUFBZSxBQWNaIiwiZmlsZSI6IlBvc3RVcHZvdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvZXJhc21vb3NlL2FwcC1jbGllbnQifQ==