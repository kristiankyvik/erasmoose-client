require('request'); // needed to force webpack to load request lib
const rp = require('request-promise');

const API_KEY = process.env.MLAB_API_KEY;
const API_URL = 'https://api.mlab.com/api/1/databases/unirank/collections/universities';

const prepare = (o) => {
  o._id = o._id["$oid"];
  return o;
};


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
          sk: opts.skip,
          s: { priority: "name" },
          apiKey: API_KEY,
        },
        json: true, // Automatically parses the JSON string in the response
      });
    },
    _allUnisMeta: () => {
      return rp({
        uri: API_URL,
        transform: (body, response, resolveWithFullResponse) => {
          return { count: body };
        },
        qs: {
          c: true,
          apiKey: API_KEY,
        },
        json: true, // Automatically parses the JSON string in the response
      });
    },
  },
  Mutation: {
    updateUniversity: (whot, opts) => {
      return rp({
        uri: `${API_URL}/${opts._id}`,
        method: 'PUT',
        body: {
          "$set" : { votes: opts.votes },
        },
        transform: (body, response, resolveWithFullResponse) => {
          return prepare(body);
        },
        qs: {
          apiKey: API_KEY,
        },
        json: true, // Automatically parses the JSON string in the response
      });
    },
  },
};
