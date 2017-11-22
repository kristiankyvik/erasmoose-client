import React from 'react'
import { gql, graphql } from 'react-apollo'

function countReviews(data) {
  console.log("Look at the data object. It returns allReviews with empty properties. If you take the aggregate query for allReviews and try it out in robo 3T you see that the query is correct. Please verify what's wrong there. The solution that is implemented now works but I use map and reduce which should be done in mongo.", data)
  
   const unisReviewed = data.allUnisWithReview.length
   const reviews = data.allUnisWithReview.map(elm => elm.reviews_count).reduce((agg, cur) => (agg + cur))
  
  return (
    <div className="flex items-center ph4">
      <div className="tc">
        <div className="f6">Universities Reviewed so far: </div>
        <span className="b f3">{ unisReviewed }</span>
      </div>
      <div className="tc">
        <div className="f6">Total Reviews so far: </div>
        <span className="b f3">{ reviews }</span>
      </div>
    </div>
  );
}

const getUnisWithReview = gql`
  query {
    allUnisWithReview {
      reviews_count
    }
    allReviews {
      allReviews
      allUnisReviewed
    }
  }
`

export default graphql(getUnisWithReview, {
  options: {
    notifyOnNetworkStatusChange: true
  },
  props: (props) => props.data
})(countReviews);