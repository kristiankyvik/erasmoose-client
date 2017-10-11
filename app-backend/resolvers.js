require('babel-core/register');
require('babel-polyfill');

// Connect to database
const mongoUtil = require('./mongoUtil');

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    allUnis: async (whot, opts) => {
      return (await mongoUtil.getCollection('universities')).find().limit(opts.first).toArray();
    },
    _allUnisMeta: async () => {
      return { count: (await mongoUtil.getCollection('universities')).count() };
    },
  },
};
