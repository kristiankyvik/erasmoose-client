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
  console.log(process.env.NODE_ENV, process.env.PROD_SERVER_URL);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbml0QXBvbGxvLmpzIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsImNyZWF0ZU5ldHdvcmtJbnRlcmZhY2UiLCJmZXRjaCIsImFwb2xsb0NsaWVudCIsInByb2Nlc3MiLCJicm93c2VyIiwiZ2xvYmFsIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwiY29uc29sZSIsImxvZyIsImVudiIsIk5PREVfRU5WIiwiUFJPRF9TRVJWRVJfVVJMIiwic3NyTW9kZSIsIm5ldHdvcmtJbnRlcmZhY2UiLCJ1cmkiLCJTRVJWRVJfVVJMIiwib3B0cyIsImNyZWRlbnRpYWxzIiwiaW5pdEFwb2xsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQVMsQUFBYzs7QUFDdkIsQUFBTzs7Ozs7O0FBRVAsSUFBSSxlQUFKLEFBQW1COztBQUVuQjtBQUNBLElBQUksQ0FBQyxRQUFMLEFBQWEsU0FBUyxBQUNwQjtTQUFBLEFBQU8sQUFBUSxBQUNoQjs7O0FBRUQsU0FBQSxBQUFTLE9BQVQsQUFBaUIsY0FBYyxBQUM3QjtVQUFBLEFBQVEsSUFBSSxRQUFBLEFBQVEsSUFBcEIsQUFBd0IsVUFBUyxRQUFBLEFBQVEsSUFBekMsQUFBNkMsQUFFN0M7OztrQkFBd0IsQUFFdEI7YUFBUyxDQUFDLFFBRlksQUFFSixTQUFTLEFBQzNCOztXQUNPLFFBQUEsQUFBUSxJQUQwQixBQUN0QixZQUFZLEFBQzdCO2NBQVEsQUFDTjtxQkFOTixBQUFPLEFBQWlCLEFBR0osQUFBdUIsQUFFakMsQUFDUyxBQUlwQjtBQUxXO0FBRmlDLEFBQ3ZDLEtBRGdCO0FBSEksQUFDdEIsR0FESyxBQUFJO0FBWWI7O0FBQWUsU0FBQSxBQUFTLFdBQVQsQUFBcUIsY0FBYyxBQUNoRDtBQUNBO0FBQ0E7TUFBSSxDQUFDLFFBQUwsQUFBYSxTQUFTLEFBQ3BCO1dBQU8sT0FBUCxBQUFPLEFBQU8sQUFDZjtBQUVEOztBQUNBO01BQUksQ0FBSixBQUFLLGNBQWMsQUFDakI7bUJBQWUsT0FBZixBQUFlLEFBQU8sQUFDdkI7QUFFRDs7U0FBQSxBQUFPLEFBQ1IiLCJmaWxlIjoiaW5pdEFwb2xsby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RpYW5reXZpay9jb2RlL3NlcnZlcmxlc3MtZ3JhcGhxbC1hcG9sbG8vd2l0aC1hcG9sbG8ifQ==