import { gql, graphql } from 'react-apollo'

export const allUnis = gql`
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
      }
    },
    _allUnisMeta {
      count
    }
  }
`
export const getUnisWithReview = gql`
  query {
    _allReviewsMeta {
      unisCount
      reviewCount
    }
  }
`
export const updateVotes = gql`
  mutation updateVotes($_id: String, $votes: Int, $entity_id: String, $type: String) {
		updateVotes(_id: $_id, votes: $votes, entity_id: $entity_id, type: $type) {
      entity_id
      votes
      type
    }
  }
`

export const reviews = gql`
  query reviews($entity_id: String!, $type: String!) {
    reviews(entity_id: $entity_id, type: $type) {
      _id
      text
      votes
      date
    }
  }
`

export const sendFeedback = gql`
  mutation sendFeedback($email: String, $message: String) {
    sendFeedback(email: $email, message: $message) {
      ok   
    }
  }
`

export const dropdownValues = gql`
  query {
    distinctCountries
    distinctLanguages
    distinctAreas
  }
`

export const createPost = gql`
  mutation createPost($title: String!, $url: String!) {
    createPost(title: $title, url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`