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

var _jsxFileName = '/Users/kristiankyvik/code/serverless-graphql-apollo/with-apollo/components/PostUpvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation updateUniversity($_id: ID!, $votes: Int) {\n    updateUniversity(_id: $_id, votes: $votes) {\n      _id\n      __typename\n      votes\n    }\n  }\n'], ['\n  mutation updateUniversity($_id: ID!, $votes: Int) {\n    updateUniversity(_id: $_id, votes: $votes) {\n      _id\n      __typename\n      votes\n    }\n  }\n']);

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
    css: 'button.jsx-3983246912{background-color:transparent;border:1px solid #e4e4e4;color:#fff}button.jsx-3983246912:active{background-color:transparent}button.jsx-3983246912:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-color:transparent transparent #fff transparent;border-style:solid;border-width:0 4px 6px 4px;content:"";height:0;margin-right:5px;width:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCLEFBR3dDLEFBS0EsQUFHWCw2QkFQTyxBQUszQix5QkFKYSxXQUNiLE1BTXdELHNEQUNuQyxtQkFDUSwyQkFDaEIsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL3NlcnZlcmxlc3MtZ3JhcGhxbC1hcG9sbG8vd2l0aC1hcG9sbG8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5cbmZ1bmN0aW9uIFBvc3RVcHZvdGVyICh7IHVwdm90ZSwgdm90ZXMsIF9pZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cHZvdGUoX2lkLCB2b3RlcyArIDEpfT5cbiAgICAgIHt2b3Rlc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDAgNHB4IDZweCA0cHg7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5jb25zdCB1cHZvdGVVbml2ZXJzaXR5ID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVVbml2ZXJzaXR5KCRfaWQ6IElEISwgJHZvdGVzOiBJbnQpIHtcbiAgICB1cGRhdGVVbml2ZXJzaXR5KF9pZDogJF9pZCwgdm90ZXM6ICR2b3Rlcykge1xuICAgICAgX2lkXG4gICAgICBfX3R5cGVuYW1lXG4gICAgICB2b3Rlc1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKHVwdm90ZVVuaXZlcnNpdHksIHtcbiAgcHJvcHM6ICh7IG93blByb3BzLCBtdXRhdGUgfSkgPT4gKHtcbiAgICB1cHZvdGU6IChfaWQsIHZvdGVzKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IF9pZCwgdm90ZXMgfSxcbiAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICBfX3R5cGVuYW1lOiAnTXV0YXRpb24nLFxuICAgICAgICB1cGRhdGVVbml2ZXJzaXR5OiB7XG4gICAgICAgICAgX190eXBlbmFtZTogJ1VuaXZlcnNpdHknLFxuICAgICAgICAgIF9pZDogb3duUHJvcHMuX2lkLFxuICAgICAgICAgIHZvdGVzOiBvd25Qcm9wcy52b3RlcyArIDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShQb3N0VXB2b3RlcilcbiJdfQ== */\n/*@ sourceURL=components/PostUpvoter.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJncWwiLCJncmFwaHFsIiwiUG9zdFVwdm90ZXIiLCJ1cHZvdGUiLCJ2b3RlcyIsIl9pZCIsInVwdm90ZVVuaXZlcnNpdHkiLCJwcm9wcyIsIm93blByb3BzIiwibXV0YXRlIiwidmFyaWFibGVzIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwiX190eXBlbmFtZSIsInVwZGF0ZVVuaXZlcnNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBSzs7Ozs7Ozs7QUFFZCxTQUFBLEFBQVMsa0JBQXFDO01BQXRCLEFBQXNCLGNBQXRCLEFBQXNCO01BQWQsQUFBYyxhQUFkLEFBQWM7TUFBUCxBQUFPLFdBQVAsQUFBTyxBQUM1Qzs7eUJBQ0UsY0FBQSxZQUFRLFNBQVMsbUJBQUE7YUFBTSxPQUFBLEFBQU8sS0FBSyxRQUFsQixBQUFNLEFBQW9CO0FBQTNDLGtCQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7R0FBQSxFQUFBO2FBQUE7U0FERixBQUNFLEFBd0JIO0FBeEJHOzs7QUEwQkosSUFBTSxtQkFBQSxBQUFtQixzQkFBekIsQUFVQTs7NENBQWUsQUFBUTtTQUNkLHNCQUFBO1FBQUEsQUFBRyxpQkFBSCxBQUFHO1FBQUgsQUFBYSxlQUFiLEFBQWE7O2NBQ1YsZ0JBQUEsQUFBQyxLQUFELEFBQU0sT0FBTjs7cUJBQ0ssRUFBRSxLQUFGLEtBQU8sT0FEVyxBQUNsQixBQUNYOzt3QkFBb0IsQUFDTixBQUNaOzswQkFBa0IsQUFDSixBQUNaO21CQUFLLFNBRlcsQUFFRixBQUNkO3FCQUFPLFNBQUEsQUFBUyxRQVBkLEFBQWdCLEFBQU8sQUFFVCxBQUVBLEFBR1E7QUFIUixBQUNoQjtBQUhnQixBQUNsQjtBQUgyQixBQUM3QixTQURzQjtBQURuQixBQUEyQjtBQUFBLEFBQ2hDO0FBRlcsQUFBMEI7QUFBQSxBQUN2QyxDQURhLEVBQWYsQUFBZSxBQWNaIiwiZmlsZSI6IlBvc3RVcHZvdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rcmlzdGlhbmt5dmlrL2NvZGUvc2VydmVybGVzcy1ncmFwaHFsLWFwb2xsby93aXRoLWFwb2xsbyJ9