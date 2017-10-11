require('babel-core/register');
require('babel-polyfill');

const rp = require('request-promise');
// Connect to database
// const mongoUtil = require('./mongoUtil');
const API_KEY = 'iZWzn7_nZs_fdPr0GloRQJMAch859a_1';
const API_URL = 'https://api.mlab.com/api/1/databases/unirank/collections/universities';

const prepare = (o) => {
  o._id = o._id["$oid"];
  return o;
};

// eslint-disable-next-line import/prefer-default-export
// export const resolvers = {
//   Query: {
//     allUnis: async (whot, opts) => {
//       return (await mongoUtil.getCollection('universities')).find().limit(opts.first).toArray();
//     },
//     _allUnisMeta: async () => {
//       return { count: (await mongoUtil.getCollection('universities')).count() };
//     },
//   },
// };

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    allUnis: (whot, opts) => {
      return rp({
        uri: API_URL,
        transform: (body, response, resolveWithFullResponse) => {
          return body.map(prepare);
        },
        qs: {
          l: opts.first,
          apiKey: API_KEY,
        },
        json: true, // Automatically parses the JSON string in the response
      });
    },
    _allUnisMeta: () => {
      return rp({
        uri: API_URL,
        qs: {
          c: true,
          apiKey: API_KEY,
        },
        json: true, // Automatically parses the JSON string in the response
      });
    },
  },
};
