import { gql, graphql } from 'react-apollo'
import UniListSearchResults from './UniListSearchResults'

const POSTS_PER_PAGE = 51;

const allUnis = gql`
  query allUnis($first: Int!, $skip: Int!, $searchObj: String!) {
    allUnis(first: $first, skip: $skip, searchObj: $searchObj) {
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
      cityRating
      uniRating
      overallRating 
      easiness
      uni_cheapness
      free_time
      city {
        _id
        name
        country
        votes
        vibes { 
          name
          count
        }
        activities
        travel_options{
          value
          count
        }
        city_recommendation{
          value
          count
        }
        culture{
          value
          count
        }
        rent_cost{
          value
          count
        }
        beer_cost{
          value
          count
        }
        coffee_cost{
          value
          count
        }
        kebab_cost{
          value
          count
        }
        monthly_cost{
          value
          count
        }
        culture{
          value
          count
        }
        if_you_like
        review_count
        danceclub_cost{
          value
          count
        }
        student_friendliness{
          value
          count
        }
        nightlife{
          value
          count
        }
        gastronomy{
          value
          count
        }
        sports{
          value
          count
        }
        leisure
        city_cheapness
      }
    },
    _allUnisMeta {
      count
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (UniList)
export default graphql(allUnis, {
    options: (ownProps) => {  
      return {
        notifyOnNetworkStatusChange: true,
        variables: {
          skip: 0,
          first: POSTS_PER_PAGE,
          searchObj: JSON.stringify(ownProps.searchObj)
        },
      };  
    },
    props: ({ data: { loading, error, allUnis, _allUnisMeta, fetchMore} }) => ({
        allUnis,
        _allUnisMeta,
        error,
        loading,
        fetchMore,
        postPerPage: POSTS_PER_PAGE
    })
})(UniListSearchResults);