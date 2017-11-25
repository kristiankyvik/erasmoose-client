import { gql, graphql } from 'react-apollo'
import UniListSearchResults from './UniListSearchResults'

const POSTS_PER_PAGE = 33;

const allUnis = gql`
  query allUnis($first: Int!, $skip: Int!, $searchKey: String, $city_id: String!) {
    allUnis(first: $first, skip: $skip, searchKey: $searchKey) {
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
      uni_rating {
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
      reviews_count
      languages {
        name
        count
      }
      main_disciplines {
        name
        count
      }
    },
    _allUnisMeta {
      count
    },
    getCity( _id: $city_id) {
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
      city_rating{
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
      reviews_count
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
    },
  }
`


// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (UniList)
export default graphql(allUnis, {
    options: (ownProps) => ({
      notifyOnNetworkStatusChange: true,
      variables: {
          city_id: ownProps.city_id,
          skip: 0,
          first: POSTS_PER_PAGE,
          searchKey: ownProps.pathname == '/' ? ownProps.searchKey : ownProps.query.q ? ownProps.query.q : ""
      },
    }),
    props: ({ data: { loading, error, allUnis, _allUnisMeta, fetchMore, getCity} }) => ({
        allUnis,
        _allUnisMeta,
        error,
        loading,
        fetchMore,
        getCity
    })
})(UniListSearchResults);