import { gql, graphql } from 'react-apollo'
import UniListResults from './UniListResults'

const POSTS_PER_PAGE = 33;

const allUnis = gql`
  query allUnis($first: Int!, $skip: Int!, $searchKey: String) {
    allUnis(first: $first, skip: $skip, searchKey: $searchKey) {
      _id
      name
      votes
      url
      website
      country
    },
    _allUnisMeta {
      count
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (UniList)
export default graphql(allUnis, {
    options: (ownProps) => ({
        notifyOnNetworkStatusChange: true,
        variables: {
            skip: 0,
            first: POSTS_PER_PAGE,
            searchKey: ownProps.searchKey
        },
    }),
    props: ({ data: { loading, error, allUnis, _allUnisMeta, fetchMore } }) => ({
        allUnis,
        _allUnisMeta,
        error,
        loading,
        fetchMore
    })
})(UniListResults);