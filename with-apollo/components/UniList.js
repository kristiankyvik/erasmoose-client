import { gql, graphql } from 'react-apollo'
import ErrorMessage from './ErrorMessage'
import Card from './Card'

const POSTS_PER_PAGE = 20

function UniList ({ data: { loading, error, allUnis, _allUnisMeta }, loadMorePosts }) {
  if (error) return <ErrorMessage message='Error loading entries.' />
  if (allUnis && allUnis.length) {
    const areMorePosts = allUnis.length < _allUnisMeta.count
    return (
      <section className="tc">
        <div className="flex justify-center">
          <div style={{ width: 1080 }} className="flex flex-wrap">
            {allUnis.map((uni, index) =>
              <Card 
                key={uni.name}
                uni={uni}
              />
            )}
          </div>
        </div>
        {areMorePosts ? <button onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}
        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          div {
            align-items: center;
            display: flex;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            content: "";
            height: 0;
            margin-right: 5px;
            width: 0;
          }
        `}</style>
      </section>
    )
  }
  return <div>Loading</div>
}

const allUnis = gql`
  query allUnis($first: Int!, $skip: Int!) {
    allUnis(first: $first, skip: $skip) {
      _id
      name
      votes
      url
      website
    },
    _allUnisMeta {
      count
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (UniList)
export default graphql(allUnis, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allUnis.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allUnis: [...previousResult.allUnis, ...fetchMoreResult.allUnis]
          })
        }
      })
    }
  })
})(UniList)
