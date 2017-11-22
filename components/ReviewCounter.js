import React from 'react'
import { gql, graphql } from 'react-apollo'

function countReviews(data) {
  console.log("Look at the data object. It returns allReviews with empty properties. If you take the aggregate query for allReviews and try it out in robo 3T you see that the query is correct. Please verify what's wrong there. The solution that is implemented now works but I use map and reduce which should be done in mongo.", data)
  
   const unisReviewed = data.allUnisWithReview.length
   const reviews = data.allUnisWithReview.map(elm => elm.reviews_count).reduce((agg, cur) => (agg + cur))
  
  return (
    <div className="flex pr4 flex-column pl5">
      <div className="flex items-center f6 b pb1">
        METRICS:
      </div>
      <div className="flex flex-column pl2">
        <div className="tl">
          <span className="b f6">
            <i className="fa fa-university mr1" aria-hidden="true"></i>
            { unisReviewed } unis
          </span>
        </div>
        <div className="tl">
          <span className="b f6">
            <i className="fa fa-user mr2" aria-hidden="true"></i>
            { reviews } reviews
          </span>
        </div>
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