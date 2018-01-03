import { gql, graphql } from 'react-apollo'
import UniCards from './UniCards'

const getUni = gql`
  query getUni($uni_id: String!) {
    getUni(_id: $uni_id) {
      _id
      name
      votes
      url
      website
      country
      city_name
      city_id
      int_orientation {
        value
        count
      }
      difficulty {
        value
        count
      }
      weekly_hours {
        value
        count
      }
      fees {
        value
        count
      }
      uni_recommendation {
        value
        count
      }
      opportunities {
        value
        count
      }
      openness {
        value
        count
      }
      clubs {
        value
        count
      }
      party {
        value
        count
      }
      female_percentage {
        value
        count
      }
      review_count
      languages {
        name
        count
      }
      main_disciplines {
        name
        count
      }
    }
  }
`


// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (UniList)
export default graphql(getUni, {
    options: (ownProps) => ({
      notifyOnNetworkStatusChange: true,
      variables: {
        uni_id: ownProps.uni_id,
      },
    }),
    props: ({ data: { loading, error, getUni} }) => ({
        getUni,
        error,
        loading,
    })
})(UniCards);