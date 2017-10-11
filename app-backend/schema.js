
const schema = `
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
`;

// eslint-disable-next-line import/prefer-default-export
export { schema };
