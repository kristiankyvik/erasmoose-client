import React from 'react'
import { gql, graphql } from 'react-apollo'

function countReviews(data) {
  return (
    <div className="flex pr4 flex-column ph3 pl5-l">
      <div className="flex items-center f6 b pb1">
        METRICS:
      </div>
      <div className="flex flex-column pl2">
        <div className="tl">
          <span className="b f6">
            <i className="fa fa-university mr1" aria-hidden="true"></i>
            { data._allReviewsMeta.unisCount } unis
          </span>
        </div>
        <div className="tl">
          <span className="b f6">
            <i className="fa fa-user mr2" aria-hidden="true"></i>
            { data._allReviewsMeta.reviewsCount } reviews
          </span>
        </div>
      </div>
    </div>
  );
}

const getUnisWithReview = gql`
  query {
    _allReviewsMeta {
      unisCount
      reviewsCount
    }
  }
`

export default graphql(getUnisWithReview, {
  options: {
    notifyOnNetworkStatusChange: true
  },
  props: (props) => props.data
})(countReviews);