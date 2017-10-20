require('dotenv').config()
require('request'); // needed to force webpack to load request lib
const rp = require('request-promise');
const { parse } = require('url')
const { microGraphql, microGraphiql } = require('graphql-server-micro')
const { makeExecutableSchema } = require('graphql-tools')
const cors = require('micro-cors')();

const API_KEY = process.env.MLAB_API_KEY;
const API_URL = 'https://api.mlab.com/api/1/databases/unirank/collections/universities';

console.log(process.env);

const prepare = (o) => {
  o._id = o._id["$oid"];
  return o;
};

const typeDefs = `
type University {   
  _id: String
  name: String
  votes: Int
  url: String
  country: String
  createdAt: String
  city: String
  times_rank: Int
  website: String
  size: String
  academics: String
  sport: String  
  social: String  
  party: String
}

type Meta {   
  count: Int
}

type Query {
  allUnis(first: Int, skip: Int) : [University]
  _allUnisMeta: Meta
}

type Mutation {
  updateUniversity(_id: String, votes: Int): University
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
  mutation: Mutation
}
`;

const resolvers = {
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

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: console,
});

module.exports = cors((req, res) => {
    const url = parse(req.url)
    if(url.pathname === '/graphiql') {
        return microGraphiql({endpointURL: '/'})(req, res)
    }

    return microGraphql({ schema })(req, res)
});