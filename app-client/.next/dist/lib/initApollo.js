'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = require('react-apollo');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

function create(initialState) {
  return new _reactApollo.ApolloClient({
    initialState: initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      uri: process.env.SERVER_URL, // Server URL (must be absolute)
      opts: { // Additional fetch() options like `credentials` or `headers`
        credentials: 'same-origin'
      }
    })
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbml0QXBvbGxvLmpzIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsImNyZWF0ZU5ldHdvcmtJbnRlcmZhY2UiLCJmZXRjaCIsImFwb2xsb0NsaWVudCIsInByb2Nlc3MiLCJicm93c2VyIiwiZ2xvYmFsIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwic3NyTW9kZSIsIm5ldHdvcmtJbnRlcmZhY2UiLCJ1cmkiLCJlbnYiLCJTRVJWRVJfVVJMIiwib3B0cyIsImNyZWRlbnRpYWxzIiwiaW5pdEFwb2xsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQVMsQUFBYzs7QUFDdkIsQUFBTzs7Ozs7O0FBRVAsSUFBSSxlQUFKLEFBQW1COztBQUVuQjtBQUNBLElBQUksQ0FBQyxRQUFMLEFBQWEsU0FBUyxBQUNwQjtTQUFBLEFBQU8sQUFBUSxBQUNoQjs7O0FBRUQsU0FBQSxBQUFTLE9BQVQsQUFBaUIsY0FBYyxBQUM3Qjs7a0JBQXdCLEFBRXRCO2FBQVMsQ0FBQyxRQUZZLEFBRUosU0FBUyxBQUMzQjs7V0FDTyxRQUFBLEFBQVEsSUFEMEIsQUFDdEIsWUFBWSxBQUM3QjtjQUFRLEFBQ047cUJBTk4sQUFBTyxBQUFpQixBQUdKLEFBQXVCLEFBRWpDLEFBQ1MsQUFJcEI7QUFMVztBQUZpQyxBQUN2QyxLQURnQjtBQUhJLEFBQ3RCLEdBREssQUFBSTtBQVliOztBQUFlLFNBQUEsQUFBUyxXQUFULEFBQXFCLGNBQWMsQUFDaEQ7QUFDQTtBQUNBO01BQUksQ0FBQyxRQUFMLEFBQWEsU0FBUyxBQUNwQjtXQUFPLE9BQVAsQUFBTyxBQUFPLEFBQ2Y7QUFFRDs7QUFDQTtNQUFJLENBQUosQUFBSyxjQUFjLEFBQ2pCO21CQUFlLE9BQWYsQUFBZSxBQUFPLEFBQ3ZCO0FBRUQ7O1NBQUEsQUFBTyxBQUNSIiwiZmlsZSI6ImluaXRBcG9sbG8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhdHJpY2t2b25wbGF0ZW4vdW5pcmFuay9hcHAtY2xpZW50In0=